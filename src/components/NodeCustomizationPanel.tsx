import { useDispatch, useSelector } from "react-redux";
import { Node } from "../Interface/interfaces";
import { redoNodeState, undoNodeState, updateNode } from "../redux/nodesSlice";
import { useEffect, useState } from "react";
import { Undo, Redo } from "lucide-react";
import FontSizeController from "./FontSizeController";
import ColorSelector from "./ColorSelector";

const NodeCustomizationPanel = () => {
  const dispatch = useDispatch();
  const nodesData = useSelector((state: any) => state.nodesData);
  const selectedNodeId = useSelector((state: any) => state.selectedNode);
  const selectedNode = nodesData.nodes?.find(
    (node: Node) => node.id === selectedNodeId
  );
  const [color, setColor] = useState(selectedNode?.data.color || "#000000");
  const [debouncedColor, setDebouncedColor] = useState(color);

  //Update nodes state
  const updateNodeData = (id: string, newData: any) => {
    dispatch(updateNode({ id: id, data: newData }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedColor(color);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [color]);

  // Apply debounced color update
  useEffect(() => {
    if (selectedNode)
      updateNodeData(selectedNode.id, { color: debouncedColor });
  }, [debouncedColor]);

  if (!selectedNode) return null;

  return (
    <>
      <div className="fixed z-20 top-12 right-12 w-40 p-4 bg-white rounded-lg shadow-xl border-2 border-gray-300">
        <div className="flex justify-between mb-4">
          <button onClick={() => dispatch(undoNodeState())}>
            <Undo />
          </button>
          <button onClick={() => dispatch(redoNodeState())}>
            <Redo />
          </button>
        </div>
        <ColorSelector color={selectedNode?.data.color} setColor={setColor} />
        <FontSizeController
          id={selectedNode.id}
          fontSize={selectedNode.data.fontSize}
          updateNodeData={updateNodeData}
        />
      </div>
    </>
  );
};

export default NodeCustomizationPanel;
