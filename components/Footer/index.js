import react from "react";
import styles from "../../styles/Style.module.sass";

function Footer() {
  return (
    <div className={styles.footer}>
      <img src="/VACA-logo.svg" alt="Logo" />
      <div>
        <a>Privacy Policy</a>
        <a>Privacy Policy</a>
        <a>Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
