import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router'
=======
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
>>>>>>> f28b1b89fa0d458c555066a2d36f69976b95dc65

import App from './App.tsx'
import Produto from './routes/Produto/index.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import Home from './routes/Home/index.tsx'
import Error from './routes/Error/index.tsx'

import Home from './routes/home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos",
        element: <Produtos />
      },
      {
        path: "/editar-produtos",
        element: <EditarProdutos />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)