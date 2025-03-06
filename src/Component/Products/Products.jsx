/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './Products.module.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { motion } from 'motion/react'
import { fadein } from '../../Test'
import { instanceAxios } from '../../Api/Api'
import { Data } from '../../Data'


const {ContainerProducts} = style

export default function Products() {

    let Params = useParams()
    let [dataProduct , setDataProduct] = useState([])
    let [errorMassage , setErrorMassage] = useState('')
   console.log(Params.Categories)

    // async function getDataProducts() {
    //     try{
    //          let api = await instanceAxios.get(`FoodItems?categoryName=${Params.Categories}`)
    //          setDataProduct(api.data)
             
    //     }catch(err){
    //         setErrorMassage('No Date Found')
    //     }
    // }
    useState(()=>[
        // getDataProducts(),
        setDataProduct(Data.FoodItems.filter((el)=>el.categoryName == Params.Categories))
    ],{})
   
    
  return (<>
  <motion.div
            variants={fadein('left' , 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false , amount:0.7}} className={`${ContainerProducts} row`} >
     {dataProduct.length > 0 ? dataProduct.map((ele)=>
        
        <div key={ele.id} className='col-lg-3 col-md-6 col-s-12 '>
            <Link to={`/Product/${ele.id}`}>
            <img src={ele.images[0]} width={200} height={200}></img>
            <h3>{ele.title}</h3>
            <h4>{ele.sizes[0].price}EGP - {ele.sizes[2].price}EGP </h4>   
                </Link>
            </div>
     )  : ''}
  </motion.div>

  
  </>
    
  )
}
