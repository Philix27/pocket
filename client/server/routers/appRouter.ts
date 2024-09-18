import { publicProcedure, router } from '../init';
import { blogRouter } from './blogs';
import { booksRouter } from './book';
import { bookChaptersRouter } from './bookChapter';
import { bookChapterTopicsRouter } from './bookChapterTopic';
import { quizRouter } from './quiz';
import { quizTopicsRouter } from './quizTopics';
import { directOrderRouter } from './directOrders';
import { userRouter } from './user';
import { bankAccountRouter } from './bankAccount';
import { transactionsRouter } from './transactions';
import { invoiceRouter } from './invoice';
import { ratesRouter } from './rates';
import { invoiceTemplateRouter } from './invoiceTemplates';
import { invoiceItemRouter } from './invoiceItem';
import { p2pAdsRouter } from './p2pAds';
import { authRouter } from './auth';

export const appRouter = router({
  blog: blogRouter,
  books: booksRouter,
  book_chapter: bookChaptersRouter,
  book_chapter_topics: bookChapterTopicsRouter,
  quiz: quizRouter,
  quiz_topics: quizTopicsRouter,
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
