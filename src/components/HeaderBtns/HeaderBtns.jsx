import { NavLink } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../../assets/images/icon/search.svg";
import { ReactComponent as LikeIcon } from "../../assets/images/icon/like.svg";
import { ReactComponent as BalanceIcon } from "../../assets/images/icon/balance.svg";
import { ReactComponent as CartIcon } from "../../assets/images/icon/cart.svg";

import styles from "./headerBtns.module.scss";

const HeaderBtns = () => {
  return (
    <ul className={styles.headerBtnsContainer}>
      <li className={styles.item}>
        <NavLink>
          <SearchIcon />
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink>
          <LikeIcon />
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink>
          <BalanceIcon />
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink>
          <CartIcon />
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderBtns;
