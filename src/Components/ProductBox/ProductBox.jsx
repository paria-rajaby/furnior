import styles from "./ProductBox.module.css"
export default function ProductBox({product}) {
  return (
    <div className={styles.productbox_wrapper}>
        <img src={product.image}/>
        <div className={styles.productbox_details_wrapper}>
          <span className={styles.productbox_details_title}>{product.name}</span>
          <p>{product.desc}</p>
          <div className={styles.productbox_price_wrapper}>
              <span>Rp {product.price}</span>
              <s>Rp 2.500.000</s>
          </div>
        </div>
        

        {
          product.isDiscount ? (<div className={styles.discount}>-30%</div>) : null
        }
        {
          product.isNew ? (<div className={styles.new}>New</div>) : null
        }


        {/* overlay */}
        <div className={styles.overlay}> 
          <button>Add to cart</button>
          <div className={styles.overlay_context}>
            <div>
              <img src="all-images/logos/gridicons_share.png"/>
              <span>Share</span>
            </div>
            <div>
              <img src="all-images/logos/compare-svgrepo-com 1.png"/>
              <span>Compare</span>
            </div>
            <div>
              <img src="all-images/logos/Heart.png"/>
              <span>Like</span>
            </div>
          </div>
        </div>
    </div>
  )
}
