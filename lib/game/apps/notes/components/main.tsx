import ThoughtButton from "../../../../components/thought_button";
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
          {selectedNote.folder == "private" && (
            <div className="flex justify-center">
              <ThoughtButton
                thought="She was struggling with so much—rejection, hatred, and never being seen for who she really was. Her 16th birthday should have been a celebration, but instead, it felt like the end. It’s so sad she had to go through all of that."
                className="h-8 w-8"
              />
            </div>
          )}
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
