/*
  Warnings:

  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_fkey";

-- DropTable
DROP TABLE "File";

-- CreateTable
CREATE TABLE "file" (
    "id" TEXT NOT NULL,
    "file" TEXT,

    CONSTRAINT "file_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "file_file_key" ON "file"("file");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_fkey" FOREIGN KEY ("id") REFERENCES "file"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
