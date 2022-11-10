import react from "react";
import styles from "../../styles/Style.module.sass";
import Product from "./Product";

const DUMMY_DATA = [
   {
    name: "Radiance Cream",
    img: "/image-5.jpg",
    desc: "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
    imgDesc: null,
    price: "€89.00",
   }, 
   {
    name: "Radiance Cream",
    img: "/image-5.jpg",
    desc: "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
    imgDesc: null,
    price: "€149.00",
   },
   {
    name: "Radiance Cream",
    img: "/image-5.jpg",
    desc: "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
    imgDesc: null,
    price: "€89.00",
   },
   {
    name: "Radiance Cream",
    img: "/image-5.jpg",
    desc: "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
    imgDesc: "A plumping 2% Hyaluronic Acid complex with Vitamin C to help hydrate and brighten tired-looking skin.",
    price: "€89.00",
   },
   {
    name: "Radiance Cream",
    img: "/image-5.jpg",
    desc: "A powerful Superblend of wheat-based Hyaluronic Acid to plump and Vitamin C to help firm, tighten, smooth and improve skin appearance.",
    imgDesc: null,
    price: "€89.00",
   }
]

function Products() {
  console.log(1, DUMMY_DATA)
  return (
    <div className={styles.products}>
      <h1>View products</h1>
      <div>
        <a href="http://localhost:3000/" className={styles.products}>
          Price
        </a>
        <a href="http://localhost:3000/" className={styles.products}>
          New
        </a>
      </div>
      <div>
        {DUMMY_DATA.map((dummyData) => (
          <Product data={dummyData} />
        ))}
      </div>
      <a>Show more</a>
    </div>
  );
}

export default Products;
