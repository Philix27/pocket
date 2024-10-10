import { EmailNotificationTemplate } from './emailTemplate';

export class NotificationService {
  async sendEmailMessage(props: { email: string; message: string; template: EmailNotificationTemplate }) {}
  async sendPhoneOtp(props: { phone: string; otp: string }) {}
  async sendPhoneMessage(props: { phone: string; msg: string }) {}
}
