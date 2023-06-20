import { nanoid } from "nanoid";

import styles from "./input.module.scss";

const Input = ({ placeholder = "Text" }) => {
  const id = nanoid();

  return <input id={id} className={styles.input} placeholder={placeholder} />;
};

export default Input;
