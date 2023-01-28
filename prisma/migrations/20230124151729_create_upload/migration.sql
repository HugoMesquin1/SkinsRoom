-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "file" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "File_file_key" ON "File"("file");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_id_fkey" FOREIGN KEY ("id") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
