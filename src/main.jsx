import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider, BrowserRouter } from 'react-router-dom'
import { App, router, store, AppRoutes } from './app'


createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </Provider>
)
