import { useContext, useEffect, useState } from 'react'
import PagesDesc from '../../Components/PagesDesc/PagesDesc'
import PagesHero from '../../Components/PagesHero/PagesHero'
import Pagination from '../../Components/Pagination/Pagination'
import { PaginationContext } from '../../Context/PaginationContext'
import productsData from '../../Data/Data'

export default function Shop() {
  const [filter , setFilter] = useState("all")
  const {setCurrentPage} = useContext(PaginationContext)

  const filteredProducts = filter === "new" ? productsData.filter(product => product.isNew) : filter === "sale" ? productsData.filter(product => product.isDiscount) : productsData

  useEffect(() => {
    setCurrentPage(1)
  },[filter])
  return (
    <>
        <PagesHero filter={filter} setFilter={setFilter} productsCount={filteredProducts.length}/>
        <Pagination filter={filter} setFilter={setFilter} />
        <PagesDesc />
    </>
  )
}
