
import { configureStore , combineReducers} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from 'redux-persist/lib/storage' 
import card from './Card' 


const persistConfig = {
    key: 'dataProduct',
    storage,
    whitelist:['items']
  }
  const rootReducer = combineReducers({
  
    card : persistReducer(persistConfig , card ) ,
  })
  
 

export const store = configureStore({
  

  reducer : rootReducer,
  middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const persistsStore = persistStore(store)

export {persistsStore}