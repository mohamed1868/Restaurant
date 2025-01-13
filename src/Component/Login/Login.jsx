/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import style from './Login.module.css'
import myImage from './iv6yNy7oBqQ.png';
import Joi from 'joi'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { motion } from 'motion/react';
import { fadein } from '../../Test';
import { instanceAxiosAuthorization } from '../../Api/Api';

const {containerRegister,formRegister ,ContainerLogin} = style

export default function Login() {
    const { getJwt } = useOutletContext();
    const navigate = useNavigate()
    let [error ,seterror] = useState('')
    let [joiget , setjoi] =useState([])
    let [loding , setloding] =useState(false)
    let [Data , setdata] = useState({
        email : '' ,
        Password : '',

    })
    function updatedate(ele){
      let x = {...Data}
      x[ele.target.name] = ele.target.value
      setdata(x)
    }
    async function submit(ele){
        ele.preventDefault()
        let x = style();
        setloding(true)
    if (x.error) {
        setjoi(x.error.details);
        setloding(false)
        
    } else {
        try{
        let x =  await instanceAxiosAuthorization.post('Login' , Data)
         navigate("/Home")
         window.localStorage.userToken= x.data.jwt
         getJwt()
         setloding(false)
        }catch(error){
            setloding(false)
          seterror('This data is reserved for others')
        }
        }

    }
    function style(){
        let reg = Joi.object({
          email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }) ,
          Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
    
        return reg.validate(Data , {abortEarly: false})
      }
      function goLogin(){
        navigate(`/Register`)
      }
    
  return (<>
    {error ?<div className="alert alert-danger" role="alert">{error}</div> : ''}
 
 { joiget.map((ele)=> <div className="alert alert-danger" role="alert">{ele.message}</div>)}
  <motion.div variants={fadein('left' , 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false , amount:0.7}}
               className={ `${containerRegister} container row`} >

    <div className='col-lg-6 col-sm-12'>
        <img width={400} height={400} src={myImage}></img>
    </div>
    <div className={`${ContainerLogin} col-lg-6 col-sm-12`}>
        <h1>Create an account</h1>
        <h4>Enter your details below</h4>
    <form className={`${formRegister}`} onSubmit={submit}>
   <div className="mb-3">
    <input placeholder='Email'  onChange={updatedate} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input placeholder='Password'  onChange={updatedate} name='Password' type="password" className="form-control" id="Password"/>
  </div>



  <button type="submit" >{loding?<li className='fa fa-spinner fa-spin'/>: "Login"} </button>
  <h6>Create account? <span onClick={goLogin}>Register</span></h6>
</form>

    </div>
  </motion.div>
  
  </>
    
  )
}
