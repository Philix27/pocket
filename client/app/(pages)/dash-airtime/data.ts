export type IAirtimeData = {
  amount: number[];
  phoneCode: number;
  symbol: string;
  name: Country;
};

export enum Country {
  Nigeria = 'Nigeria',
  Ghana = 'Ghana',
  Kenya = 'Kenya',
}

export const AirtimeData: Record<Country, IAirtimeData> = {
  [Country.Nigeria]: {
    amount: [100, 200, 350, 500, 1000, 5_000, 6_000, 10_000],
    phoneCode: 234,
    symbol: '₦',
    name: Country.Nigeria,
  },
  [Country.Ghana]: {
    amount: [],
    phoneCode: 234,
    symbol: 'GH₵',
    name: Country.Ghana,
  },
  [Country.Kenya]: {
    amount: [],
    phoneCode: 234,
    symbol: 'KSh',
    name: Country.Kenya,
  },
};
