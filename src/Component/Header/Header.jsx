/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Style1 from './Header.module.css'
import IconBasket from './IconBasket'
import { Link } from 'react-router-dom'

const  {Logoname  ,BodyHeader1 , NavColor , Icondark ,sun} = Style1

export default function Header(propss) {
  
    function darksun(){
        let sun =  document.getElementById('sun')
        let moon = document.getElementById('moon')
         sun.style.visibility = 'hidden'
         moon.style.visibility = 'visible'
         document.body.classList.remove('dark')
          window.localStorage.removeItem('dark')
      }
      
      function darkmoon(){
        let sun =  document.getElementById('sun')
        let moon = document.getElementById('moon')
         sun.style.visibility = 'visible'
         moon.style.visibility = 'hidden'
        document.body.classList.add('dark')
        window.localStorage.dark = 'dark'
      }
      useEffect(()=>{
         if(window.localStorage.dark){
          darkmoon()
         }
      
      },[])
    



  return (<>
  <nav className= {`navbar navbar-expand-lg bg-body-tertiary ${NavColor} `}>
  <div className={`container-fluid ${BodyHeader1}`}>
  <h1 className="navbar-brand">welcome to <span className={Logoname}>Taaza</span></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'Home'} className="nav-link " aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'Contact'} className="nav-link " aria-current="page">Contact</Link>
        </li>
      </ul>
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'Register'} className="nav-link " aria-current="page">Sign Up</Link>
        </li>
        {propss.DataToken?<li className="nav-item">
          <button className="nav-link " aria-current="page" onClick={()=>propss.LogOut()}>Logout</button>
        </li> : <li className="nav-item">
          <Link to={'Login'} className="nav-link " aria-current="page">Sign In</Link>
        </li>}
    

        <div className={Icondark}>
        <li   className={`nav-item mt-1`}>
        <i id='sun' className={`${sun} fa-regular fa-sun`}  onClick={()=>darksun()}></i>
        </li> 
          <li  className={`nav-item mt-1  `}>
          <i id='moon' className="fa-regular fa-moon "  onClick={()=>darkmoon()}></i> 
        </li>

        </div>


        <li className="nav-item mt-1  ">
            <Link to={'Search'} >
                    <i className="fa-solid fa-magnifying-glass nav-link"></i>
            </Link>
        </li>
        <li className="nav-item mt-2 ">
            <Link to={'Card'} >
                <IconBasket  />
            </Link>
       
        </li>
       


      </ul>

    </div>
  </div>
</nav>

  </>

  )
}
