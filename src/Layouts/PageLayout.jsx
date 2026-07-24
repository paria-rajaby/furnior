import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
import PagesHero from '../Components/PagesHero/PagesHero'
import PagesDesc from '../Components/PagesDesc/PagesDesc'
import { useContext, useEffect, useState } from 'react'
import { PaginationContext } from '../Context/PaginationContext'
import productsData from '../Data/Data'

export default function PageLayout() {

    const location = useLocation()
    const heroTitle = location.pathname.split("/page/")[1]
    const [filter , setFilter] = useState("all")
    const {setCurrentPage} = useContext(PaginationContext)
      
    
      const filteredProducts = filter === "new" ? productsData.filter(product => product.isNew) : filter === "sale" ? productsData.filter(product => product.isDiscount) : productsData
    
      useEffect(() => {
        setCurrentPage(1)
      },[filter])
  return (
    <>
        <PagesHero filter={filter} setFilter={setFilter} productsCount={filteredProducts.length} heroTitle={heroTitle}/>
        <Outlet context={{filter , setFilter}} />
        <PagesDesc />
    </>
  )
}
