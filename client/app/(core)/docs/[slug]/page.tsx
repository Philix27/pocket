'use client';
import React from 'react';
import { AppDocs } from '../md';
import { Navbar, TextP } from '@/comps';

export default function DocsPage({ params }: { params: { slug: string } }) {
  const doc = AppDocs.filter((v) => v.key === params.slug)[0];

  if (!doc) {
    return (
      <div>
        <Navbar title={'Help'} isBack />
        <div>
          <TextP>No document found</TextP>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar title={doc.title} isBack />
      <div
        className={`
      px-5 py-3
      [&_h1]:text-xl [&_h1]:mt-4 [&_h1]:font-extrabold
      [&_h2]:text-xl [&_h2]:font-bold 
      [&_h3]:text-lg [&_h3]:font-semibold 
      [&_h4]:text-md [&_h4]:font-semibold 
      [&_h5]:text-sm [&_h5]:font-bold 
      [&_p]:text-sm  [&_p]:text-justify  [&_p]:my-2
      [&_ul]:p-2 [&_ul]:font-light 
      [&_ol]:p-2 [&_ol]:font-light 
      [&_li]:list-disc [&_li]:px-2 [&_li]:py-[2px] [&_li]:ml-4
      [&_table]:font-light 
      [&_hr]:mb-3
    `}
      >
        {doc.MdDoc}
      </div>
    </>
  );
}
