import { useFormContext } from "react-hook-form";
import styles from "./textField.module.scss";
import { FC } from "react";
import { ITextFieldProps } from "./textField.Props";

const TextField: FC<ITextFieldProps> = ({ name, placeholder, type }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.textField}>
      <input
        {...register(`${name}`, {
          required: "Поле обязательно для заполнения!",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,17}$/,
            message: "Пожалуйста, введите корректный email!",
          },
        })}
        type={type}
        className={styles.textField__item}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className={styles.textField__error}>
          {" "}
          {`${errors[name]?.message}`}
        </p>
      )}
    </div>
  );
};

export default TextField;
