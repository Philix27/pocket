'use client';

import React from 'react';
import { TextP } from '@/comps';
import { AppStores } from '@/lib';
import { SearchInput } from '../_comps';
import { chainRegistry } from '@/data';

export default function Page() {
  const store = AppStores.useSettings();

  const getList = () => {
    if (!store.searchValue.trim()) {
      return chainRegistry;
    }

    const arr = chainRegistry.filter((val) =>
      val.name.trim().toLowerCase().includes(store.searchValue.trim().toLowerCase())
    );

    if (!arr.length) {
      return chainRegistry;
    }
    return arr;
  };

  return (
    <>
      <div className={'w-full h-full py-4 px-4 flex flex-col items-center'}>
        {/* <div className="w-[40%] mb-4"> */}
        <SearchInput className="w-[40%] mb-4" />
        {/* </div> */}
        <div className="w-full hover:bg-accent grid grid-cols-4 self-center p-2 border-b">
          <TextP>img</TextP>
          <TextP>Name</TextP>
          <TextP>Desc</TextP>
          <TextP>Layers</TextP>
        </div>
        {getList().map((val, i) => (
          <div
            key={i}
            className="w-full hover:bg-accent grid grid-cols-4 self-center p-2 border-b"
            onClick={() => {
              store.update({ infoTabOpen: true, drawerIsOpen: false });
            }}
          >
            <img src={val.logo} className="size-[30px] rounded-full" />
            <TextP>{val.name}</TextP>
            <TextP>{val.shortIntro}</TextP>
            <TextP>{val.layers}</TextP>
          </div>
        ))}
      </div>
    </>
  );
}
