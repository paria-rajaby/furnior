import styles from "./Inspiration.module.css"

export default function Inspiration() {
  return (
    <div className={styles.Inspiration_wrapper}>
        <div className={styles.inspiration_context}>
            <span>50+ Beautiful rooms inspiration</span>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <button>Explore More</button>
        </div>
        
        <div className={styles.inspiration_images}>
            <div className={styles.inspiration_image}>
                <img src="all-images/images/Image.png"/>
            </div>

            <div>
                 <img src="all-images/images/Rectangle 25.png"/>
            </div>
        </div>
    </div>
  )
}
