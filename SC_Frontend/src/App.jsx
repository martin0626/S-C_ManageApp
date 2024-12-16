import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import StoresPage from './pages/Stores'
import RootPage from './pages/Root'
import AuthPage from './pages/Auth' 
import StoreDetails from './pages/StoreDetails'



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: 'stores',
        element: <StoresPage/>,
      },
      {
        path: 'stores/:slug',
        element: <StoreDetails/>,
      },
      {
        path: 'login',
        element: <AuthPage type={'login'}/>,
      },
      {
        path: 'register',
        element: <AuthPage type={'register'}/>,
      },
    ]
  }
])



function App() {

  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App
