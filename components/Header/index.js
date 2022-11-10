import react from "react";
import styles from "../../styles/Style.module.sass";

function Navbar() {
  return (
    <div className={styles.header}>
      <div>
        <h1>Reinventing the world of beauty</h1>
        <h2>
          We believe that through creativity, we are able to develop timeless
          products, both meaningful and inspirational, to people and their
          lives.
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
