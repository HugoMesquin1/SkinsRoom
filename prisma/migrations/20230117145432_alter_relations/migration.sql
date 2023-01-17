/*
  Warnings:

  - You are about to drop the column `id_buyer` on the `item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_buyer_fkey";

-- AlterTable
ALTER TABLE "item" DROP COLUMN "id_buyer";
