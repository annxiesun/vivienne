import { Phone, PhoneOutgoing, Video } from "lucide-react";
import { useGameActions, useGameState } from "../../../../state/context";
import ThoughtButton from "../../../../components/thought_button";
import { useEffect, useRef } from "react";

const ChatWindow = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { selectedChat } = state.skype;
  const { markChatAsViewed } = actions.skype;

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the top when the selected chat changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  }, [selectedChat]);

  if (!selectedChat) {
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
          <Video className="text-blue-300" />
          <Phone className="text-blue-300" />
        </div>
      </div>
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-scroll skype-scrollbar pr-2 h-full"
      >
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
              className={`max-w-full ${
                msg.sender === "Me"
                  ? "text-right ml-10 mr-12"
                  : "text-left mr-12"
              }`}
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
                      className="w-40 h-40 rounded-md shadow-md"
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
                  {msg.evidence && (
                    <ThoughtButton
                      thought={msg.evidence}
                      className="h-6 w-6"
                      onClick={() => markChatAsViewed(selectedChat.name)}
                    />
                  )}
                </>
              )}
            </div>

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
