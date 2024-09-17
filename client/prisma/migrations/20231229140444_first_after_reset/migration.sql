-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "img_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookChapter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "book_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "BookChapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookChapterTopic" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "video_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "book_id" TEXT,
    "chapter_id" TEXT,

    CONSTRAINT "BookChapterTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuizTopic" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "QuizTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT,
    "option4" TEXT,
    "option5" TEXT,
    "option6" TEXT,
    "answer_index" INTEGER NOT NULL,
    "answer" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "img_url" TEXT,
    "video_url" TEXT,
    "story" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "img_url" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookChapterTopicToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BookChapterTopicToQuizTopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QuizTopicToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_QuizToQuizTopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_BlogToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookChapterTopicToTags_AB_unique" ON "_BookChapterTopicToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_BookChapterTopicToTags_B_index" ON "_BookChapterTopicToTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookChapterTopicToQuizTopic_AB_unique" ON "_BookChapterTopicToQuizTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_BookChapterTopicToQuizTopic_B_index" ON "_BookChapterTopicToQuizTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuizTopicToTags_AB_unique" ON "_QuizTopicToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_QuizTopicToTags_B_index" ON "_QuizTopicToTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_QuizToQuizTopic_AB_unique" ON "_QuizToQuizTopic"("A", "B");

-- CreateIndex
CREATE INDEX "_QuizToQuizTopic_B_index" ON "_QuizToQuizTopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BlogToTags_AB_unique" ON "_BlogToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_BlogToTags_B_index" ON "_BlogToTags"("B");

-- AddForeignKey
ALTER TABLE "BookChapter" ADD CONSTRAINT "BookChapter_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookChapterTopic" ADD CONSTRAINT "BookChapterTopic_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookChapterTopic" ADD CONSTRAINT "BookChapterTopic_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "BookChapter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookChapterTopicToTags" ADD CONSTRAINT "_BookChapterTopicToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "BookChapterTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookChapterTopicToTags" ADD CONSTRAINT "_BookChapterTopicToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookChapterTopicToQuizTopic" ADD CONSTRAINT "_BookChapterTopicToQuizTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "BookChapterTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookChapterTopicToQuizTopic" ADD CONSTRAINT "_BookChapterTopicToQuizTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "QuizTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuizTopicToTags" ADD CONSTRAINT "_QuizTopicToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "QuizTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuizTopicToTags" ADD CONSTRAINT "_QuizTopicToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuizToQuizTopic" ADD CONSTRAINT "_QuizToQuizTopic_A_fkey" FOREIGN KEY ("A") REFERENCES "Quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_QuizToQuizTopic" ADD CONSTRAINT "_QuizToQuizTopic_B_fkey" FOREIGN KEY ("B") REFERENCES "QuizTopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToTags" ADD CONSTRAINT "_BlogToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BlogToTags" ADD CONSTRAINT "_BlogToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
