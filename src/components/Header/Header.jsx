import { NavLink } from "react-router-dom";

import HeaderBtns from "../HeaderBtns/HeaderBtns";
import Input from "../Input/Input";
import { ReactComponent as LogoIcon } from "../../assets/images/icon/logo.svg";
import { ReactComponent as BurgerMenu } from "../../assets/images/icon/menu.svg";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <BurgerMenu className={styles.burgerMenu} />
          <NavLink to={"/"}>
            <LogoIcon className={styles.logo} />
          </NavLink>
        </div>

        <div className={styles.input}>
          <Input placeholder="Я шукаю..."></Input>
        </div>

        <HeaderBtns />
      </div>
    </div>
  );
};

export default Header;
