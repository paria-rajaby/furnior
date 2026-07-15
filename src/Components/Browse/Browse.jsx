import styles from "./Browse.module.css";
export default function Browse() {
  return (
    <div className={`container ${styles.browse_wrapper}`}>
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className={styles.browse_imgs}>
            <div>
                <img src="./images/Mask Group (1).png"/>
                <span>Dining</span>
            </div>
            <div>
                <img src="./images/Image-living room.png"/>
                <span>Living</span>
            </div>
           <div>
                <img src="./images/Mask Group.png"/>
                <span>Bedroom</span>              
            </div> 
        </div>
    </div>
  )
}
