import { configureStore } from '@reduxjs/toolkit'
import nodesReducers from './nodesSlice'
import selectedNodeReducer from './selectedNodeSlice'

const store= configureStore({
    reducer:{
        nodesData: nodesReducers,
        selectedNode: selectedNodeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>   
export type AppDispatch = typeof store.dispatch
export default store