import styles from './PagesDesc.module.css'

export default function PagesDesc() {
  return (
    <div className={styles.pagedesc_wrapper}>
        <div>
            <img src="all-images/logos/customer-support.png" />
            <div>
                <span>High Quality</span>
                <p>crafted from top materials</p>
            </div>
        </div>

        <div>
            <img src="all-images/logos/guarantee.png" />
            <div>
                <span>Warranty Protection</span>
                <p>Over 2 years</p>
            </div>
        </div>

        <div>
            <img src="all-images/logos/shipping.png" />
            <div>
                <span>Free Shipping</span>
                <p>Order over 150$</p>
            </div>
        </div>

        <div>
            <img src="all-images/logos/trophy 1.png" />
            <div>
                <span>24 / 7 Support</span>
                <p>Dedicated support</p>
            </div>
        </div>

    </div>
  )
}
