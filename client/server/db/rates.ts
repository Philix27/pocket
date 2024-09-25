export const ratesData: {
  currency: string;
  symbol: string;
  buyPrice: number;
  sellPrice: number;
  status: 'AVAILABLE' | 'DOWN';
}[] = [
  {
    currency: 'Naira',
    symbol: 'N',
    buyPrice: 0.0000606,
    sellPrice: 0.0000606,
    status: 'AVAILABLE',
  },
  {
    currency: 'cUSD',
    symbol: '',
    buyPrice: 1,
    sellPrice: 1,
    status: 'AVAILABLE',
  },
];
