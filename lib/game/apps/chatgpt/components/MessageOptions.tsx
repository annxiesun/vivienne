import { FC } from "react";
import { ChatGPTMessageOptions } from "../common/constants";

interface MessageOptionsProps {
    onSelectOption: (option: string, index: number) => void;
}

const MessageOptions: FC<MessageOptionsProps> = ({ onSelectOption }) => {
    return (
        <div className="grid grid-cols-2 gap-2 mt-4">
            {ChatGPTMessageOptions.map((option, index) => (
                <button
                    key={index}
                    className="w-full px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition text-center"
                    onClick={() => onSelectOption(option, index)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default MessageOptions;
