import { createBrowserRouter, RouterProvider } from "react-router"
import RootPage from "./pages/Root"
import HomePage from "./pages/Home"
import StoresPage from "./pages/Stores"



const router = createBrowserRouter([{
  path: '/',
  element: <RootPage/>,
  children: [
    {
      index: true,
      element: <HomePage/>,
    },
    {
      path: 'stores',
      element: <StoresPage/> 
    }
  ]
}])


function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
