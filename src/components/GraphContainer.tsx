import  { useCallback, useEffect } from "react";
import "@xyflow/react/dist/style.css";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";

import CustomNode from "./CustomColorNode";
import { edges } from "../data/nodesData";
import { Node } from "../Interface/interfaces";
import { useDispatch } from "react-redux";
import { updateNode } from "../redux/nodesSlice";
import { selectNode } from "../redux/selectedNodeSlice";
import NodeCustomizationPanel from "./NodeCustomizationPanel";
import { useSelector } from "react-redux";

const initialEdges = edges
const GraphContainer = () => {
  const  nodesData: Node[] = useSelector((state: any) => state.nodesData.nodes)
  const [nodes, setNodes, onNodesChange] = useNodesState(nodesData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const dispatch = useDispatch();

  useEffect(() => {
    setNodes(nodesData);
  }, [nodesData, setNodes]);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  

  

  const onNodeClick = useCallback(( _event:any ,node: any) => {
   dispatch(selectNode({id: node.id}))
  }, []);
  const onNodeDragStop = (_event: any, node: Node) => {
    dispatch(updateNode({
      id: node.id,
      position: node.position
    }));
    dispatch(selectNode({id: node.id}))
  }


  return (
    <div className="w-screen h-screen" >
      <NodeCustomizationPanel />
      <ReactFlow
        onNodeDragStop={onNodeDragStop}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={{ customNode: CustomNode  }}
      >
      <Controls />
      <MiniMap />
      <Background />
      </ReactFlow>
    </div>
  );
};

export default GraphContainer;
