import './styles.css'

interface ButtonProps{
    name: string;
}

export function Button(props: ButtonProps){


    return (
      <div className='button'>
        <a>{props.name}</a>
      </div>
    );
}
