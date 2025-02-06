import React from "react";

interface ColorSelectorProps {
  color: string;
  setColor: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({color , setColor}) => {
  return (
    <div className="w-full p-2">
      <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Choose Color:
          </label>
          <input
            type="color"
            className="w-full h-12 cursor-pointer border border-gray-300  rounded-md shadow-sm"
            value={color || "#000000"}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
    </div>
  );
};

export default ColorSelector;
