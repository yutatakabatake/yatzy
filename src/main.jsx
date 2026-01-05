import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Home from './page/Home.jsx'
import OnePlayer from './page/OnePlayer.jsx'
import TwoPlayer from './page/TwoPlayer.jsx'

const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/one", Component: OnePlayer },
  { path: "/two", Component: TwoPlayer }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
