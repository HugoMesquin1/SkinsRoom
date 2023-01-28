/*
  Warnings:

  - A unique constraint covering the columns `[path]` on the table `file` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "file" ADD COLUMN     "path" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "file_path_key" ON "file"("path");
