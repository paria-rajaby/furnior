import styles from './Pagination.module.css'
import ProductBox from '../../Components/ProductBox/ProductBox'

export default function Pagination() {
  return (
    <div className='container'>
        <div className={styles.paginationboxs_wrapper}>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
        </div>

        <div className={styles.pagination_buttons}>
            <button className={styles.active}>1</button>
            <button>2</button>
            <button>3</button>
        </div>
    </div>
  )
}
