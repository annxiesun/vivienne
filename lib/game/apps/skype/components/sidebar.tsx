import { useGameActions, useGameState } from "../../../../state/context";
import { contacts } from "../common/constants";

const Sidebar = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { selectedChat } = state.skype;
  const { selectChat, viewProfile } = actions.skype;

  return (
    <div className="w-1/4 h-full shadow-md bg-blue-50 border border-gray-300 flex flex-col">
      <div
        className="flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-blue-100 transition-all"
        onClick={() => {
          selectChat(null);
          viewProfile(true);
        }}
      >
        <div className="relative">
          <img
            src="https://i.pravatar.cc/150?img=5"
            className="w-12 h-12 rounded-full"
          />
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border border-white rounded-full"></div>
        </div>

        <div className="ml-4">
          <p className="font-bold text-gray-900">Vivienne</p>
          <p className="text-sm text-gray-500">
            💰 Calls & Pics Available! DM me for details 💖
          </p>
        </div>
      </div>

      <h2 className="text-md font-bold px-4 py-2 text-gray-700">RECENT</h2>
      {contacts.map((contact, index) => (
        <div
          key={index}
          className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-blue-200 transition-all duration-200 text-gray-700 ${
            selectedChat?.name === contact.name ? "bg-blue-200" : ""
          }`}
          onClick={() => {
            selectChat(contact);
            viewProfile(false);
          }}
        >
          <img src={contact.picture} className="w-12 h-12 rounded-full" />
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
