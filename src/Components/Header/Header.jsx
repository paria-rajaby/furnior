import { Link } from "react-router";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={`${styles.header_section}`}>
        <div className={styles.header_left}>
            <img src="all-images/logos/Meubel House_Logos-05.png" alt="logo" />
            <span>Furniro</span>
        </div>
        <div className={styles.header_center}>
            <ul>
                <li>Home</li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className={styles.header_right}>
                <div><img src="all-images/logos/mdi_account-alert-outline.png"/></div>
                <div><img src="all-images/logos/akar-icons_search.png"/></div>
                <div><img src="all-images/logos/akar-icons_heart.png"/></div>
                <div><img src="all-images/logos/Vector (1).png"/></div>
        </div>
    </div>
  )
}
