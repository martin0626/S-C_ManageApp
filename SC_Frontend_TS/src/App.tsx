import { createBrowserRouter, RouterProvider } from "react-router"
import RootPage from "./pages/Root"
import HomePage from "./pages/Home"
import StoresPage from "./pages/Stores"
import StoreDetails from "./pages/StoreDetails"
import LoginRegisterPage from "./pages/UserAuth"



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
    },
    {
      path: 'stores/:slug',
      element: <StoreDetails/>  
    },
    {
      path: '/auth',
      element: <LoginRegisterPage/>
    }
  ]
}])


function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
