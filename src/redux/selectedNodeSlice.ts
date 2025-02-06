import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const selectedNodesSlice = createSlice({
    name:"selectedNode",
    initialState,
    reducers:{
        selectNode: (_state, action)=>  action.payload.id,
        clearSelectedNode: () => null
    }
})

export const {selectNode, clearSelectedNode} = selectedNodesSlice.actions
export default selectedNodesSlice.reducer

