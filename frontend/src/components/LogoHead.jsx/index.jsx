import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import styles from "./logo-head.module.css";

const LogoHead = () => {
  return (
    <Link to="/" className={styles.wrapper}>
      <h1>Board Game Keep</h1>
      <Icon icon="logos:formkeep" style={{ fontSize: "48px" }} />
    </Link>
  );
};

export default LogoHead;