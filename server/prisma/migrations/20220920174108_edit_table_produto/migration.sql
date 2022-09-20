/*
  Warnings:

  - The primary key for the `Categoria` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `categoriaId` on the `Categoria` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `categoriaId` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categoria" (
    "categoriaId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Categoria" ("categoriaId", "nome") SELECT "categoriaId", "nome" FROM "Categoria";
DROP TABLE "Categoria";
ALTER TABLE "new_Categoria" RENAME TO "Categoria";
CREATE TABLE "new_Produto" (
    "produtoId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("categoriaId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("categoriaId", "nome", "produtoId", "qtd") SELECT "categoriaId", "nome", "produtoId", "qtd" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
