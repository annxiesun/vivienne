import { FileText } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";
import { useState } from "react";

const PublicNotes = () => {
  const state = useGameState();
  const actions = useGameActions();
  const [hasTriggeredSceneChange, setHasTriggeredSceneChange] = useState(false);

  const { scene } = state;
  const { setScene } = actions;

  const { selectNote } = actions.notes;
  const { notes, selectedNote } = state.notes;

  const publicNotes = notes.filter((note) => note.folder === "public");

  const handleNoteClick = (note) => {
    selectNote(note);
    if (
      publicNotes[publicNotes.length - 1].title === note.title &&
      !hasTriggeredSceneChange
    ) {
      setScene(scene + 1);
      setHasTriggeredSceneChange(true);
    }
  };

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
            onClick={() => {
              selectNote(note);
              handleNoteClick(note);
            }}
          >
            <FileText size={20} />
            <p className="text-sm truncate">{note.title}</p>
          </div>
        ))}
    </>
  );
};

export default PublicNotes;
