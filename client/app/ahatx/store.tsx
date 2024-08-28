const ENCODING = 'binary';

export const getEnv = () => {
  // "dev" | "production" | "local"
  return typeof process !== 'undefined' && process.env.REACT_APP_XMTP_ENV
    ? process.env.REACT_APP_XMTP_ENV
    : 'production';
};

export const buildLocalStorageKey = (walletAddress: any) => {
  return walletAddress ? `xmtp:${getEnv()}:keys:${walletAddress}` : '';
};

export const loadKeys = (walletAddress: any) => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

export const storeKeysEthers = (walletAddress: string, keys: string) => {
  localStorage.setItem('walletAddress', walletAddress);
  localStorage.setItem(walletAddress, keys);
};

export const loadKeysEthers = (walletAddress: string) => {
  const val = localStorage.getItem(walletAddress);
  return val;
};

export const storeKeys = (walletAddress: any, keys: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => {
  localStorage.setItem('onboarding', 'true');
  localStorage.setItem(buildLocalStorageKey(walletAddress), Buffer.from(keys).toString(ENCODING));
};

export const wipeKeys = (walletAddress: any) => {
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};
