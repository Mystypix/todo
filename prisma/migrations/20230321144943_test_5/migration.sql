/*
  Warnings:

  - You are about to drop the column `userId` on the `Kokot` table. All the data in the column will be lost.

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
INSERT INTO "new_Kokot" ("createdAt", "description", "id", "status", "title", "updatedAt") SELECT "createdAt", "description", "id", "status", "title", "updatedAt" FROM "Kokot";
DROP TABLE "Kokot";
ALTER TABLE "new_Kokot" RENAME TO "Kokot";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
