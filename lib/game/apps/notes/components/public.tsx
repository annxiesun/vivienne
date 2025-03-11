import { FileText } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";

const PublicNotes = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { selectNote } = actions.notes;
  const { notes, selectedNote } = state.notes;

  return (
    <>
      <h3 className="text-lg font-semibold px-6 py-3 text-gray-700">
        Public Notes
      </h3>
      {notes
        .filter((note) => note.folder === "public")
        .map((note, index) => (
          <div
            key={index}
            className={`px-6 py-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-all text-gray-700 rounded-lg ${
              selectedNote?.title === note.title ? "bg-gray-200" : ""
            }`}
            onClick={() => selectNote(note)}
          >
            <FileText size={20} />
            <p className="text-sm truncate">{note.title}</p>
          </div>
        ))}
    </>
  );
};

export default PublicNotes;
