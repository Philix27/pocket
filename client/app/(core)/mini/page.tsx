'use client'
import React from 'react';
import { IRow, Row } from '@/comps';
import { MdSavings } from 'react-icons/md';

export default function MiniAppsPage() {
  return (
    <div>
      <div>
        {apps.map((val, i) => (
          <Row key={i} title={val.title} subtitle={val.subtitle} Icon={val.Icon} />
        ))}
      </div>
    </div>
  );
}

const apps: IRow[] = [
  {
    title: 'Locked Savings',
    subtitle: '',
    Icon: MdSavings,
  },
  {
    title: 'Invoice generator',
    subtitle: '',
    Icon: MdSavings,
  },
  {
    title: 'Receipt generator',
    subtitle: '',
    Icon: MdSavings,
  },
];
