/* eslint-disable no-unused-vars */
import React from 'react'
import style from './Footer.module.css'



const {ContainerFooter} = style

export default function Footer() {



  return (
    <>
    <div className={`${ContainerFooter}`}>
      <h1>Tazza</h1>
      <div>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
     <i className="fa-brands fa-square-instagram"></i>
      </div>
      <h4>Tazza.com | Make from mohamed</h4>
    </div>
    </>
  )
}
