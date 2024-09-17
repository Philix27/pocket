import { publicProcedure, router } from "../init";
import { blogRouter } from "./blogs";
import { booksRouter } from "./book";
import { bookChaptersRouter } from "./bookChapter";
import { bookChapterTopicsRouter } from "./bookChapterTopic";
import { quizRouter } from "./quiz";
import { quizTopicsRouter } from "./quizTopics";

export const appRouter = router({
  blog: blogRouter,
  books: booksRouter,
  book_chapter: bookChaptersRouter,
  book_chapter_topics: bookChapterTopicsRouter,
  quiz: quizRouter,
  quiz_topics: quizTopicsRouter,
  test_all: publicProcedure.query(({ ctx }) => {
    return "Hello, are you for testing";
  }),
});

export type AppRouter = typeof appRouter;
