
import Styles from './BottomHeroForPages.module.css'
export default function bottomHeroForPages({isDropDownOpen,setIsDropDownOpen,dropDownRef,firstProductIndex,lastProductIndex,setFilter,productsCount}) {
  return (
    <div className={Styles.bottom_hero}>
            <div className={Styles.bottom_hero_left}>
                <div onClick={() => setIsDropDownOpen(true)} className={Styles.bottom_hero_left_filter}>
                    <img src="/all-images/logos/system-uicons_filtering.png"/>
                    <span>Filter</span>
                </div>


                {/* filter drop down */}
                {
                    isDropDownOpen ?
                     <div ref={dropDownRef} className={Styles.filter_dropdown}>
                      <ul>
                        <li onClick={() =>{ setFilter("all") ; setIsDropDownOpen(false)} }>All</li>
                        <span></span>
                        <li onClick={() =>{ setFilter("new") ; setIsDropDownOpen(false)} }>New Items</li>
                        <span></span>
                        <li onClick={() => {setFilter("sale") ; setIsDropDownOpen(false)}}>On Sale Items</li>
                      </ul>    
                    </div> : null
                }
                    
                {/* filter drop down */}
                <span className={Styles.bottom_hero_left_line}></span>
                <div>
                    <p>Showing {firstProductIndex + 1}–{Math.min(lastProductIndex , productsCount)} of {productsCount} results</p>
                </div>
            </div>


            <div className={Styles.bottom_hero_right}>
                <span>Show</span>
                <input type="text"/>
            </div>
        </div>
  )
}
