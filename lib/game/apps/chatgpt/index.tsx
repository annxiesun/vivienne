import { FC, useRef, useState } from "react";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chatWindow";
import { ChatGPTAccount, ChatGPTConversation, ChatGPTMessage, ChatGPTMessageResponseOptions, chatGPTAccounts } from "./common/constants";
import LoginScreen from "./components/LoginScreen";
import { useGameActions, useGameState } from "../../../state/context";

// change the 2nd email to the email found in mail app
const usersChatHistories: Record<string, ChatGPTAccount> = {
    "George1975@gmail.com" : chatGPTAccounts[0],
    "w3stw00d_doll@gmail.com": chatGPTAccounts[1],
}

const ChatGPTScreen: FC = () => {
    const state = useGameState();
    const actions = useGameActions();

    const { accounts, currentUser, conversations } = state.gpt;

    const { setAccounts, setCurrentUser, setConversations } = actions.gpt;

    const [selectedConversation, setSelectedConversation] = useState<ChatGPTConversation | null>(null);
    const [isAddingAccount, setIsAddingAccount] = useState(false);
    const [scrollPositions, setScrollPositions] = useState<Record<number, number>>({});

    const chatContainerRef = useRef<HTMLDivElement | null>(null);

    const saveScrollPosition = () => {
        if (selectedConversation && chatContainerRef.current) {
            setScrollPositions((prev) => ({
                ...prev,
                [selectedConversation.id]: chatContainerRef.current.scrollTop,
            }));
        }
    };

    const handleConversationSelect = (conversation: ChatGPTConversation) => {
        saveScrollPosition(); // Save scroll before switching
        setSelectedConversation(conversation);
    };

    const sendMessage = (selectedMessage: string, index: number) => {
        if (!selectedConversation) return;

        const newMessage: ChatGPTMessage = { sender: "user", text: selectedMessage, last: false };
        const botResponse: ChatGPTMessage = ChatGPTMessageResponseOptions[index];

        const updatesConversations = conversations.map((conv) =>
            conv.id === selectedConversation.id ? { ...conv, messages: [...conv.messages, newMessage, botResponse] } : conv
        );

        setConversations(updatesConversations)

        const updatedSelected = updatesConversations.find(
            (conv) => conv.id === selectedConversation.id
        );
        setSelectedConversation(updatedSelected || null);
        usersChatHistories[chatGPTAccounts[currentUser].email].conversations = updatesConversations
    };

    const handleAddAccount = (newUser: { email: string; password: string; }) => {
        if (chatGPTAccounts[1].email == newUser.email && chatGPTAccounts[1].password == newUser.password) {
            setAccounts([{email: chatGPTAccounts[0].email, password: chatGPTAccounts[0].password}, newUser]);
            setCurrentUser(1);
            setConversations(chatGPTAccounts[1].conversations);
            setIsAddingAccount(false);
            setSelectedConversation(null);
        } else {
            return false;
        }
        return true;
    }

    const handleSwitchAccount = (index: number) => {
        setCurrentUser(index);
        setConversations(usersChatHistories[chatGPTAccounts[index].email].conversations);
        setSelectedConversation(null);
    };

    const handleGoBackFromLogin = () => {
        setIsAddingAccount(false);
    }

    const handleOpenAddAccount = () => {
        setIsAddingAccount(true);
    };

    if (isAddingAccount) {
        return <LoginScreen onLogin={handleAddAccount} onCancel={handleGoBackFromLogin} existingAccounts={accounts} />;
    }

    return (
        <div className="flex h-screen overflow-y-scroll w-full bg-white text-black">
            <Sidebar
                conversations={conversations}
                selectedConversationId={selectedConversation?.id ?? null}
                onSelectConversation={handleConversationSelect}
                currentUser={chatGPTAccounts[currentUser].email}
                accounts={accounts}
                onSwitchAccount={handleSwitchAccount}
                onAddAccount={handleOpenAddAccount}
                />
            {selectedConversation ? (
                <ChatWindow
                    messages={selectedConversation.messages}
                    onSendMessage={sendMessage}
                    saveScrollPosition={saveScrollPosition}
                    scrollPositions={scrollPositions}
                    selectedConversationId={selectedConversation?.id ?? null}
                    chatContainerRef={chatContainerRef}
                    currentUser={chatGPTAccounts[currentUser].email}
                />
            ) : (
                <div className="flex items-center justify-center flex-1">
                    <p className="text-lg">Select a conversation to view messages</p>
                </div>
            )}
        </div>
    );
};

export default ChatGPTScreen;
