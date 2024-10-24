/*
  Warnings:

  - Added the required column `views` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `rating` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "views" INTEGER NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER NOT NULL;
