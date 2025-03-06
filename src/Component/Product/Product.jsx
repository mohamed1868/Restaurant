/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToProducts } from '../Store/Card';
import Swal from 'sweetalert2';
import { fadein } from '../../Test';
import { motion } from 'motion/react';
import { instanceAxios } from '../../Api/Api';
import { Data } from '../../Data';

const {collectContainerProduct,sizeProdict,  mySwiper , containerOneProduct ,sizeProduct , buttomProduct ,containerNumProduct ,oneNum ,activeSize} = style

export default function Product() {
   
  let [dataProduct , setDataProduct1] = useState([])
  let [sizeProduct1 , setSizeProduct1] = useState('')
  let [errorDataProduct ,setErrorDataProduct] = useState('')
  let [errorNumProduct ,setErrorNumProduct] = useState(true)
  let dispatch = useDispatch()
  let Params1 = useParams()
  


  // async function getDataProduct() {
  //   try{
  //       let api5 = await instanceAxios.get(`FoodItems?id=${parseInt(Params1.id) }`)
  //       setDataProduct1(api5.data)

  //   }catch(error){
  //     setErrorDataProduct('NOT DATA FOUND')
  //   }
    
  // }

  function addSizeProduct(size){
    setSizeProduct1(size)
  }

  function Provide(){
    let button = document.querySelector('#numProduct')
    let currentNumber  = parseInt(button.textContent) 
 
     button.textContent =  currentNumber + 1 
     setErrorNumProduct(false)


 
} 
  function Reduce(){
  let button = document.querySelector('#numProduct')
  let currentNumber  = parseInt(button.textContent) 
  if(currentNumber > 1){
      button.textContent -= 1 
      
  }else{
    setErrorNumProduct(true)
  }

}
function addToCard(allData){
  dispatch(addToProducts(allData))
  Swal.fire({
    title: "Good Product!",
    text: "Success Add To Card!",
    icon: "success"
  });

}

  useEffect(()=>{
    // getDataProduct()
    setDataProduct1([Data.FoodItems.find((el)=>el.id ==Params1.id)] )
  },[])

  return (<>
  <motion.div variants={fadein('left' , 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false , amount:0.7}} className={` ${collectContainerProduct} container row`}>
    <div className={` col-lg-7 col-m-7 col-sm-12`}>
    <Swiper pagination={true} modules={[Pagination]} className={`${mySwiper}`}>
  {dataProduct.map((product) => (
    product.images.map((image, index) => (
      <SwiperSlide key={index}>
        <img  src={image} alt="product image" />
      </SwiperSlide>
    ))
  ))}
</Swiper>
    </div>
    <div className={` col-lg-5 col-m-5 col-sm-12 `}>
      {dataProduct.length > 0 ?
      dataProduct.map((ele)=>(<div className={`${containerOneProduct}`}>
          <h3>{ele.title}</h3>
        <p>{ele.About}</p>
        <div className={`${sizeProduct} row`}>
          {ele.sizes.map((el)=>  <div onClick={()=>addSizeProduct({size:el.size , price:el.price} )} className={`${sizeProduct1.size == el.size ? activeSize : ''}  ${sizeProdict} col-4`} >
            <h4>{el.size}</h4>
            <h5>{el.price}EGP</h5>
          </div >)}

        </div>

        <div className={`${buttomProduct} row container`} >
        <div className='col-6'>
        <div className={`${containerNumProduct} row`}>
          <button className={`${oneNum} col-4`} onClick={()=>Provide()} >+</button>
          <h1 id='numProduct' className='col-4'>1</h1>
          <button disabled={errorNumProduct } className={`${oneNum} col-4`} onClick={()=>Reduce()} >-</button>
        </div>
        </div >
        <div className='col-6' >
               <button disabled={!sizeProduct1} 
               onClick={()=>addToCard({sizes:sizeProduct1 , num:parseInt(document.querySelector('#numProduct').textContent) , data:ele})}
               >Add To Card</button>
          </div>

            
        </div>
        
         </div>


      ))
      :errorDataProduct.length > 0 ?<div><h1>{errorDataProduct}</h1></div> 
      : <div className='vh-100 d-flex align-items-center justify-content-center'>
      <li className='fa fa-spinner fa-spin  fa-3x'></li>
        </div>}

    </div>


  </motion.div>
  
  
  
  </>
    
  )
}
