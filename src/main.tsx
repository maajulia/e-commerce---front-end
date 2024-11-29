import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CadastroProduto from './componentes/CadastroProdutos.tsx';
const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
},

{
  path: "/cadastro-produtos",
  element: <CadastroProduto/>,
},


]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);

