import ProductBox from "../ProductBox/ProductBox"
import styles from "./ProductWrapper.module.css"
export default function ProductWrapper() {
  return (
    <div className={`container ${styles.ProductWrapper_section}`}>
        <h2>Our Products</h2>
        <div className={styles.productboxs_wrapper}>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
        </div>
        <button>Show More</button>
    </div>
  )
}
