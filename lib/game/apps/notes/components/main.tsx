import { useGameState } from "../../../../state/context";

const Main = () => {
  const state = useGameState();
  const { selectedNote } = state.notes;

  const renderContentWithNewlines = (content) => {
    return content.split("\n").map((line, index) => (
      <p key={index} className="text-lg">
        {line}
      </p>
    ));
  };

  return (
    <div className="w-3/4 px-8 py-6 h-full">
      {selectedNote ? (
        <div className="flex flex-col h-full text-gray-700">
          <h2 className="text-3xl font-semibold border-b pb-2 mb-4">
            {selectedNote.title}
          </h2>
          <p className="text-gray-500 mb-2">{selectedNote.date}</p>
          {renderContentWithNewlines(selectedNote.content)}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          Select a note to view or create a new one
        </div>
      )}
    </div>
  );
};

export default Main;
