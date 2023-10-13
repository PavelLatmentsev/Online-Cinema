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
        <label className={styles.checkboxField__title}>
      <input
        {...register(`${name}`, {
          required: "Поле обязательно для заполнения!",
        })}
        className={styles.checkboxField__item}
        type="checkbox"
        data-type="checkbox"
        name={name}
      />
       </label>
        <div className={styles.checkboxField__error}>
        { errors[name] && (
        <p className={styles.checkboxField__error__item}> {`${errors[name]?.message}`}</p>)   }
        </div>
   
    </div>
  );
};

export default CheckBoxField;
