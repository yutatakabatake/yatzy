import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './page/Home.jsx'
import OnePlayer from './page/OnePlayer.jsx'
import TwoPlayer from './page/TwoPlayer.jsx'
import Rule from './page/Rule.js'

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/one", Component: OnePlayer },
  { path: "/two", Component: TwoPlayer },
  { path: "/rule", Component: Rule }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
