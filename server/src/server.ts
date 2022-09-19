import express, { query, request, response } from "express";
import { PrismaClient } from '@prisma/client'

const app = express()
app.use(express.json())

// Conexão com o banco
const prisma = new PrismaClient({
    log: ['query']
})


// Rota consultar estoque
app.get('/estoque', async (request, response) => {
    const estoque = await prisma.produtos.findMany()
    // Response: Devolve uma resposta
    return response.json(estoque)

});

// Rota cadastrar produto
app.post('/produto', (request, response) => {
    return response.json([
        {
            name: 'iasjidas',
        }
    ])
})

app.listen(3333)