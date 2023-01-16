/*
  Warnings:

  - Added the required column `type_skin` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "item" ADD COLUMN     "type_skin" TEXT NOT NULL;
