-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_id_salesman_fkey";

-- AlterTable
ALTER TABLE "item" ALTER COLUMN "id_salesman" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_salesman_fkey" FOREIGN KEY ("id_salesman") REFERENCES "salesman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
