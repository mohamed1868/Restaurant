/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import style from './Basket.module.css'
import { useSelector } from 'react-redux'
import { array } from 'joi'
const {containerTotalPrice , totalText , buttonDoneCard} = style

export default function TotalPrice() {
  
    let [TotalPrice , setTotal]= useState('0')
    let allData = useSelector((state)=>state.card.items)

  useEffect(()=>{
    if(allData.length >0){
        setTotal(allData.reduce((one , two)=> one + two.num * two.price , 0))
    }else{
        setTotal(0)
    }
  },[allData])
  return (<>
  <div className={`${containerTotalPrice} container`}>
    <div className={`${totalText} row` }>
        <h1 className='col-6'>Total:</h1>
        <h2 className='col-6'>{TotalPrice}EGP</h2>
    </div>
    <div className={`${buttonDoneCard}`}>
        <button>Procees to checkout</button>
    </div>
  </div>
  
  </>
    
  )
}
