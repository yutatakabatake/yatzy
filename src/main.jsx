import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import TwoPlayer from './components/TwoPlayer.jsx'
import SelectMode from './components/SelectMode.jsx'

const router = createBrowserRouter([
  { path: "/", Component: SelectMode },
  { path: "/one", Component: App },
  { path: "/two", Component: TwoPlayer }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
