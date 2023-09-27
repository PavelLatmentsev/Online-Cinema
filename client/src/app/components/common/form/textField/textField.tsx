import {  useFormContext} from "react-hook-form";
import styles from "./textField.module.scss";
import { FC } from "react";
interface ISubscribe {
  name: string,
  placeholder:string,
  type: string
}

const TextField: FC<ISubscribe> = ({name, placeholder, type, } ) => {
  const { register, formState: { errors } } = useFormContext();
  console.log(errors)
  return (
    <>
       <input {...register(`${name}`, {required: "Поле обязательно для заполнения"})} type={type} className={styles.textField} placeholder={placeholder} />
       {/* <div>{errors.}</div> */}
    </>
     
  );
};

export default TextField;