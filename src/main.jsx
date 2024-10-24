import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SuitePage from './SuitePage/SuitePage.jsx'
import SuiteCalendar from './SuiteCalendar/SuiteCalendar.jsx'
import HomePage from './HomePage/HomePage.jsx'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
},
{ path: ':suitePage',
  element: <SuitePage /> 
},
{ path: '/Calendar',
  element: <SuiteCalendar /> 
},
{ path: '/Home/:userId',
  element: <HomePage />

}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
