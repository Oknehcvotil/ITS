import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import logo from "../../images/logo/ITS.png";
import { HeadCont, HeadOptions, Phone, LogoLink } from "./Header.styled";

const Header = () => {
  return (
    <header>
      <HeadCont>
        <LogoLink href="/">
          <img src={logo} alt="Import Transit Service LLC" />
        </LogoLink>
        <HeadOptions>
          <address>
            <Phone href="tel:+380674455145">+38 (067) 445-51-45</Phone>
          </address>
          <LanguageSwitch />
        </HeadOptions>
      </HeadCont>
    </header>
  );
};

export default Header;
