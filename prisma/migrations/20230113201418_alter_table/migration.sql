/*
  Warnings:

  - Made the column `id_salesman` on table `item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_buyer` on table `item` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_buyer_fkey";

-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_salesman_fkey";

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "id_salesman" SET NOT NULL,
ALTER COLUMN "id_buyer" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_salesman_fkey" FOREIGN KEY ("id_salesman") REFERENCES "salesman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_buyer_fkey" FOREIGN KEY ("id_buyer") REFERENCES "buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
