import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SuitePage from './SuitePage/SuitePage.jsx'
import SuiteCalendar from './SuiteCalendar/SuiteCalendar.jsx'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
},
{ path: ':suitePage',
  element: <SuitePage /> 
},
{ path: ':suiteCalendar',
  element: <SuiteCalendar /> 
  }]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
