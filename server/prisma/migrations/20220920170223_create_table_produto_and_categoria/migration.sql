-- CreateTable
CREATE TABLE "Produto" (
    "produtoId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "qtd" INTEGER NOT NULL,
    "categoriaId" TEXT NOT NULL,
    CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("categoriaId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "categoriaId" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);
