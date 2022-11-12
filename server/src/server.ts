import express, { query, request, response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();
app.use(express.json());

// Conexão com o banco
const prisma = new PrismaClient({});

app.use(express.json());
app.use(cors());

// Rota consultar estoque
app.get("/estoque", async (request, response) => {
  const estoque = await prisma.produto.findMany();
  // Response: Devolve uma resposta
  return response.json(estoque);
});

// Rota cadastrar produto
app.post("/produto", async (request, response) => {
  const body: any = request.body;

  const produto = await prisma.produto.create({
    data: {
      nome: body.nome,
      qtd: body.qtd,
      tamanho: body.tamanho,
      categoriaName: body.categoriaName,
    },
  });

  return response.json(produto);
});

const idsToDelete = [5, 29, 255];

// Rota para Deletar Produto
app.delete("/produto/:id", async (request, response) => {
  const id: number = Number(request.params.id);

  const deleteProduct = await prisma.produto.delete({
    where: {
      produtoId: id,
    },
  });
  return response.json("Deletou");
});

app.listen(3333);
