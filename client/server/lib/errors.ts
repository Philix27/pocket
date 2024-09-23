import { TRPCError } from '@trpc/server';

const AppErrors = {
  bankAccount: {
    cannotDelete: new TRPCError({ code: 'NOT_FOUND', message: 'Cannot delete' }),
    notBankAccount: new TRPCError({ code: 'NOT_FOUND', message: '' }),
  },
  p2p: {},
  invoice: {},
  directOrder: {},
  rates: {},
  transactions: {},
};
