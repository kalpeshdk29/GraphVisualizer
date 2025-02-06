interface FontSizeControllerProps {
  id: string;
  fontSize: string;
  updateNodeData: (id: string, data: { fontSize: string }) => void;
}

const FontSizeController: React.FC<FontSizeControllerProps> = ({
  id,
  fontSize,
  updateNodeData,
}) => {
  const fontSizes: string[] = ["12px", "14px", "16px", "18px", "20px", "24px"];

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Font Size:
        </label>
        <select
          className="w-full p-1 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={fontSize}
          onChange={(e) => updateNodeData(id, { fontSize: e.target.value })}
        >
          {fontSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center">
        {/* Preview Section */}
        <div className="p-1 bg-gray-50 border border-gray-300 rounded-md shadow-inner">
          <p
            className="text-gray-800 text-start"
            style={{
              fontSize: fontSize,
            }}
          >
            Preview Text
          </p>
        </div>
      </div>
    </>
  );
};

export default FontSizeController;