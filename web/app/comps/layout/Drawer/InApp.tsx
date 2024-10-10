import { AppStores } from '@/lib';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { IoSettingsOutline } from 'react-icons/io5';
import { DrawerRow } from './Row';
import { TbFileInvoice } from 'react-icons/tb';
import { usePathname } from 'next/navigation';
import { MdSupportAgent } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';

export function InAppDrawer(props: { router: AppRouterInstance }) {
  const { router } = props;
  const pathname = usePathname();
  const store = AppStores.useSettings();

  const checkActive = (val: string): boolean => {
    return pathname.toLowerCase().includes(val.toLowerCase());
  };

  return (
    <div>
      <DrawerRow
        title={'Dashboard'}
        icon={RxDashboard}
        isActive={checkActive('dash')}
        onClick={() => {
          store.update({ drawerIsOpen: false });
          router.push('/dashboard');
        }}
      />
      <DrawerRow
        title={'Invoice'}
        icon={TbFileInvoice}
        isActive={checkActive('invoice')}
        onClick={() => {
          store.update({ drawerIsOpen: false });
          router.push('/invoice');
        }}
      />
      <DrawerRow
        title={'Settings'}
        icon={IoSettingsOutline}
        isActive={checkActive('settings')}
        onClick={() => {
          store.update({ drawerIsOpen: false });
          router.push('/settings');
        }}
      />
      <DrawerRow
        title={'Support'}
        icon={MdSupportAgent}
        isActive={checkActive('support')}
        onClick={() => {
          store.update({ drawerIsOpen: false });
          router.push('/support');
        }}
      />
      <DrawerRow
        title={'Help'}
        isActive={checkActive('doc')}
        icon={TbFileInvoice}
        onClick={() => {
          store.update({ drawerIsOpen: false });
          router.push('/docs');
        }}
      />
    </div>
  );
}
