import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero_section}>
        <img src="./images/scandinavian-interior-mockup-wall-decal-background 1.png"/>

        <div className={styles.hero_top}>
            <div><span>New Arrival</span></div>
            <div className={styles.hero_top_discover}>
                <span>Discover Our</span>
                <span>New Collection</span>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
            <div className={styles.hero_top_button}>
                <button>Buy Now</button>
            </div>
        
        </div>
    </div>

   
  )
}
