import './global.css'
import { NewProduct } from './components/NewProduct/NewProduct'

function App() {
  return (
    <div>
                  <div className='newProductIntro'>
                <h1 className='newProductTitle'>Criar um novo produto</h1>
                <p className='newProductDescription'>Para adicionar um novo produto ao estoque preencha os campos!</p>
            </div>
      <NewProduct />
    </div>
  )
}

export default App
