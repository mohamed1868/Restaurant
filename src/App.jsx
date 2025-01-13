// eslint-disable-next-line no-unused-vars
import React, { Suspense, useEffect, useState } from 'react'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'

import { Navigate, Outlet } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

export default function App() {
    let [Jwt , setJwt] = useState(null)

    function getJwt (){
        setJwt(jwtDecode(localStorage.userToken) )
    }
    useEffect(()=>{
        if(localStorage.userToken){
            getJwt()
        }
     },[])

     function LogOut(){
        <Navigate to={'/Home'} />
        localStorage.removeItem('userToken')
        setJwt(null)
     }

  return (<>
  < Header hidden ={Jwt} LogOut ={LogOut}  />

   <Suspense fallback={<div className='vh-100 d-flex align-items-center justify-content-center'>
                              <li className='fa fa-spinner fa-spin  fa-3x'></li>
                          </div>}>
        <Outlet context={{ getJwt }} />
   </Suspense>

  <Footer />
  
  </>
    
    
  )
}
