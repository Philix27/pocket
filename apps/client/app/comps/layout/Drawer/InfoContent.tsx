import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { DrawerRow } from './Row';
import { FaInfo } from 'react-icons/fa';
import { MdOutlinePrivacyTip, MdQuestionMark } from 'react-icons/md';
import { IoInformation } from 'react-icons/io5';

export function InfoContent({ router }: { router: AppRouterInstance }) {
  return (
    <div>
      <DrawerRow
        title={'FAQ'}
        icon={MdQuestionMark}
        onClick={() => {
          router.push('/docs/FAQ');
        }}
      />
      <DrawerRow
        title={'About Us'}
        icon={IoInformation}
        onClick={() => {
          router.push('/docs/ABOUT');
        }}
      />
      <DrawerRow
        title={'Privacy Policy'}
        icon={MdOutlinePrivacyTip}
        onClick={() => {
          router.push('/docs/PP');
        }}
      />
      <DrawerRow
        title={'Terms of Service'}
        icon={FaInfo}
        onClick={() => {
          router.push('/docs/TOS');
        }}
      />
    </div>
  );
}
