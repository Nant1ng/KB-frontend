import react from "react";
import styles from "../../styles/Style.module.sass";

function ContactUs() {
  return (
    <div className={styles.contactUs}>
      <div>
        <h1>Get in touch</h1>
        <h2>
        47 Chandos Place, London, WC2N 4HS
        </h2>
        <a>Contact us</a>
      </div>
    </div>
  );
}

export default ContactUs;