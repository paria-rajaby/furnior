import Styles from './PagesHero.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import { PaginationContext } from '../../Context/PaginationContext'
import BottomHeroForPages from '../BottomHeroForPages/BottomHeroForPages'

export default function PagesHero({setFilter,productsCount,heroTitle}) {
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
        <img src="/all-images/images/pagesHero.png" className={Styles.hero_img}/>
        {/* hero overlay */}
        <div className={Styles.overlay_wrapper}>
            <img src="/all-images/logos/Meubel House_Logos-05.png" />
            <span  className={Styles.overlay_title}>{heroTitle}</span>
            <div className={Styles.overlay_context}>
                <span>Home</span>
                <img src="/all-images/logos/dashicons_arrow-down-alt2.png"/>
                <span>{heroTitle}</span>
            </div>
        </div>
        {/* hero overlay */}

        <BottomHeroForPages isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen} dropDownRef={dropDownRef} firstProductIndex={firstProductIndex} lastProductIndex={lastProductIndex} setFilter={setFilter} productsCount={productsCount}/>
    </div>
  )
}
