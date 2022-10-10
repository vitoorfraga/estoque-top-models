import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react'
import { getConstantValue } from 'typescript';
import './styles.css'



interface Categoria {
    categoriaId: string;
    nome: string;
  }


  export function NewProduct(){

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function handleCreateProduct(event: FormEvent){
        event.preventDefault()
        console.log('clicou no botão')
    
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
    
    
        console.log(data)
    
    
        // Enviar arquivo para o BD
        try {
            await axios.post('http://localhost:3333/produto', {
                nome: data.productName,
                qtd: Number(data.amount),
                categoriaId: Number(data.category),
            })

            console.log('jasndjasndjas')
            alert('Produto cadastrado no banco de dados.')
            console.log(
                data.productName,  data.amount, data.category
            )
        } catch (err) {
            alert('Erro ao cadastrar produto')
        }
    
    }

    useEffect(() => {
        axios.get('http://localhost:3333/categorias').then((response) => {
        setCategorias(response.data);
        console.log(response.data)
        });
    }, []);

    return(
        <div>
            <form onSubmit={handleCreateProduct}>
                <div className='formField'>
                    <label htmlFor="productName" >Nome do produto:</label>
                    <input name="productName" id="productName" type="text" placeholder='Ex: Camiseta Regata'/>
                </div>
                    <div className='formField'>
                    <label htmlFor="category">Categoria:</label>
                    <select
                      id="category" 
                     name="category"
                     defaultValue=''
                      placeholder='Selecione a categoria'
                      >

                        <option disabled value=''>Selecione a categoria</option>

                        {categorias.map( categoria =>{
                            return <option key={categoria.categoriaId} value={categoria.categoriaId}>{categoria.nome}</option>
                        })}

                    </select>
                    </div>

                    <div className='formField'>
                        <label htmlFor="amount">Quantidade:</label>
                        <input name='amount' type="number" placeholder='Ex: 5'/>
                    </div>


                <div className='formButton'>
                    <span>Clique para finalizar o cadastro do produto</span>
                    <button type="submit">Cadastrar Produto</button>
                </div>
            </form>
        </div>
    )
}