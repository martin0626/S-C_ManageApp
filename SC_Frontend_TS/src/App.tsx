import { createBrowserRouter, RouterProvider } from "react-router"
import RootPage from "./pages/Root"
import HomePage from "./pages/Home"
import StoresPage from "./pages/Stores"
import StoreDetails from "./pages/StoreDetails"
import LoginRegisterPage from "./pages/UserAuth"
import { clearToken, getToken } from "./utils/jwtSetter"
import useLoginUser from "./hooks/useLogin"



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


  //Check if user is currently login when app start
  let loginData;
  const token = getToken()
  if(token){
    loginData = useLoginUser(token);
  }

  if(loginData?.isError){
    clearToken();
  }

  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
