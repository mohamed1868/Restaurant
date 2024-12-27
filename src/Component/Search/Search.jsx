/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import style from './Search.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
 
const {containerSearch , inputSearch , contaiberSearchProduct ,massageNoData } = style

export default function Search() {

    let [dataAllProudecs , setdataAllProudecs] = useState([])
    let [errorDataAllProudecs , setErrorDataAllProudecs] = useState('')
    let [inputValueSearch , setData] = useState('')
    let [massageNoValue , setMassageNoValue] = useState('Please enter the name of the product you are looking for')


  async function getProductsAllData() {
    try{
      let getApi3 = await axios.get('http://localhost:5005/FoodItems')
      setdataAllProudecs(getApi3.data)


     }catch(errer){

    setErrorDataAllProudecs('No Data Found')
  }
    
  }
  function inputValue(el){
    setData(el.target.value.toUpperCase())
  }

    useEffect(()=>{

      getProductsAllData()
    },[])

  return (<>
  
   <div className={`${containerSearch} container`}>
    <div className={`${inputSearch}`}>
      <input type='text' onChange={inputValue}></input>
      <i className="fa-solid fa-magnifying-glass"></i>
    </div>
    <div  className={`${contaiberSearchProduct} row`}>
      {inputValueSearch.length >0 ? dataAllProudecs.filter((el)=>el.title.toUpperCase().includes(inputValueSearch)).map((el)=><div className='col-6'>
        <Link to={`/Product/${el.id}`} >
      <img width={150} height={150} src={el.images[0]}></img>
      <h1>{el.title}</h1></Link>
      </div>
        ) : <div className={massageNoData}>
          <h1>{massageNoValue}</h1>
           </div> }

    

    </div>

   </div>
  
  
  
  </>
    
  )
}
