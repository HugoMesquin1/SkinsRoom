-- CreateTable
CREATE TABLE "Salesman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Salesman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Salesman_username_key" ON "Salesman"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Salesman_contact_key" ON "Salesman"("contact");
