import { createContext , useState} from "react"
import productsData from "../Data/Data"
export const PaginationContext = createContext()


export default function PaginationProvider({children}) {

    const [currentPage , setCurrentPage] = useState(1)
    const productPerPage = 8
    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage
    const currentProducts = productsData.slice(firstProductIndex , lastProductIndex)
  return (
    <PaginationContext.Provider value={{currentPage , setCurrentPage , productPerPage , lastProductIndex ,firstProductIndex , currentProducts}}>
        {children}
    </PaginationContext.Provider>
  )
}
