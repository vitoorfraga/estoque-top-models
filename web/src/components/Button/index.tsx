import './styles.css'

interface ButtonProps{
    name: string;
    link: string;
}

export function Button(props: ButtonProps){


    return (
      <div className='button'>
        <a href={props.link}>{props.name}</a>
      </div>
    );
}
