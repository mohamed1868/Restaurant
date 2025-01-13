import { StrictMode  } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import { Provider } from 'react-redux'
import { persistsStore, store } from './Component/Store/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import Routers from './core/Routers.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistsStore}>
      <RouterProvider router={Routers} />
      </PersistGate>
    </Provider>
  </StrictMode>
)
