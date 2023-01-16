/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_id_buyer_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_id_salesman_fkey";

-- DropTable
DROP TABLE "Item";

-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL,
    "id_salesman" TEXT NOT NULL,
    "id_buyer" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "float_item" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_salesman_fkey" FOREIGN KEY ("id_salesman") REFERENCES "salesman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_buyer_fkey" FOREIGN KEY ("id_buyer") REFERENCES "buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
