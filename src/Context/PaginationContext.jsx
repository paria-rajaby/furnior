import { createContext , useState} from "react"
export const PaginationContext = createContext()

export default function PaginationProvider({children}) {

    const [currentPage , setCurrentPage] = useState(1)
    const productPerPage = 8
    const lastProductIndex = currentPage * productPerPage;
    const firstProductIndex = lastProductIndex - productPerPage
  return (
    <PaginationContext.Provider value={{currentPage , setCurrentPage , productPerPage , lastProductIndex ,firstProductIndex}}>
        {children}
    </PaginationContext.Provider>
  )
}
