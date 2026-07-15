import styles from "./ProductBox.module.css"
export default function ProductBox() {
  return (
    <div className={styles.productbox_wrapper}>
        <img src="./products/Images.png"/>
        <div className={styles.productbox_details_wrapper}>
          <span className={styles.productbox_details_title}>Syltherine</span>
          <p>Stylish cafe chair</p>
          <div className={styles.productbox_price_wrapper}>
              <span>Rp 2.500.000</span>
              <s>Rp 2.500.000</s>
          </div>
        </div>
        <div className={styles.discount}>
          -30%
        </div>



        {/* overlay */}
        <div className={styles.overlay}> 
          <button>Add to cart</button>
          <div className={styles.overlay_context}>
            <div>
              <img src="./logos/gridicons_share.png"/>
              <span>Share</span>
            </div>
            <div>
              <img src="./logos/compare-svgrepo-com 1.png"/>
              <span>Compare</span>
            </div>
            <div>
              <img src="./logos/Heart.png"/>
              <span>Like</span>
            </div>
          </div>
        </div>
    </div>
  )
}
