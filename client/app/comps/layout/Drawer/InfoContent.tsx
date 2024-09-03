import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { GoPerson } from 'react-icons/go';
import { DrawerRow } from './Row';

export function InfoContent({ router }: { router: AppRouterInstance }) {
  return (
    <div>
      <DrawerRow
        title={'Help'}
        icon={GoPerson}
        onClick={() => {
          router.push('/docs/HELP');
        }}
      />
      <DrawerRow
        title={'FAQ'}
        icon={GoPerson}
        onClick={() => {
          router.push('/docs/FAQ');
        }}
      />
      <DrawerRow
        title={'About Us'}
        icon={GoPerson}
        onClick={() => {
          router.push('/docs/ABOUT');
        }}
      />
      <DrawerRow
        title={'Privacy Policy'}
        icon={GoPerson}
        onClick={() => {
          router.push('/docs/PP');
        }}
      />
      <DrawerRow
        title={'Terms of Service'}
        icon={GoPerson}
        onClick={() => {
          router.push('/docs/TOS');
        }}
      />
    </div>
  );
}
