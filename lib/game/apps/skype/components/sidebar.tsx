import { useGameActions, useGameState } from "../../../../state/context";
import { contacts } from "../common/constants";
const Sidebar = () => {
  const state = useGameState();
  const actions = useGameActions();

  const { selectedChat, viewedChats, viewedEvidence } = state.skype;
  const { selectChat, viewProfile, markChatAsViewed } = actions.skype;

  const isProfileUnlocked =
    viewedChats.includes(contacts[0].name) &&
    viewedEvidence.includes(contacts[0].name);

  return (
    <div className="w-1/4 h-full shadow-md bg-blue-50 border border-gray-300 flex flex-col">
      <div
        className={`flex items-center p-4 border-b border-gray-300 lg:flex-row md:flex-col ${
          isProfileUnlocked
            ? "hover:bg-blue-200 cursor-pointer transition-all "
            : "opacity-50"
        }`}
        onClick={() => {
          if (!isProfileUnlocked) return;
          selectChat(null);
          markChatAsViewed("profile");
          viewProfile(true);
        }}
      >
        <div className="relative">
          <img
            src="/assets/skype/vivi.png"
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
      {contacts.map((contact, index) => {
        const isUnlocked =
          index === 0 ||
          (viewedChats.includes(contacts[index - 1].name) &&
            viewedEvidence.includes(contacts[index - 1].name));

        if (contact.name === "profile") return;

        return (
          <div
            key={index}
            className={`px-4 py-2 flex items-center gap-2 transition-all duration-200 text-gray-700 ${
              selectedChat?.name === contact.name
                ? "bg-blue-200"
                : isUnlocked
                ? "hover:bg-blue-200 cursor-pointer"
                : "opacity-50"
            }`}
            onClick={() => {
              if (!isUnlocked) return;
              selectChat(contact);
              viewProfile(false);
              markChatAsViewed(contact.name);
            }}
          >
            <img src={contact.picture} className="w-12 h-12 rounded-full" />
            {contact.name}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
