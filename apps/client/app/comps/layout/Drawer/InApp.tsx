import { AppStores } from '@/lib';
import { useTheme } from 'next-themes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { DrawerRow } from './Row';
import { AiOutlineDashboard } from 'react-icons/ai';

export function InAppDrawer(props: { router: AppRouterInstance }) {
  const { setTheme, theme } = useTheme();
  const { router } = props;
  return (
    <div>
      <DrawerRow
        title={'Notifications'}
        icon={IoIosNotificationsOutline}
        onClick={() => {
          router.push('/notify');
        }}
      />
      <DrawerRow
        title={'Theme'}
        icon={IoColorPaletteOutline}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
}
