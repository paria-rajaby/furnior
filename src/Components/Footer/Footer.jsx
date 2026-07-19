import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer_section}>
        <span className={styles.footer_top_line}></span>
        <div className={`container ${styles.footer_context}`}>
            <div className={styles.footer_contex_left}>
                <span>Funiro.</span>
                <p>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
            </div>
            <div className={styles.footer_contex_right}>
                <div>
                    <span>Links</span>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <span>Help</span>
                    <ul>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </div>
                <div className={styles.newsletter_section}>
                    <span>Newsletter</span>
                    <div>
                        <input placeholder="Enter Your Email Address" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>


        <span className={`container ${styles.footer_top_line}`}></span>

        <div className={`container ${styles.footer_allright}`}>
            <span>2026 furino. All rights reverved</span>
        </div>
    </div>
  )
}
