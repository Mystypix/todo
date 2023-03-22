/*
  Warnings:

  - Added the required column `updatedAt` to the `Kokot` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Kokot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'none'
);
INSERT INTO "new_Kokot" ("id", "title") SELECT "id", "title" FROM "Kokot";
DROP TABLE "Kokot";
ALTER TABLE "new_Kokot" RENAME TO "Kokot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
