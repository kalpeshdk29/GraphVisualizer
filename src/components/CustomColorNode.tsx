import { Handle, Position } from "@xyflow/react";

interface NodeData {
  id: string;
  selected: boolean;
  data: { label: string; color: string; fontSize: string };
}

const CustomNode = ({ id, data, selected }: NodeData) => {
  return (
    <div
      id={id}
      className={`p-4 rounded-md text-white shadow-lg transition-all ease-in duration-100
      ${
        selected
          ? "border-2 border-gray-500 shadow-3xl"
          : "border-1 border-gray-800 shadow-lg"
      }`}
      style={{ backgroundColor: data.color }}
    >
      <span className="p-2 text-wrap" style={{ fontSize: data.fontSize }}>
        {data.label}
      </span>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default CustomNode;
