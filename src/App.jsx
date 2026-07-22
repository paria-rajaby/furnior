import { RouterProvider } from "react-router"
import router from "./routes"
import PaginationProvider from "./Context/PaginationContext"

function App() {

  return (
    <PaginationProvider>
      <RouterProvider router={router} />
    </PaginationProvider>
  )
}

export default App
