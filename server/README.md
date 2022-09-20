# Produto

- Id
- Nome
- Tipo
- Quantidade

# Categoria

- Id
- Nome

# Fornecedor

- Nome
- Data
model Produtos {
  id    String @id @default(uuid())
  title String
  qtd   Int

  category String
}

model Categorys {
  id   String @id @default(uuid())
  name String
}

  Id           Int      @id @default(autoincrement())