/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `categoriaId` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `categoriaName` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Categoria";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "produtoId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,
    "tamanho" TEXT NOT NULL,
    "categoriaName" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("nome", "produtoId", "qtd", "tamanho") SELECT "nome", "produtoId", "qtd", "tamanho" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
