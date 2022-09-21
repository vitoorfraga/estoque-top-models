import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react'
import './styles.css'



interface Categoria {
    id: number;
    nome: string;
  }

function handleCreateProduct(event: FormEvent){
    event.preventDefault()
    console.log('Submite')
}

export function NewProduct(){

    const [categorias, setCategorias] = useState<Categoria[]>([])


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
                      placeholder='Selecione a categoria'
                      >

                        <option  disabled selected defaultValue={''}>Selecione a categoria</option>

                        {categorias.map( categoria =>{
                            return <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>
                        })}

                    </select>
                    </div>

                    <div className='formField'>
                        <label htmlFor="amount">Quantidade:</label>
                        <input type="number" placeholder='Ex: 5'/>
                    </div>


                <div className='formButton'>
                    <span>Clique para finalizar o cadastro do produto</span>
                    <button type="submit">Cadastrar Produto</button>
                </div>
            </form>
        </div>
    )
}