import { publicProcedure, router } from './init';
import { directOrderRouter } from './modules/directOrder/routes';
import { userRouter } from './modules/user/routes';
import { bankAccountRouter } from './modules/bankAcccount/routes';
import { transactionsRouter } from './modules/transactions/routes';
import { invoiceRouter } from './modules/invoice/routes';
import { ratesRouter } from './modules/rates/routes';
import { invoiceTemplateRouter } from './modules/invoice/invoiceTemplates';
import { invoiceItemRouter } from './modules/invoice/invoiceItem';
import { p2pAdsRouter } from './modules/p2p/routes';
import { authRouter } from './modules/auth/routes';

export const appRouter = router({
  direct_order: directOrderRouter,
  user: userRouter,
  bankAccount: bankAccountRouter,
  transactions: transactionsRouter,
  invoice: invoiceRouter,
  rates: ratesRouter,
  invoiceItems: invoiceItemRouter,
  invoiceTemplates: invoiceTemplateRouter,
  p2pAds: p2pAdsRouter,
  auth: authRouter,
  test_all: publicProcedure.query(({ ctx }) => {
    return 'Hello, are you for testing';
  }),
});

export type AppRouter = typeof appRouter;
