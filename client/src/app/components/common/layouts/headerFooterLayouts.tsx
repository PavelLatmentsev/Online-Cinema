import Header from "../header/header";
import { IComponent } from "../../../../models/IComponent";

const HeaderFooterLayouts = (children: IComponent ) :JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderFooterLayouts;
