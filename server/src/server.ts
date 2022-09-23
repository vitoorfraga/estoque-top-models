import express, { query, request, response } from "express";
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express()
app.use(express.json())

// Conexão com o banco
const prisma = new PrismaClient({
})

app.use(express.json())
app.use(cors())

// Rota consultar estoque
app.get('/estoque', async (request, response) => {
    const estoque = await prisma.produto.findMany()
    // Response: Devolve uma resposta
    return response.json(estoque)

});

// Rota Categorias
app.get('/categorias', async (request, response) => {
    const categorias = await prisma.categoria.findMany()

    return response.json(categorias)
});


// Rota cadastrar produto
app.post('/produto', async (request, response) => {
    const body: any = request.body

    const produto = await prisma.produto.create({
        data: {
            nome: body.nome,
            qtd: body.qtd,
            categoriaId: body.categoriaId,

            // Verificar esse campo
            // categoria: body.categoria
        }
    })

    return response.json(produto)
})

app.listen(3333)