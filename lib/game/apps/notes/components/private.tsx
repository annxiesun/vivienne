import { FileText } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";

const PrivateNotes = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { setPassword, submitPassword, selectNote, setFoundNote } = actions.notes;
  const { password, isPasswordCorrect, notes, selectedNote } = state.notes;

  return (
    <>
      <h3 className="text-lg font-semibold px-6 py-2 text-gray-700">
        Private Notes
      </h3>
      {!isPasswordCorrect && (
        <div className="px-6 py-2">
          <input
            type="password"
            placeholder="Enter Password"
            className="p-2 border rounded w-full text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
            onClick={submitPassword}
          >
            Unlock Private Notes
          </button>
        </div>
      )}
      {isPasswordCorrect && (
        <>
          {notes
            .filter((note) => note.folder === "private")
            .map((note, index) => (
              <div
                key={index}
                className={`px-6 py-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-all text-gray-700 rounded-lg ${
                  selectedNote?.title === note.title ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setFoundNote(true);
                  selectNote(note);
                }}
              >
                <FileText size={20} />
                <p className="text-sm truncate">{note.title}</p>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default PrivateNotes;
