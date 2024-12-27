/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadein } from '../../Test';


const {SliderContainer ,mySwiper ,gategoteContainer ,gategoteName ,h1Gategory ,allProducts ,productsContainer} = style

export default function Home() {
  
  let [imageSlider , setImageSlider ] = useState([])
  let [dataCategory , setDataCategory] = useState([])
  let [errorDataCategory , errorSetDataCategory] = useState('')
  let [dataAllProudecs , setDataAllProduct] = useState([])


 async  function getData(nameApi , setData){
    try{
        let getApi = await axios.get(`http://localhost:5005/${nameApi}`)
        setData(getApi.data)
  
    }catch(errer){
      errorSetDataCategory('No Data Found')
    }
  }


  useEffect(()=>{
    getData('images' , setImageSlider)
    getData('categories' , setDataCategory)
    getData('FoodItems' , setDataAllProduct)

  },[])



  return (
    <>
    <div className='container'>
        <motion.div
        variants={fadein('right' , 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false , amount:0.7}}
        className={`${SliderContainer}`}>
        <Swiper navigation={true} modules={[Navigation]} className={`${mySwiper}`} >
         {imageSlider.map((el)=>(<SwiperSlide key={el.id}><img src={`${el.url}`}></img></SwiperSlide>))} 
      </Swiper>
        </motion.div>
        <div  className={`${gategoteContainer}`} >
          <div className={`${h1Gategory}`}>
             <h1>All Category</h1>
          </div>
         
          <motion.div
            variants={fadein('left' , 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false , amount:0.7}}
          className={`${gategoteName} row`}>
            {dataCategory.length > 0 ? dataCategory.map((ele)=>(
              
              <div key={ele.id} className='col-lg-4 col-md-6 col-s-12'>
                <Link to={`/Products/${ele.name}`}>
            <img src={ele.image} width={200} height={200}></img>
            <h3>{ele.name}</h3>   
                </Link>
            
            </div>            
         )) : errorDataCategory.length > 0 ? <h1>{errorDataCategory}</h1> :
         <div className='vh-100 d-flex align-items-center justify-content-center'>
          <li className='fa fa-spinner fa-spin  fa-3x'></li>
            </div>}
          </motion.div>
        </div>
        <div className={`${allProducts}`}>
         <div className={`${h1Gategory}`}>
             <h1>All Product</h1>
          </div>
          <div
           
           className={`${productsContainer} row`}>
           {dataAllProudecs.map((ele)=>(<motion.div
           variants={fadein('right' , 0)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false , amount:0.7}} key={ele.id} className='col-lg-3 col-md-6 col-s-12'>
            <Link to={`/Product/${ele.id}`}>
            <img src={ele.images[0]} width={200} height={200}></img>
            <h3>{ele.title}</h3>
            <h4>{ele.sizes[0].price}EGP - {ele.sizes[2].price}EGP </h4>   
                </Link>
            </motion.div>
           ))}
          
          
          </div>
        
        
        </div>
        

    </div>
    </>
  )
}
