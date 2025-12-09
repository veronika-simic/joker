import type { ButtonProps } from "../types/ButtonProps";
function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
