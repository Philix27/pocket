export const SELLER_ADDRESS = '0xe6b6aAe8fA2718F5371e30F2ad2eEDa250801BB5';
export type IAds = {
  owner: string;
  isActive: boolean;
  token: string;
  rate: number;
  paymentMethod: string;
  upperLimit: number;
  lowerLimit: number;
  startDate: number;
  endDate: number;
  isBuy: boolean;
};

export const adsData: IAds[] = [
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: true,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: true,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: true,
  },
  {
    owner: SELLER_ADDRESS,
    isActive: true,
    token: 'cUSD',
    rate: 1,
    paymentMethod: 'Bank Transfer',
    upperLimit: 10_000,
    lowerLimit: 100_0000,
    startDate: 12220,
    endDate: 122250,
    isBuy: false,
  },
];
