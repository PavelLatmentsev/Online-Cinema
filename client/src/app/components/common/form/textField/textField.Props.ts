import { InputHTMLAttributes } from "react";

export interface ITextFieldProps extends InputHTMLAttributes<HTMLElement> {
    name: string;
    errorin :boolean
  }