import { AppTextInput, AppButton } from '@/comps';
import React, { useState } from 'react';
import { toast } from 'sonner';

export default function VerifyEmail() {
  const [hasSentOtp, setHasSentOtp] = useState<boolean>(false);

  const onVerify = () => {
    toast.success('Otp verified');
  };

  const onOtpSend = () => {
    toast.success('Otp Sent');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {!hasSentOtp && (
        <>
          <AppTextInput control={undefined} name={'email'} label="Email" place="jondoe@gmail.com" />
          <AppButton className="w-[75%]" onClick={onOtpSend}>
            Send otp
          </AppButton>
        </>
      )}
      {hasSentOtp && (
        <>
          <AppTextInput control={undefined} name={'email'} label="Email" place="jondoe@gmail.com" />
          <AppButton className="w-[75%]" onClick={onVerify}>
            Verify otp
          </AppButton>
        </>
      )}
    </div>
  );
}
