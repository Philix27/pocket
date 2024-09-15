'use client';
import PrivacyPolicy from './pp.mdx';
import TOS from './tos.mdx';
import About from './about.mdx';
import Help from './help.mdx';
import Faq from './faq.mdx';

export type IDocs = 'TOS' | 'PP' | 'HELP' | 'ABOUT' | 'FAQ';
export interface IProps {
  title: string;
  key: IDocs;
  last_edit: string;
  MdDoc: JSX.Element;
}

export const AppDocs: Array<IProps> = [
  {
    title: 'Privacy Policy',
    last_edit: '15th November,  2023',
    MdDoc: <PrivacyPolicy />,
    key: 'PP',
  },
  {
    title: 'Terms of service',
    last_edit: '15th November,  2023',
    MdDoc: <TOS />,
    key: 'TOS',
  },
  {
    title: 'About Us',
    last_edit: '15th November,  2023',
    key: 'ABOUT',
    MdDoc: <About />,
  },
  {
    title: 'Help',
    last_edit: '15th November,  2023',
    key: 'HELP',
    MdDoc: <Help />,
  },
  {
    title: 'FAQ',
    last_edit: '15th November,  2023',
    key: 'FAQ',
    MdDoc: <Faq />,
  },
];
