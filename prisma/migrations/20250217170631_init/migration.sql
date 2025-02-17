/*
  Warnings:

  - You are about to drop the column `categoryId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `imgUrl` on the `product` table. All the data in the column will be lost.
  - You are about to drop the `productTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "productTag" DROP CONSTRAINT "productTag_productId_fkey";

-- DropForeignKey
ALTER TABLE "productTag" DROP CONSTRAINT "productTag_tagId_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "categoryId",
DROP COLUMN "imgUrl",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "productTag";

-- CreateTable
CREATE TABLE "_ProductToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ProductToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProductToTag_B_index" ON "_ProductToTag"("B");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTag" ADD CONSTRAINT "_ProductToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTag" ADD CONSTRAINT "_ProductToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
