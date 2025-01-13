import { jwtDecode } from 'jwt-decode'
import {  useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import SITEMAP from './core/Confirm'
import Lazy from './core/Lazypadg'


function App() {

  let [userToken , setUserToken] = useState(null)
 
  function getToken(){
   let jwt =  window.localStorage.userToken
    setUserToken( jwtDecode(jwt))
  }
 
  function logOut(){
    window.localStorage.removeItem('userToken')
    setUserToken(null) 
  } 

  useState(()=>{ 
    if(localStorage.userToken){
      getToken()
    }
  } ,[])

  return (
    <>
       <Header DataToken={userToken} LogOut={logOut} />

       <Routes >
        <Route path={SITEMAP.first.path}  element={<Lazy.puplic.Home />} ></Route>
        <Route path={SITEMAP.register.path}  element={<Lazy.auth.register />}></Route>
        <Route path={SITEMAP.login.path}  element={<Lazy.auth.loding callJwt={getToken} />}></Route>
        <Route path={SITEMAP.homePadg.path}  element={<Lazy.puplic.Home />} ></Route>
        <Route path={SITEMAP.search.path}  element={<Lazy.puplic.Search />} ></Route>
        <Route path={SITEMAP.card.path}  element={<Lazy.puplic.Basket />}></Route>
        <Route path={SITEMAP.contact.path}  element={<Lazy.puplic.Contact />}></Route>
        <Route path={SITEMAP.product.path }  element={<Lazy.puplic.Product />}>
           <Route path=':id' element={<Lazy.puplic.Product />} />
        </Route>
        <Route path={SITEMAP.products.path}  element={<Lazy.puplic.Products />}>
        <Route path=':Categories' element={<Lazy.puplic.Products/>} />
        </Route>
       </Routes>

       <Footer />
    </>
  )
}

export default App
