import { AppStores, cn } from '@/lib';
import { BsSearch } from 'react-icons/bs';

export function SearchInput(props: { className?: string; onClick?: (e: string) => void }) {
  const store = AppStores.useSettings();

  return (
    <div className={cn('w-full flex items-center justify-center border rounded-full 300 px-1', props.className)}>
      <input
        type="text"
        className={`
          bg-transparent w-full  px-2 py-2
          outline-none border-none rounded-full
        `}
        placeholder="Search"
        onChange={(e) => {
          store.update({ searchValue: e.target.value });
        }}
      />

      <div
        className="bg-card rounded-full w-fit"
        onClick={() => {
          if (props.onClick) {
            props.onClick(store.searchValue);
          }
        }}
      >
        <BsSearch size={20} className="m-2" />
      </div>
    </div>
  );
}
