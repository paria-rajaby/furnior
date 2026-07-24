import { useContext} from "react";
import styles from './Pagination.module.css'
import ProductBox from '../../Components/ProductBox/ProductBox'
import productsData from "../../Data/Data"
import {PaginationContext} from "../../Context/PaginationContext";

export default function Pagination({filter}) {
  const {currentPage , setCurrentPage , productPerPage , firstProductIndex , lastProductIndex} = useContext(PaginationContext)
  let filteredProducts = productsData;

if (filter === "new") {
  filteredProducts = productsData.filter(product => product.isNew);
}

if (filter === "sale") {
  filteredProducts = productsData.filter(product => product.isDiscount);
}

const currentProducts = filteredProducts.slice(firstProductIndex,lastProductIndex)
 
  
  const pagesCount = Math.ceil(filteredProducts.length / productPerPage)
  return (
    <div className='container'>
        <div className={styles.paginationboxs_wrapper}>
          {currentProducts.map((product) => (
              <ProductBox key={product.id} product={product} />
          ))}
            
        </div>

        <div className={styles.pagination_buttons}>
          {
            Array.from({length: pagesCount} , (_,index) => (
              <button key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? styles.active: ""}>{index + 1}</button>
            ))
          }
        </div>

        
    </div>
  )
}
