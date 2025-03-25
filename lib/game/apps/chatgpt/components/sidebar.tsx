import { FC, useState } from "react";
import { ChatGPTConversation } from "../common/constants";

interface SidebarProps {
    conversations: ChatGPTConversation[];
    selectedConversationId: number | null;
    onSelectConversation: (conversation: ChatGPTConversation) => void;
    currentUser: string;
    accounts: { email: string; password: string }[];
    onSwitchAccount: (index: number) => void;
    onAddAccount: () => void;
}

const Sidebar: FC<SidebarProps> = ({ conversations, selectedConversationId, onSelectConversation, currentUser, accounts, onSwitchAccount, onAddAccount }) => {
    const [ showMenu, setShowMenu ] = useState(false);
    return (
        <div className="w-1/4 min-w-[200px] max-w-[300px] bg-gray-200 p-4 flex flex-col h-screen relative">
            {/* Conversations List (takes up remaining space above the account bar) */}
            <div className="flex-grow overflow-auto">
                <h2 className="text-xl font-bold mb-4">Conversations</h2>
                <ul>
                    {conversations.map((conv) => (
                        <li
                            key={conv.id}
                            className={`p-2 cursor-pointer rounded-md transition ${selectedConversationId === conv.id ? "bg-gray-300" : "hover:bg-gray-300"
                                }`}
                            onClick={() => onSelectConversation(conv)}
                        >
                            {conv.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Account Bar (Positioned at the bottom using percentages) */}
            <div className="relative w-full h-[10%] bg-gray-300 flex items-center justify-center cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
            >
                <button className="w-full h-full text-center hover:bg-gray-400">
                    {currentUser} ▲
                </button>

                {showMenu && (
                    <div className="absolute bottom-[110%] left-0 w-full bg-white shadow-lg rounded-md">
                        {accounts.map((account, index) => (
                            <button key={account.email} className="w-full p-2 hover:bg-gray-200 text-left" onClick={() => onSwitchAccount(index)}>
                                {account.email}
                            </button>
                        ))}
                        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={onAddAccount}>+ Add Account</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
