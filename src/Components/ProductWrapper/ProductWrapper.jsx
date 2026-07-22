import { useState} from "react";
import ProductBox from "../ProductBox/ProductBox"
import styles from "./ProductWrapper.module.css"
import productsData from "../../Data/Data"
export default function ProductWrapper() {
  const [visibleCount , setVisibleCount] = useState(8)
  const showMoreHandler = () => {
     if (visibleCount >= productsData.length) {
      setVisibleCount(8)  
      return
    }
    setVisibleCount((prev) => prev + 8)
  }
  return (
    <div className={`container ${styles.ProductWrapper_section}`}>
        <h2>Our Products</h2>
        <div className={styles.productboxs_wrapper}>
          {productsData.slice(0,visibleCount).map((product) => (
              <ProductBox key={product.id} product={product} />
          ))}
        </div>
        <button onClick={showMoreHandler}>
          {
            visibleCount >= productsData.length ? "Show less" : "Show More"
          }
        </button>
    </div>
  )
}
