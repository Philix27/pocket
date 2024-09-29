import * as amount from './amount';
import * as blockscout from './blockscout';
import * as clipboard from './clipboard';
import * as retry from './retry';
import * as ssr from '../hooks/ssr';
import * as str from './string';
import * as time from './time';
import * as config from '../consts';

export const Helper = {
  ...amount,
  ...blockscout,
  ...retry,
  ...time,
  ...str,
  ...ssr,
  ...clipboard,
  ...config,
};

export * from "./celoWallets"