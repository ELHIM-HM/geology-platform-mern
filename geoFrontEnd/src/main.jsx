// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Import des pages
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Authentication/Login.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import StudentReg from './Pages/Authentication/StudentReg.jsx'
import TeacherReg from './Pages/Authentication/TeacherReg.jsx'
import History from './Pages/Musee/History/History.jsx'
import Library from './Pages/Library/Library.jsx'
import Collection from './Pages/Musee/collection/Collection.jsx'
import Geology from './Pages/Fsbm/Geology.jsx'
import Faculty from './Pages/Fsbm/Faculty.jsx'
import Annonces from './Pages/evenment/Annonces.jsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 5, retryDelay: 1000 },
  },
})

const RedirectToDashboard = () => {
  window.location.href = 'http://localhost:5174'
  return null
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    children: [
      {
        path: 'student',
        element: <StudentReg />,
      },
      {
        path: 'teacher',
        element: <TeacherReg />,
      },
    ],
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/musee',
    children: [
      {
        path: 'collections',
        element: <Collection />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
  {
    path: '/geology',
    element: <Geology />,
  },
  {
    path: '/faculty',
    element: <Faculty />,
  },
  {
    path: '/evenement',
    element: <Annonces />,
  },
  {
    path: '/admin',
    element: <RedirectToDashboard />,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
