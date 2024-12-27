
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Product from './Component/Product/Product'
import Search from './Component/Search/Search'
import Basket from './Component/Card/Basket'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Products from './Component/Products/Products'
import Contact from './Component/Contact/Contact'




function App() {

  let [userToken , setUserToken] = useState(null)
 
  function getToken(){
   let jwt =  window.localStorage.userToken
    setUserToken( jwtDecode(jwt))
  }
  useState(()=>{ 
    if(localStorage.userToken){
      getToken()
    }
  } ,[])
  function logOut(){
    window.localStorage.removeItem('userToken')
    setUserToken(null) 
  }
   
  return (
    <>
       <Header DataToken={userToken} LogOut={logOut} />
       <Routes >
        <Route path='/' element={<Home />} ></Route>
        <Route path='Register' element={<Register />}></Route>
        <Route path='/Login' element={<Login callJwt={getToken} />}></Route>
        <Route path='Home' element={<Home />} ></Route>
        <Route path='Search' element={<Search />} ></Route>
        <Route path='Card' element={<Basket />}></Route>
        <Route path='Contact' element={<Contact />}></Route>
        <Route path='Product' element={<Product/>}>
           <Route path=':id' element={<Product />} />
        </Route>
        <Route path='Products' element={<Products />}>
        <Route path=':Categories' element={<Products/>} />
        </Route>
       </Routes>
       <Footer />
    </>
  )
}

export default App
