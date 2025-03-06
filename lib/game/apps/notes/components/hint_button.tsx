import { PlusCircle } from "lucide-react";

const HintButton = ({ onClick }) => (
  <button
    className="flex items-center gap-3 px-4 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition-colors mx-4 mb-4"
    onClick={onClick}
  >
    <PlusCircle size={18} /> Get Hint
  </button>
);

export default HintButton;
