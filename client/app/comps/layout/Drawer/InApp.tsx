import { AppStores } from '@/lib';
import { useTheme } from 'next-themes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { IoColorPaletteOutline, IoSettingsOutline } from 'react-icons/io5';
import { DrawerRow } from './Row';
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbFileInvoice } from 'react-icons/tb';
import { usePathname } from 'next/navigation';
import { MdSupportAgent } from 'react-icons/md';

export function InAppDrawer(props: { router: AppRouterInstance }) {
  const { setTheme, theme } = useTheme();
  const { router } = props;
  const pathname = usePathname();

  const checkActive = (val: string): boolean => {
    return pathname.toLowerCase().includes(val.toLowerCase());
  };

  return (
    <div>
      <DrawerRow
        title={'Dashboard'}
        icon={AiOutlineDashboard}
        isActive={checkActive('dash')}
        onClick={() => {
          router.push('/dashboard');
        }}
      />
      <DrawerRow
        title={'Invoice'}
        icon={TbFileInvoice}
        isActive={checkActive('invoice')}
        onClick={() => {
          router.push('/invoice');
        }}
      />
      <DrawerRow
        title={'Settings'}
        icon={IoSettingsOutline}
        isActive={checkActive('settings')}
        onClick={() => {
          router.push('/settings');
        }}
      />
      <DrawerRow
        title={'Support'}
        icon={MdSupportAgent}
        isActive={checkActive('support')}
        onClick={() => {
          router.push('/support');
        }}
      />
      <DrawerRow
        title={'Theme'}
        icon={IoColorPaletteOutline}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <DrawerRow
        title={'Help'}
        isActive={checkActive('doc')}
        icon={TbFileInvoice}
        onClick={() => {
          router.push('/docs');
        }}
      />
    </div>
  );
}
