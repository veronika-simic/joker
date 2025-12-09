export interface ButtonProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
  id: string;
}

export type Content = {
  line1: string;
  line2: string;
};
