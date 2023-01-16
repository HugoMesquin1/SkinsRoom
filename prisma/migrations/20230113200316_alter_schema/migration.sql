/*
  Warnings:

  - Made the column `id_buyer` on table `item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_buyer_fkey";

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "id_buyer" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_buyer_fkey" FOREIGN KEY ("id_buyer") REFERENCES "buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
