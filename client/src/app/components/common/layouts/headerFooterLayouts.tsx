import Header from "../header/header";
import { IComponent } from "../../../../models/IComponent";
import Footer from "../footer/footer";

const HeaderFooterLayouts = ({children}:IComponent ) :JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default HeaderFooterLayouts;
