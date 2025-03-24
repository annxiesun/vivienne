import { useGameActions } from "../../../../state/context";
import PrivateNotes from "./private";
import PublicNotes from "./public";

const Sidebar = () => {
  const actions = useGameActions();

  return (
    <div className="w-1/4 h-full shadow-lg bg-white border-r border-gray-300 flex flex-col rounded-lg">
      <h2 className="text-2xl font-semibold px-6 py-4 text-gray-700">Notes</h2>

      <div className="flex-1 overflow-y-auto">
        <PrivateNotes />
        <PublicNotes />
      </div>
    </div>
  );
};

export default Sidebar;
