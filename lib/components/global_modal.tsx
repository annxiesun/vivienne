import { useGameActions, useGameState } from "../state/context";

const GlobalModal = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { showModal, thought, decision, modalType } = state;
  const { toggleModal } = actions;

  if (!showModal) return null;

  const parseTextWithLinks = (text) => {
    if (!text) return
    const regex = /<a\s+href="([^"]+)">([^<]+)<\/a>/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      parts.push(text.slice(lastIndex, match.index));
      parts.push(
        <a
          key={match.index}
          href={match[1]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {match[2]}
        </a>
      );
      lastIndex = regex.lastIndex;
    }

    parts.push(text.slice(lastIndex));

    return parts;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg max-w-sm shadow-xl opacity-90 backdrop-blur-md border border-gray-200">
        <div className="flex justify-center mb-4">
          <span className="text-3xl animate-pulse">💭</span>{" "}
        </div>
        {modalType === "thought" ? (
          <div className="relative">
            <p className="text-gray-600 text-sm italic text-center">
              {parseTextWithLinks(thought)}
            </p>
          </div>
        ) : (
          <>
            <div className="p-6 text-center">
              <h2 className="font-bold text-lg text-gray-700">
                {decision.question}
              </h2>
              <p className="text-gray-600 text-sm italic">{decision.info}</p>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700"
                  onClick={decision.onClick1}
                >
                  {decision.option1}
                </button>
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700"
                  onClick={decision.onClick2}
                >
                  {decision.option2}
                </button>
              </div>
            </div>
          </>
        )}

        <button
          className="absolute top-0 right-0 text-gray-700 rounded-full p-2"
          onClick={() => toggleModal(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default GlobalModal;
