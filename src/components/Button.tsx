import type { ButtonProps } from "../types/ButtonProps";
function Button({ children, onClick, id }: ButtonProps) {
  return (
    <button onClick={onClick} id={id}>
      {children}
    </button>
  );
}

export default Button;
