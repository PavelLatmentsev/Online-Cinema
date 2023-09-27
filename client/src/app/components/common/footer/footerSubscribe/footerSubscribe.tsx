import { useForm, SubmitHandler, SubmitErrorHandler,FormProvider} from "react-hook-form";
import TextField from "../../form/textField/textField";
import styles from "./footerSubscribe.module.scss";
const FooterSubscribe = (): JSX.Element => {
  interface ISub  {
    subscribe: string;
  }
    const methods = useForm<ISub>();

  const submitForm: SubmitHandler<ISub> = (data) => {
    console.log(data);
    methods.reset();
  };
  const errorsForm: SubmitErrorHandler<ISub> = (data) => {
    console.log(data);

  };
  return (
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
        <form action="" onSubmit={methods.handleSubmit(submitForm, errorsForm)}>
          <TextField
            placeholder="Введите ваш e-mail"
            name="subscribe"
            type="text"
          />
          <button>Подписаться</button>
        </form>
        </FormProvider>
        {/* <span>{errors.name}</span> */}
      </div>
      <div>
        <input type="checkbox" />{" "}
        <span>
          Соглашаюсь на условия <span>политики конфиденциальности</span>
        </span>
      </div>
    </div>
  );
};

export default FooterSubscribe;
