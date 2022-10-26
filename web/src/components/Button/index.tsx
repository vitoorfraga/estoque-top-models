import "./styles.css";

interface ButtonProps {
  name: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className="button">
      <a>{props.name}</a>
    </button>
  );
}
