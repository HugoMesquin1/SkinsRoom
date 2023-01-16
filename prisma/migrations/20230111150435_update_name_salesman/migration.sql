/*
  Warnings:

  - You are about to drop the `Salesman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Salesman";

-- CreateTable
CREATE TABLE "salesman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "salesman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salesman_username_key" ON "salesman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "salesman_contact_key" ON "salesman"("contact");
