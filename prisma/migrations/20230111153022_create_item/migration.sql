-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "id_salesman" TEXT NOT NULL,
    "id_buyer" TEXT NOT NULL,
    "item_name" TEXT NOT NULL,
    "float_item" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_id_salesman_fkey" FOREIGN KEY ("id_salesman") REFERENCES "salesman"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_id_buyer_fkey" FOREIGN KEY ("id_buyer") REFERENCES "buyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
