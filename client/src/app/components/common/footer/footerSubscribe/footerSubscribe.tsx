import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider,
} from "react-hook-form";
import TextField from "../../form/textField/textField";
import styles from "./footerSubscribe.module.scss";
import CommonButton from "../../button/commonButton";
import CheckBoxField from "../../form/checkboxField/checkboxField";
import { Link } from "react-router-dom";
const FooterSubscribe = (): JSX.Element => {
  interface ISub {
    subscribe: string;
    license: boolean;
  }
  const methods = useForm<ISub>();
  const submitForm: SubmitHandler<ISub> = (data) => {
    console.log(data);
    methods.reset();
  };
  const errorsForm: SubmitErrorHandler<ISub> = (data) => {
    console.log("data", data);
  };
  return (
    <div  className={styles.footer__subscribe__wrapper}>
    <div className={styles.footer__subscribe}>
      <div className={styles.footer__subscribe__logo}>
        <img src="/img/logo/Logo.png" alt="logo" />
      </div>
      <h2 className={styles.footer__subscribe__title}>
        Подпишитесь на E-mail рассылку
      </h2>
      <p className={styles.footer__subscribe__description}>
        Если хотиет быть в курсе последних новостей и новинок кино - заполните
        форму ниже и оформите бесплатную E-mail рассылку!
      </p>
      <div className={styles.footer__subscribe__email}>
        <FormProvider {...methods}>
          <form
            action=""
            onSubmit={methods.handleSubmit(submitForm, errorsForm)}
          >
            {" "}
            <div className={styles.footer__subscribe__form}>
              <TextField
                placeholder="Введите ваш e-mail"
                name="subscribe"
                type="text"
              />
              <CommonButton>Подписаться</CommonButton>
            </div>

            <div className={styles.footer__subscribe__form}>
              <CheckBoxField name="license"/>
              <span className={styles.footer__subscribe__license}>
                Соглашаюсь на условия{" "}
                <Link to={"404"} className={styles.footer__subscribe__subtitle}>
                  политики конфиденциальности
                </Link>
              </span>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
    </div>
  );
};

export default FooterSubscribe;
