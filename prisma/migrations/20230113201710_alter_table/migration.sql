-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_buyer_fkey";

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "id_buyer" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_buyer_fkey" FOREIGN KEY ("id_buyer") REFERENCES "buyer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
