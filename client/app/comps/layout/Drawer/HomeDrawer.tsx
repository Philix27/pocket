import { AppStores } from '@/lib';
import { useTheme } from 'next-themes';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { GoPerson } from 'react-icons/go';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { DrawerRow } from './Row';

export function HomeDrawer(props: { router: AppRouterInstance }) {
  const { router } = props;
  const { setTheme, theme } = useTheme();
  const store = AppStores.useSettingsStore();

  return (
    <div>
      <DrawerRow
        title={'Home'}
        icon={GoPerson}
        onClick={() => {
          router.push('/');
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
