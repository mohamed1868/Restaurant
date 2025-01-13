import { lazy } from "react";

const Lazy = {
  auth : {
    loding :   lazy(()=> import('../Component/Login/Login')) ,
    register : lazy(()=> import('../Component/Register/Register'))
  },
  puplic : {
    Home : lazy(()=> import('../Component/Home/Home')) ,
    Product : lazy(()=> import('../Component/Product/Product')) ,
    Products : lazy(()=> import('../Component/Products/Products')) ,
    Search : lazy(()=> import('../Component/Search/Search')) ,
    Basket : lazy(()=> import('../Component/Card/Basket')) ,
    Contact : lazy(()=> import('../Component/Contact/Contact')) 
  }

}

export default Lazy
