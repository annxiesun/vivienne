import { FC, useState, useRef, useEffect } from "react";
import { ChatGPTConversation, ChatGPTMessage, ChatGPTMessageOptions, ChatGPTMessageResponseOptions, initialConversations } from "../../constants";

const ChatGPTScreen: FC = () => {
    const [conversations, setConversations] = useState<ChatGPTConversation[]>(initialConversations);
    const [selectedConversation, setSelectedConversation] = useState<ChatGPTConversation | null>(null);
    const [scrollPositions, setScrollPositions] = useState<Record<number, number>>({}); // Stores scroll positions
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const messageSelectedRef = useRef<HTMLDivElement | null>(null);

    // Save scroll position before switching conversations
    const saveScrollPosition = () => {
        if (selectedConversation && messagesEndRef.current) {
            setScrollPositions((prev) => ({
                ...prev,
                [selectedConversation.id]: messagesEndRef.current.scrollTop, // Store only for the active conversation
            }));
        }
    };

    // Switch conversation and restore previous scroll position
    const handleConversationSelect = (conversation: ChatGPTConversation) => {
        saveScrollPosition(); // Save current scroll position
        setSelectedConversation(conversation); // Switch conversation
    };

    useEffect(() => {
        if (selectedConversation && messagesEndRef.current) {
            messagesEndRef.current.scrollTop = scrollPositions[selectedConversation.id] || 0;
        }
    }, [selectedConversation]);

    const sendMessage = (selectedMessage: string, index: number) => {
        if (!selectedConversation) return;

        const newMessage: ChatGPTMessage = { sender: "user", text: selectedMessage };
        const botResponse: ChatGPTMessage = { sender: "bot", text: ChatGPTMessageResponseOptions[index] };

        const updatedConversations = conversations.map((conv) =>
            conv.id === selectedConversation.id
                ? { ...conv, messages: [...conv.messages, newMessage, botResponse] }
                : conv
        );

        setConversations(updatedConversations);
        setSelectedConversation(updatedConversations.find((conv) => conv.id === selectedConversation.id) || null);
    };
    
    return (
        <div className="flex h-screen w-full bg-white text-black">
                {/* Sidebar */}
                <div className="w-1/4 bg-gray-200 p-4">
                    <h2 className="text-xl font-bold mb-4">Conversations</h2>
                    <ul>
                        {conversations.map((conv) => (
                            <li
                                key={conv.id}
                                className={`p-2 cursor-pointer rounded-md transition ${selectedConversation?.id === conv.id ? "bg-gray-300" : "hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedConversation(conv)}
                            >
                                {conv.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chat Window */}
                <div className="flex-1 flex flex-col p-6">
                    {selectedConversation ? (
                        <>
                            <h2 className="text-2xl font-bold">{selectedConversation.title}</h2>

                            {/* Scrollable Chat Area */}
                            <div
                            ref={messagesEndRef} 
                            className="flex-1 mt-4 bg-gray-100 p-4 rounded-md overflow-y-auto max-h-[500px]"
                            onScroll={saveScrollPosition}>
                                {selectedConversation.messages.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                        <p
                                            className={`p-2 rounded-md my-2 max-w-xs ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                                                }`}
                                        >
                                            {msg.text}
                                        </p>
                                    </div>
                                ))}
                                {/* Message Options (Clickable Bubbles) */}
                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    {ChatGPTMessageOptions.map((option, index) => (
                                        <button
                                            key={index}
                                            className="w-full px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition text-center"
                                            onClick={() => sendMessage(option, index)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                <div ref={messageSelectedRef} />
                            </div>
                        </>
                    ) : (
                        <div className="flex items-center justify-center flex-1">
                            <p className="text-lg">Select a conversation to view messages</p>
                        </div>
                    )}
                </div>
        </div>
    );
};

export default ChatGPTScreen;
