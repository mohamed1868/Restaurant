import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistsStore, store } from './Component/Store/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistsStore}></PersistGate>
      <Suspense fallback={<div className='vh-100 d-flex align-items-center justify-content-center'>
                              <li className='fa fa-spinner fa-spin  fa-3x'></li>
                          </div>} >
      <BrowserRouter>
          <App />
      </BrowserRouter>a
      </Suspense>

      </Provider>


  </StrictMode>,
)
