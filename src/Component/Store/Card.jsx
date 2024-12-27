import { createSlice } from '@reduxjs/toolkit'



const initialState= {
  items:[]
}


export const counterSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    
    addToProducts: (state ,action ) => {
       let getProduct = action.payload
       let x = state.items.find((el)=>el.id === getProduct.data.id && el.size === getProduct.sizes.size)
       if(x){
         x.num += getProduct.num
       }else{
         state.items.push({id:getProduct.data.id ,
             title:getProduct.data.title ,
              img:getProduct.data.images[0] ,
              num:getProduct.num,
              size:getProduct.sizes.size,
            price:getProduct.sizes.price})

       }

    },

    updateNumFromCard:(state ,action)=>{
      let getProduct = action.payload
      let x = state.items.find((el)=>el.id === getProduct.id && el.price === getProduct.price)
      if(x){
        x.num = getProduct.num
      }
    },
    deleteProductCard:(state , action)=>{
      let getProduct = action.payload
      state.items = state.items.filter((el)=> el.price != getProduct.price || el.id != getProduct.id  )

    },
    delateAllData:(state)=>{
    state.items = []
    }


  },
})

// Action creators are generated for each case reducer function
export const { addToProducts ,updateNumFromCard ,deleteProductCard ,delateAllData } = counterSlice.actions

export default counterSlice.reducer