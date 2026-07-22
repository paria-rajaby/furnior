import Styles from './PagesHero.module.css'
import productsData from "../../Data/Data"
import { useContext } from 'react'
import { PaginationContext } from '../../Context/PaginationContext'

export default function PagesHero() {
    const {lastProductIndex ,firstProductIndex} = useContext(PaginationContext)
  return (
    <div className={Styles.pageshero_wrapper}>
        <img src="all-images/images/pagesHero.png" className={Styles.hero_img}/>
        {/* hero overlay */}
        <div className={Styles.overlay_wrapper}>
            <img src="all-images/logos/Meubel House_Logos-05.png" />
            <span  className={Styles.overlay_title}>Shop</span>
            <div className={Styles.overlay_context}>
                <span>Home</span>
                <img src="all-images/logos/dashicons_arrow-down-alt2.png"/>
                <span>Shop</span>
            </div>
        </div>
        {/* hero overlay */}

        <div className={Styles.bottom_hero}>
            <div className={Styles.bottom_hero_left}>
                <div className={Styles.bottom_hero_left_filter}>
                    <img src="all-images/logos/system-uicons_filtering.png"/>
                    <span>Filter</span>
                </div>
                <span className={Styles.bottom_hero_left_line}></span>
                <div>
                    <p>Showing {firstProductIndex + 1}–{lastProductIndex} of {productsData.length} results</p>
                </div>
            </div>


            <div className={Styles.bottom_hero_right}>
                <span>Show</span>
                <input type="text"/>
            </div>
        </div>
    </div>
  )
}
