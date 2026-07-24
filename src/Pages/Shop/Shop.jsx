import { useOutletContext } from 'react-router'
import Pagination from '../../Components/Pagination/Pagination'

export default function Shop() {
  
  const {filter , setFilter} = useOutletContext()
  return (
    <>
        <Pagination filter={filter} setFilter={setFilter} />
    </>
  )
}
