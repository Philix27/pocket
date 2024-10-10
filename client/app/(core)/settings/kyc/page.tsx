'use client';
import { BottomSheet, Navbar, Row } from '@/comps';
import React from 'react';
import { LuUtilityPole } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';
import VerifyInfo from './VerifyInfo';
import VerifyBvn from './VerifyBvn';
import VerifyEmail from './VerifyEmail';
import VerifyPhone from './VerifyPhone';
import VerifyNin from './VerifyNin';
import PictureBvn from './VerifyPics';
import { type IKycScreen } from './type';
import { AppStores } from '@/lib';
import { CiBank, CiPassport1 } from 'react-icons/ci';
import { AiOutlineProfile } from 'react-icons/ai';

export default function KycPage() {
  // todo: getAllUserInfo
  const store = AppStores.useUser();
  return (
    <div>
      <Navbar title="KYC Verification" isBack />
      <div className="px-5 w-full">
        <Row
          title="Name"
          subtitle="Full name"
          Icon={AiOutlineProfile}
          onClick={() =>
            store.update({
              activeKycSheet: 'Name',
            })
          }
        />
        <Row
          title="Profile Picture"
          subtitle="Passport photograph"
          Icon={CiPassport1}
          onClick={() =>
            store.update({
              activeKycSheet: 'ProfilePic',
            })
          }
        />
        <Row
          title="Phone"
          subtitle="Verify phone number"
          Icon={FaPhone}
          onClick={() =>
            store.update({
              activeKycSheet: 'Phone',
            })
          }
        />
        <Row
          title="Email"
          subtitle="Verify email address"
          Icon={HiOutlineMail}
          onClick={() =>
            store.update({
              activeKycSheet: 'Email',
            })
          }
        />
        <Row
          title="NIN"
          subtitle="National Identity Number"
          Icon={LuUtilityPole}
          onClick={() =>
            store.update({
              activeKycSheet: 'NIN',
            })
          }
        />
        <Row
          title="BVN"
          subtitle="Verify BVN"
          Icon={CiBank}
          onClick={() =>
            store.update({
              activeKycSheet: 'BVN',
            })
          }
        />
      </div>

      <BottomSheet
        show={store.activeKycSheet !== 'NONE'}
        onClose={() =>
          store.update({
            activeKycSheet: 'NONE',
          })
        }
      >
        <GetScreen screen={store.activeKycSheet} />
      </BottomSheet>
    </div>
  );
}

function GetScreen(props: { screen: IKycScreen }): JSX.Element {
  switch (props.screen) {
    case 'Name':
      return <VerifyInfo />;
    case 'BVN':
      return <VerifyBvn />;
    case 'Email':
      return <VerifyEmail />;
    case 'Phone':
      return <VerifyPhone />;
    case 'NIN':
      return <VerifyNin />;
    case 'ProfilePic':
      return <PictureBvn />;
    default:
      return <div></div>;
  }
}
