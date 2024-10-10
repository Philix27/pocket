import { publicProcedure, router } from '@/server';
import { EmailNotificationTemplate, NotificationService } from '@/server/modules/notification';
import { encryptToken, otpGenerator, verifyToken } from '@/server/lib';
import { z } from 'zod';
import { KycService } from './kycService';

const notificationService = new NotificationService();
const kycService = new KycService();

export const userRouter = router({
  getUserInfo: publicProcedure.input(z.object({ walletAddress: z.string() })).query(async (params) => {
    const user = await params.ctx.prisma.user.findFirst({ where: { walletAddress: params.input.walletAddress } });
    // todo: select properties to return
    return { ...user };
  }),

  sendEmailOtp: publicProcedure.input(z.object({ email: z.string() })).mutation(async (params) => {
    const otpCode = otpGenerator();

    try {
      await notificationService.sendEmailMessage({
        email: params.input.email,
        message: otpCode,
        template: EmailNotificationTemplate.OTP,
      });

      const encryptedToken = await encryptToken(otpCode);
      // todo: return with cookies of encrypted otp which will be further sent for verification
      return { msg: 'Otp Sent successfully', token: encryptedToken };
    } catch (error) {
      throw new Error('Could not send otp');
    }
  }),
  sendPhoneOtp: publicProcedure.input(z.object({ phone: z.string() })).mutation(async (params) => {
    const otpCode = otpGenerator();

    try {
      await notificationService.sendPhoneOtp({
        phone: params.input.phone,
        otp: otpCode,
      });

      const encryptedToken = await encryptToken(otpCode);
      // todo: return with cookies of encrypted otp which will be further sent for verification
      return { msg: 'Otp Sent successfully', token: encryptedToken };
    } catch (error) {
      throw new Error('Could not send otp');
    }
  }),

  verifyEmail: publicProcedure
    .input(z.object({ email: z.string(), otp: z.string(), token: z.string() }))
    .mutation(async (params) => {
      const isValid = await verifyToken(params.input.token, params.input.otp);

      if (!isValid) throw new Error('Invalid token');

      params.ctx.prisma.user.update({
        where: {
          email: params.input.email,
        },
        data: {
          emailStatus: 'VERIFIED',
        },
      });
    }),

  verifyPhone: publicProcedure
    .input(z.object({ phone: z.string(), otp: z.string(), token: z.string() }))
    .mutation(async (params) => {
      const isValid = await verifyToken(params.input.token, params.input.otp);

      if (!isValid) throw new Error('Invalid token');

      params.ctx.prisma.user.update({
        where: {
          phone: params.input.phone,
        },
        data: {
          phoneStatus: 'VERIFIED',
        },
      });
    }),

  verifyNin: publicProcedure
    .input(z.object({ nin: z.string(), walletAddress: z.string() }))
    .mutation(async (params) => {
      const user = await params.ctx.prisma.user.findFirst({ where: { walletAddress: params.input.walletAddress } });
      if (user?.firstName || user?.lastName || user?.dob) throw new Error('No  firstname, lastname');

      await kycService.verifyNin({
        nin: params.input.nin,
        firstName: user?.firstName!,
        lastName: user?.lastName!,
        dob: user?.dob!,
      });

      params.ctx.prisma.user.update({
        where: {
          walletAddress: params.input.walletAddress,
        },
        data: {
          ninStatus: 'VERIFIED',
          nin: params.input.nin,
        },
      });
      return {
        msg: 'Nin verified successfully',
      };
    }),
  verifyBvn: publicProcedure
    .input(z.object({ bvn: z.string(), walletAddress: z.string() }))
    .mutation(async (params) => {
      const user = await params.ctx.prisma.user.findFirst({ where: { walletAddress: params.input.walletAddress } });
      if (user?.firstName || user?.lastName || user?.dob) throw new Error('No  firstname, lastname');

      await kycService.verifyBvn({
        bvn: params.input.bvn,
        firstName: user?.firstName!,
        lastName: user?.lastName!,
        dob: user?.dob!,
      });

      params.ctx.prisma.user.update({
        where: {
          walletAddress: params.input.walletAddress,
        },
        data: {
          ninStatus: 'VERIFIED',
          bvn: params.input.bvn,
        },
      });
      return {
        msg: 'Nin verified successfully',
      };
    }),
  addProfilePicture: publicProcedure
    .input(z.object({ walletAddress: z.string(), profilePicture: z.string() }))
    .mutation(async (params) => {
      params.ctx.prisma.user.update({
        where: {
          walletAddress: params.input.walletAddress,
        },
        data: {
          profilePic: params.input.profilePicture,
        },
      });
    }),
  addNamesDob: publicProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        middleName: z.string().optional(),
        dob: z.string(),
        walletAddress: z.string(),
        residentialAddress1: z.string(),
        residentialAddress2: z.string(),
      })
    )
    .mutation(async (params) => {
      params.ctx.prisma.user.update({
        where: {
          walletAddress: params.input.walletAddress,
        },
        data: {
          firstName: params.input.firstName,
          lastName: params.input.lastName,
          middleName: params.input.middleName,
          dob: params.input.dob,
          address1: params.input.residentialAddress1,
          address2: params.input.residentialAddress2,
        },
      });
    }),
});
