/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/Svg/Card.svg?react'
import style from './Basket.module.css'
import { useSelector } from 'react-redux'


  const {basketContainer , basketQuantity ,Scaling} = style

export default function IconBasket() {

  let [numProduct , setNumProduct] = useState('0')
  let [addClass , setAddClass] = useState(false)

  let allProduct = useSelector((state)=>state.card.items)
  let addNameClasses = `${basketQuantity} ${addClass ? Scaling : ''} `
 

  useEffect(()=>{
    if(allProduct.length > 0){
    let x = allProduct.reduce((one , two)=> one + two.num , 0)
    setNumProduct(x)
    setAddClass(true)
    setTimeout(()=>setAddClass(false) , 300)
    }else{
      setNumProduct(0)
    }
  },[allProduct])


  return (<>
    <div className={basketContainer}>
    <Logo title="basket icon"  />
    <div className={addNameClasses}>{numProduct}</div>
    </div> 
    </>)
}
