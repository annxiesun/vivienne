import { Phone, PhoneOutgoing, Video } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";
import EvidenceButton from "../../../../components/evidence_button";

const ChatWindow = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { selectedChat, viewingProfile } = state.skype;
  const { setModalMessage, toggleEvidenceModal, toggleImageModal } =
    actions.skype;

  console.log(viewingProfile);
  if (!viewingProfile && !selectedChat) {
    return (
      <p className="text-center text-gray-500">Select a contact to chat.</p>
    );
  }

  return (
    <div className="flex flex-col h-full text-gray-700">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={selectedChat.picture}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <h2 className="text-lg font-bold text-gray-700">
            {selectedChat.name}
          </h2>
        </div>

        <div className="flex gap-2">
          <Video className="text-blue-200 hover:text-blue-500 transition-all" />
          <Phone className="text-blue-200 hover:text-blue-500 transition-all" />
        </div>
      </div>

      {/* Scrollable message area */}
      <div className="flex-1 overflow-y-scroll skype-scrollbar pr-2 h-full">
        {selectedChat.messages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              msg.blocked
                ? "justify-center"
                : msg.sender === "Me"
                ? "justify-end"
                : "justify-start"
            } relative`}
          >
            {msg.sender !== "Me" && !msg.callDuration && (
              <img
                src={selectedChat.picture}
                className="w-8 h-8 mr-2 rounded-full"
              />
            )}
            <div
              className={`${
                msg.sender === "Me"
                  ? "text-right ml-10 mr-12"
                  : "text-left mr-12"
              } max-w-full`}
            >
              {msg.blocked ? (
                <div className="flex items-center w-full h-full">
                  <p className="text-gray-400 italic text-center">{msg.text}</p>
                </div>
              ) : msg.callDuration ? (
                <>
                  <div className="flex items-center justify-center gap-2">
                    {msg.video ? (
                      <Video className="text-blue-200" />
                    ) : (
                      <PhoneOutgoing className="text-blue-200" />
                    )}
                    <p className="text-center text-gray-500 text-sm my-2">
                      <b>{msg.video && "Video "} Call</b> {msg.callDuration}
                    </p>
                  </div>
                </>
              ) : msg.emoji ? (
                <p className="text-4xl">{msg.emoji}</p>
              ) : msg.images && msg.images.length > 0 ? (
                <div className="flex">
                  {msg.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-40 h-40 rounded-md shadow-md cursor-pointer hover:opacity-75"
                      onClick={() => {
                        setModalMessage(img);
                        toggleImageModal(true);
                      }} // Click to enlarge image
                    />
                  ))}
                </div>
              ) : (
                <>
                  <p
                    className={`inline-block p-2 rounded-lg text-left ${
                      msg.sender === "Me" ? "bg-blue-100" : "bg-blue-300"
                    }`}
                  >
                    {msg.text}
                  </p>

                  {msg.evidence && <EvidenceButton evidence={msg.evidence} />}
                </>
              )}
            </div>

            {/* Timestamp Container */}
            <p className="absolute right-0 text-xs text-gray-500 mr-2">
              {msg.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
