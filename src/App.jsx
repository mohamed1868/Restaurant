import { Route, Routes } from 'react-router-dom'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import Products from './Component/Products/Products'
import Contact from './Component/Contact/Contact'
import { lazy } from 'react'

const Home =  lazy(()=> import('./Component/Home/Home'))
const Product = lazy(()=> import('./Component/Product/Product'))
const Search = lazy(()=> import('./Component/Search/Search'))
const Basket = lazy(()=> import('./Component/Card/Basket'))
const Register = lazy(()=> import('./Component/Register/Register'))
const Login = lazy(()=> import('./Component/Login/Login'))




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
