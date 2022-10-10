import { Button } from '../Button'
import './styles.css'

export function Header(){
    return(
        <div className='headerBackground'>
            <div className='headerContainer'>
                <div className='menuLeft'>
                    <Button
                    name={'Estoque'}
                    link={'#'}
                    >    
                    </Button>

                </div>

                <div className='menuRight'>
                <Button
                    name={'Novo produto'}
                    link={'#'}
                    >    
                    </Button>

                    <Button
                    name={'Editar produto'}
                    link={'#'}
                    >    
                    </Button>
                </div>
            </div>
        </div>
    )
  
}