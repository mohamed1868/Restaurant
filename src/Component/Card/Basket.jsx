/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './Basket.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { delateAllData, deleteProductCard, updateNumFromCard } from '../Store/Card'
import TotalPrice from './TotalPrice'
import Swal from 'sweetalert2'

const {containerNumProduct  ,oneNum ,buttonDelete ,containerOneProductCard ,two ,masssageNotData ,delateall} = style




export default function Basket() {
      let dataAllBasket = useSelector((state)=>state.card.items)
      let dispatch = useDispatch()

   
      function Provide(el){

        let button = document.querySelector(`#numProduct${el.id+el.price}`)
        let currentNumber  = parseInt(button.textContent) 
        button.textContent =  currentNumber + 1 
        updateNumProductCard({id:el.id , num: currentNumber+1 , price:el.price} )
        
    } 
      function Reduce(el){
      let button = document.querySelector(`#numProduct${el.id+el.price}` )
      let currentNumber  = parseInt(button.textContent) 
      if(currentNumber > 1){
          button.textContent -= 1 
          updateNumProductCard({id:el.id , num: currentNumber-1 , price:el.price} )
      }

   
    }
    function updateNumProductCard(el){
      dispatch(updateNumFromCard(el))
      
    }
    function delateProductFromCard(el){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          dispatch(deleteProductCard(el))
        }
      });
     

    }
    function delateAllProducts(){
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          dispatch(delateAllData())
        }
      });
      
    }



  return (<>
  <div className={` container`}>
{dataAllBasket.length > 0 ? dataAllBasket.map((ele)=><div key={ele.id+ele.price} className={`row ${containerOneProductCard}`}>
      
        <img className='col-lg-2 col-sm-12'  src={ele.img}></img>
        <h3  className='col-lg-2 col-sm-12' >{ele.title}</h3>
        <h3 className='col-lg-2 col-sm-12'>{ele.price}EGP</h3>
        <h3 className='col-lg-2 col-sm-12'>{ele.size}</h3>
        <div className={`${containerNumProduct} col-lg-2 col-sm-12 row`}>
          <button className={`${oneNum} col-3`} onClick={()=>Provide({id:ele.id ,price:ele.price} )} >+</button>
          <h1 id={`numProduct${ele.id+ele.price}`}  className='col-6'>{ele.num}</h1>
          <button  className={`${oneNum } ${two} col-3`} onClick={()=>Reduce({id:ele.id ,price:ele.price})} >-</button>
        </div>
        <button className={`${buttonDelete} col-lg-2 col-sm-12`} onClick={()=>delateProductFromCard({id:ele.id , price:ele.price})}  >Delate</button>
    </div>
    
  )  : <div>
    <h1 className={`${masssageNotData}`}>There are no products in the cart. Please add products</h1>
    </div>}
    {dataAllBasket.length > 0 ? <button onClick={delateAllProducts} className={`${delateall}`}>Delate All</button> : ''}
    {dataAllBasket.length > 0 ? <div>
      <TotalPrice />
    </div> : ''}

  </div>
  
  
  </>
    
  )
}
