/*
  Warnings:

  - Added the required column `tamanho` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "produtoId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,
    "tamanho" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("categoriaId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("categoriaId", "nome", "produtoId", "qtd") SELECT "categoriaId", "nome", "produtoId", "qtd" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
