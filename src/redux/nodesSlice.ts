import { createSlice } from "@reduxjs/toolkit";
import { nodes } from "../data/nodesData";
import { Node } from "../Interface/interfaces";

interface NodeState {
  nodes: Node[];
  currentNodeState: Node | null;
  pastNodeStates: Node[];
  futureNodeStates: Node[];
}

const initialState: NodeState = {
  nodes: nodes,
  currentNodeState: null,
  pastNodeStates: [],
  futureNodeStates: [],
};
const nodeSlice = createSlice({
  name: "nodesData",
  initialState,
  reducers: {

    /**
     * Updates the specified node in the state with the given payload.
     * If the current node state is null, it will be set to the initial state of the node.
     * The current node state is then pushed to the past node states stack.
     * The payload is then used to update the state of the node in the state's nodes array.
     * @param state - The current state containing the list of nodes.
     * @param action - The action object containing the node's id and the new data and/or position.
     */
    updateNode: (state, action) => {
      const { id } = action.payload;
      if (state.currentNodeState === null) {
        const initialNodeState = state.nodes?.find(
          (node: Node) => node.id === id
        );
        if (initialNodeState)
          state.pastNodeStates.push(
            JSON.parse(JSON.stringify(initialNodeState))
          );
      } else {
        state.pastNodeStates.push(state.currentNodeState);
      }
      state.currentNodeState = action.payload;
      updateNodeHelper(state, action);
    },

    /**
     * Undoes the current node state and moves it to the future node states stack.
     * If the past node states stack is empty, does nothing.
     * If the current node state is null, does nothing.
     * Otherwise, moves the current node state to the future node states stack
     * and sets the current node state to the previous node in the past node states stack.
     * If the popped node state is null or undefined, sets the current node state to null.
     */
    undoNodeState: (state) => {
      if (state.pastNodeStates.length > 0 &&
         state.currentNodeState !== null) 
         {
        const previousNode = state.pastNodeStates.pop();
        if (previousNode !== undefined && previousNode !== null) {
          state.futureNodeStates.push(state.currentNodeState);
          state.currentNodeState = previousNode;
          updateNodeHelper(state, { payload: previousNode });
        } else {
          state.currentNodeState = null;
        }
      }
    },


    /**
     * Redoes the next node state in the future node state stack.
     * If the stack is empty, does nothing.
     * If the current node state is null, sets it to the next node in the stack.
     * Otherwise, moves the current node state to the past node state stack
     * and sets the current node state to the next node in the future node state stack.
     * If the popped node state is null or undefined, sets the current node state to null.
     */
    redoNodeState: (state) => {
      if (
        state.futureNodeStates.length > 0 &&
        state.currentNodeState !== null
      ) {
        const nextNode = state.futureNodeStates.pop();
        if (nextNode !== undefined && nextNode !== null) {
          state.pastNodeStates.push(state.currentNodeState);
          state.currentNodeState = nextNode;
          updateNodeHelper(state, { payload: nextNode });
        } else {
          state.currentNodeState = null;
        }
      }
    }
  },
});

/**
 * Updates the specified node's position and/or data within the state.
 * 
 * @param state - The current state containing the list of nodes.
 * @param action - The action object containing the node's id, and the new data and/or position.
 * 
 * Destructures the action payload to extract the node id, new data, and position.
 * Finds the node in the state's nodes array that matches the provided id.
 * If the node is found, updates its position and/or data fields with the provided values.
 */

const updateNodeHelper = (state: any, action: any) => {
  const { id, data, position } = action.payload;
  const nodeToUpdate = state.nodes?.find((node: Node) => node.id === id);
  if (nodeToUpdate) {
    if (position) nodeToUpdate.position = position;
    if (data) nodeToUpdate.data = { ...nodeToUpdate.data, ...data };
  }
};

export const { updateNode, undoNodeState, redoNodeState } = nodeSlice.actions;
export default nodeSlice.reducer;
