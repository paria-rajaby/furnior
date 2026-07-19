import styles from "./Share.module.css"
export default function Share() {
  return (
   
  <section className={`container ${styles.gallery}`}>
    <div className={styles.gallery_header}>
      <span>Share your setup with</span>
      <h2>#FuniroFurniture</h2>
    </div>
    

    <div className={styles.gallery_imgs}>
      <div className={`${styles.item} ${styles.item1}`}>
        <img src="./all-images/share-section/Rectangle 36.png"  />
      </div>

      <div className={`${styles.item} ${styles.item2}`}>
        <img src="./all-images/share-section/Rectangle 38.png"  />
      </div>

      <div className={`${styles.item} ${styles.item3}`}>
        <img src="./all-images/share-section/Rectangle 40.png"  />
      </div>

      <div className={`${styles.item} ${styles.item4}`}>
        <img src="./all-images/share-section/Rectangle 43.png"  />
      </div>

      <div className={`${styles.item} ${styles.item5}`}>
        <img src="./all-images/share-section/Rectangle 45.png"  />
      </div>

      <div className={`${styles.item} ${styles.item6}`}>
        <img src="./all-images/share-section/Rectangle 39.png"  />
      </div>

      <div className={`${styles.item} ${styles.item7}`}>
        <img src="./all-images/share-section/Rectangle 41.png"  />
      </div>

      <div className={`${styles.item} ${styles.item8}`}>
        <img src="./all-images/share-section/Rectangle 44.png"  />
      </div>

      <div className={`${styles.item} ${styles.item9}`}>
        <img src="./all-images/share-section/Rectangle 37.png"  />
      </div>
    </div>

</section>
  
  )
}
