import { useState } from "react";
import { Video, Phone, PhoneOutgoing } from "lucide-react";

export type Message = {
  text?: string;
  time: string;
  sender?: string;
  images?: string[];
  file?: string;
  callDuration?: string;
  emoji?: string;
};

export type Contact = {
  name: string;
  picture: string;
  messages: Message[];
};

const contacts: Contact[] = [
  {
    name: "User A",
    picture: "https://i.pravatar.cc/150?img=1",
    messages: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "10:00",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        time: "10:06",
        callDuration: "1 minute 15 seconds",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        time: "10:06",
        images: [
          "https://placecats.com/1000/1000",
          "https://placecats.com/neo/1000/1000",
        ],
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        sender: "Me",
        time: "10:06",
        images: ["https://placecats.com/bella/500/500"],
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        time: "10:06",
      },
      {
        emoji: "❤️😘",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        sender: "Me",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        time: "10:06",
      },
    ],
  },
  {
    name: "User B",
    picture: "https://i.pravatar.cc/150?img=2",
    messages: [
      { text: "Hello", time: "9:30" },
      { text: "Hi", time: "9:35" },
      { text: "what is up", time: "9:36", sender: "Me" },
    ],
  },
  {
    name: "User C",
    picture: "https://i.pravatar.cc/150?img=3",
    messages: [{ text: "meow!", time: "8:45" }],
  },
  {
    name: "User D",
    picture: "https://i.pravatar.cc/150?img=7",
    messages: [],
  },
  {
    name: "User E",
    picture: "https://i.pravatar.cc/150?img=9",
    messages: [],
  },
];

const ProfileView = () => {
  return (
    <div className="p-4 rounded-lg text-gray-700">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=5"
              className="w-32 h-32 border-4 border-white rounded-full"
            />
          </div>
          <p className="mt-3 text-sm text-left max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            interdum mauris ac ipsum facilisis, id elementum dui accumsan.
          </p>
        </div>

        <div className="w-px bg-gray-300"></div>

        {/* Right Column*/}
        <div className="flex flex-col justify-start">
          <div className="mb-3">
            <h3 className="text-2xl font-bold">Vivienne</h3>
            <p className="text-sm text-gray-600">status message ^_^</p>
          </div>
          <hr className="border-white my-2" />
          <div className="text-gray-700 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
            <strong>Skype Name</strong> <span>vivienne22023</span>
            <strong>Phone</strong> <span>555-1234</span>
            <strong>Birthday</strong> <span>February 14, 2000</span>
            <strong>Gender</strong> <span>Female</span>
            <strong>Language</strong> <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skype() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [viewingProfile, setViewingProfile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleProfileClick = () => {
    setViewingProfile(!viewingProfile);
    setSelectedChat(null);
  };

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <div className="skype-app relative flex w-full h-screen max-h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 h-full shadow-md bg-blue-50 border border-gray-300 flex flex-col">
        {/* Profile Area */}
        <div
          className="flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-blue-100 transition-all"
          onClick={handleProfileClick}
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
            <p className="text-sm text-gray-500">status message ^_^</p>
          </div>
        </div>
        {/* Chat History */}
        <h2 className="text-md font-bold px-4 py-2 text-gray-700">RECENT</h2>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-blue-200 transition-all duration-200 text-gray-700 ${
              selectedChat && selectedChat.name === contact.name
                ? "bg-blue-200"
                : ""
            }`}
            onClick={() => {
              setSelectedChat(contact);
              setViewingProfile(false);
            }}
          >
            <img src={contact.picture} className="w-12 h-12 rounded-full" />
            {contact.name}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 px-4 py-2 h-full">
        {/* Profile View */}
        {viewingProfile ? (
          <ProfileView />
        ) : selectedChat ? (
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
                <Video className="text-blue-200 hover:text-blue-500 transition-all" />
                <Phone className="text-blue-200 hover:text-blue-500 transition-all" />
              </div>
            </div>

            {/* Scrollable message area */}
            <div className="flex-1 overflow-y-scroll skype-scrollbar pr-2 h-full">
              {selectedChat.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex mb-2 ${
                    msg.sender === "Me" ? "justify-end" : "justify-start"
                  } relative`}
                >
                  {msg.sender !== "Me" && !msg.callDuration && (
                    <img
                      src={selectedChat.picture}
                      className="w-8 h-8 mr-2 rounded-full"
                    />
                  )}
                  <div
                    className={`${
                      msg.sender === "Me"
                        ? "text-right ml-10 mr-12"
                        : "text-left mr-12"
                    } max-w-full`}
                  >
                    {msg.callDuration ? (
                      <>
                        <div className="flex items-center justify-center gap-2">
                          <PhoneOutgoing className="text-blue-200" />
                          <p className="text-center text-gray-500 text-sm my-2">
                            <b>Call</b> {msg.callDuration}
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
                            className="w-40 h-40rounded-md shadow-md cursor-pointer hover:opacity-75"
                            onClick={() => handleImageClick(img)} // Click to enlarge image
                          />
                        ))}
                      </div>
                    ) : (
                      <p
                        className={`inline-block p-2 rounded-lg text-left ${
                          msg.sender === "Me" ? "bg-blue-100" : "bg-blue-300"
                        }`}
                      >
                        {msg.text}
                      </p>
                    )}
                  </div>

                  {/* Timestamp Container */}
                  <p className="absolute right-0 text-xs text-gray-500 mr-2">
                    {msg.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </div>
      {/* Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-0 right-0 text-white rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
