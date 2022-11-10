import react from "react";
import styles from "../../../styles/Style.module.sass";

function Product({ data }) {
  const { name, img, desc, imgDesc, price } = data;

  return (
    <div className={styles.product}>
      <div>
        {imgDesc === null ? null : (
          <div className={styles.imgDesc}>
            <p>{imgDesc}</p>
          </div>
        )}
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <h2>{desc}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Product;
