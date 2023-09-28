import { useFormContext } from "react-hook-form";
import styles from "./checkboxField.module.scss";
import { FC } from "react";
import { ICheckFieldProps } from "./checkboxField.Props";

const CheckBoxField: FC<ICheckFieldProps> = ({ name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={styles.checkboxField}>
      <input
        {...register(`${name}`, {
          required: "Поле обязательно для заполнения!",
        })}
        className={styles.textField__item}
        type="checkbox"
      />
      {errors[name] && (
        <p className={styles.textField__error}> {`${errors[name]?.message}`}</p>
      )}
    </div>
  );
};

export default CheckBoxField;
