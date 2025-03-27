import { FC, useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import MessageOptions from "./MessageOptions";
import { chatGPTAccounts, ChatGPTMessage } from "../common/constants";

interface ChatWindowProps {
    messages: ChatGPTMessage[];
    onSendMessage: (message: string, index: number) => void;
    saveScrollPosition: () => void;
    scrollPositions: Record<number, number>;
    selectedConversationId: number | null;
    chatContainerRef: React.RefObject<HTMLDivElement>;
    currentUser: string;
}

const ChatWindow: FC<ChatWindowProps> = ({
    messages,
    onSendMessage,
    saveScrollPosition,
    scrollPositions,
    selectedConversationId,
    chatContainerRef,
    currentUser
}) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (selectedConversationId && chatContainerRef.current) {
            chatContainerRef.current.scrollTop = scrollPositions[selectedConversationId] || 0;
        }
    }, [selectedConversationId]);

    return (
        <div className="flex-1 flex flex-col p-6">
            <h2 className="text-2xl font-bold">Conversation</h2>

            {/* Scrollable Chat Area */}
            <div
                ref={chatContainerRef}
                className="flex-1 mt-4 bg-gray-100 p-4 rounded-md overflow-y-auto max-h-[550px]"
                onScroll={saveScrollPosition}
            >
                {messages.map((msg, index) => (
                    <MessageBubble key={index} message={msg} />
                ))}

                { currentUser == chatGPTAccounts[1].email && 
                    <MessageOptions onSelectOption={onSendMessage} />
                }
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ChatWindow;
