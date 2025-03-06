import { FileText, PlusCircle } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";
import HintButton from "./hint_button";
import PrivateNotes from "./private";
import PublicNotes from "./public";
import HintNotes from "./hints";

const Sidebar = () => {
  const actions = useGameActions();
  const { createHint } = actions.notes;

  return (
    <div className="w-1/4 h-full shadow-lg bg-white border-r border-gray-300 flex flex-col rounded-lg">
      <h2 className="text-2xl font-semibold px-6 py-4 text-gray-700">Notes</h2>

      <HintButton onClick={createHint} />

      <div className="flex-1 overflow-y-auto">
        <PrivateNotes />
        <PublicNotes />
        <HintNotes />
      </div>
    </div>
  );
};

export default Sidebar;
