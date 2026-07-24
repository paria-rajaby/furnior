import Styles from './PagesHero.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginationContext } from '../../Context/PaginationContext'

export default function PagesHero({setFilter,productsCount}) {
   const [isDropDownOpen , setIsDropDownOpen] = useState(false)
   const dropDownRef = useRef(null)
   const {lastProductIndex ,firstProductIndex} = useContext(PaginationContext)
   
  

  useEffect(() => {
        const handleClick = (event) => {
        
         if (dropDownRef.current && !dropDownRef.current.contains(event.target) ) {
            setIsDropDownOpen(false)
         }
        }

        document.addEventListener("mousedown" , handleClick)
       
        return () => {
          document.removeEventListener("mousedown" , handleClick)  
        }
  },[])
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
                <div onClick={() => setIsDropDownOpen(true)} className={Styles.bottom_hero_left_filter}>
                    <img src="all-images/logos/system-uicons_filtering.png"/>
                    <span>Filter</span>
                </div>


                {/* filter drop down */}
                {
                    isDropDownOpen ?
                     <div ref={dropDownRef} className={Styles.filter_dropdown}>
                      <ul>
                        <li onClick={() => setFilter("all")}>All</li>
                        <span></span>
                        <li onClick={() => setFilter("new")}>New Items</li>
                        <span></span>
                        <li onClick={() => setFilter("sale")}>On Sale Items</li>
                      </ul>    
                    </div> : null
                }
                    
                {/* filter drop down */}
                <span className={Styles.bottom_hero_left_line}></span>
                <div>
                    <p>Showing {firstProductIndex + 1}–{Math.min(lastProductIndex , productsCount)} of {productsCount.length} results</p>
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
