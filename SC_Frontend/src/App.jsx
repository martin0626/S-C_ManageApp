import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home'
import StoresPage from './pages/Stores'
import RootPage from './pages/Root'
import AuthPage from './pages/Auth' 
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';



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

const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  )
}

export default App
