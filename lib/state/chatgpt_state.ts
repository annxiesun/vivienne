import { useState } from "react";
import { chatGPTAccounts, ChatGPTConversation } from "../game/apps/chatgpt/common/constants";

export type ChatGPTState = {
    accounts: { email: string; password: string; }[];
    currentUser: number;
    conversations: ChatGPTConversation[];
}

export type ChatGPTActions = {
    setAccounts: (accounts: { email: string; password: string; }[]) => void;
    setCurrentUser: (user: number) => void;
    setConversations: (conversations: ChatGPTConversation[]) => void;
}

export const useChatGPTContext = () => {
    const [accounts, setAccounts] = useState<{ email: string; password: string; }[]>([{ email: chatGPTAccounts[0].email, password: chatGPTAccounts[0].password}]);
    const [currentUser, setCurrentUser] = useState<number>(0);
    const [conversations, setConversations] = useState<ChatGPTConversation[]>(chatGPTAccounts[0].conversations);

    return {
        chatgpt_state: {
            accounts,
            currentUser,
            conversations
        },
        chatgpt_actions: {
            setAccounts: (accounts: { email: string; password: string; }[]) =>
                setAccounts(accounts),
            setCurrentUser: (user: number) => 
                setCurrentUser(user),
            setConversations: (conversations: ChatGPTConversation[]) =>
                setConversations(conversations)
        },
    };
};
