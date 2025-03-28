import { FC } from "react";
import { ChatGPTMessage } from "../common/constants";
import ThoughtButton from "../../../../components/thought_button";
import {useGameActions} from "../../../../state/context"

interface MessageBubbleProps {
    message: ChatGPTMessage;
}

const MessageBubble: FC<MessageBubbleProps> = ({ message }) => {
    const actions = useGameActions();
    const next_scene = () => actions.setScene(4);
    return (
        <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={'flex flex-col'}>
                <p
                    className={`p-2 rounded-md my-2 max-w-xs ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                        }`}
                >
                    {message.text}
                </p>

                {message.evidence && 
                    <ThoughtButton
                    thought={message.evidence}
                    className="h-6 w-6"
                    onClick={() => { message.last ? 
                        next_scene() : 
                        null 
                    }}
                    />
                }
            </div>
        </div>
    );
};

export default MessageBubble;
