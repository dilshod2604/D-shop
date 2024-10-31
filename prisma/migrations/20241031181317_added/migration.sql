/*
  Warnings:

  - Added the required column `isFavorite` to the `FavoriteProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FavoriteProduct" ADD COLUMN     "isFavorite" BOOLEAN NOT NULL;
