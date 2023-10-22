import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  background?: string;
  border?: string;
  color?: string;
}
