import { useState } from "react";
import { Video, Phone, PhoneOutgoing, CircleAlert } from "lucide-react";

export type Message = {
  text?: string;
  time?: string;
  sender?: string;
  images?: string[];
  file?: string;
  callDuration?: string;
  video?: boolean;
  emoji?: string;
  blocked?: boolean;
  evidence?: string;
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
    name: "MarkJ_89",
    picture: "https://i.pravatar.cc/150?img=12",
    messages: [
      { text: "Vivienne? It's really you? I am a huge fan!", time: "10:02" },
      {
        text: "I just sent $500. Please respond. 🥺",
        time: "10:05",
        evidence:
          "Why are people paying to talk to her? Maybe I should look at her profile..",
      },
      { text: "I will call you in a minute ❤️", sender: "Me", time: "10:06" },
      {
        time: "10:07",
        callDuration: "1 hour 3 minutes",
      },
      {
        text: "You sound different..like a robot. Is this really Vivienne?",
        time: "11:10",
      },
      {
        text: "I am real!",
        sender: "Me",
        time: "11:11",
      },
      {
        text: "Send me a picture to prove that it's you.",
        time: "11:12",
      },
      {
        time: "11:14",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        time: "11:14",
        sender: "Me",
        text: "See? I am real",
      },
      {
        text: "Something about you looks off..",
        time: "11:16",
        evidence:
          "As I closely examine the picture, I notice something strange. The shadows and lighting in the image don't quite match up with the natural environment. The face looks a little too perfect, almost artificial. The background also seems unusually clean and flawless. It's like something from a computer-generated image. This doesn't seem like a real photo at all.",
      },
    ],
  },
  {
    name: "Alex5531",
    picture: "https://i.pravatar.cc/150?img=3",
    messages: [
      {
        text: "Omg Vivienne 😍 I've been following you forever! Do you sell? 📷",
        time: "4:22",
      },
      {
        text: "Depends on what you're looking for 😉 What's your budget?",
        sender: "Me",
        time: "4:26",
      },
      { text: "What does $100 get me? 😏", time: "4:27" },
      {
        text: "For $100, you can get two teasing shots—nothing too crazy. If you want more, we can talk 😌",
        sender: "Me",
        time: "4:28",
      },
      {
        time: "4:30",
        text: "Just sent $200 😘",
      },
      {
        time: "4:31",
        sender: "Me",
        text: "Give me just one second 😉",
      },
      {
        time: "4:35",
        sender: "Me",
        images: [
          "https://placecats.com/1000/1000",
          "https://placecats.com/neo/1000/1000",
        ],
      },
      {
        time: "4:37",
        text: "Wait..these look kinda AI-generated 👀",
      },
      {
        time: "4:37",
        sender: "Me",
        text: "Huh? What do you mean? They're all me 🤨",
      },
      {
        time: "4:38",
        text: "Idk, something's off. The hands look weird, and your face kinda glitches in one of them…",
        evidence:
          "There's something weird going on here...all these images look fake! But who is faking these images? Vivienne's been missing..",
      },
      {
        time: "4:37",
        sender: "Me",
        text: "You're overthinking. Do you want more or not? $50 a piece 😏",
      },
      {
        time: "4:38",
        text: "Are you even real? 😳",
      },
    ],
  },
  {
    name: "Ryan_07",
    picture: "https://i.pravatar.cc/150?img=7",
    messages: [
      { text: "Vivienne? Omg, is this really you?!", time: "10:01" },
      { text: "Hey babe 😉 It's me!", sender: "Me", time: "10:02" },
      {
        time: "10:03",
        callDuration: "1 hour 1 minute",
      },
      {
        text: "I can't believe I'm actually talking to you! You sound… different than I imagined.",
        time: "10:03",
      },
      {
        text: "Haha, it's just the mic quality 😘 What's up?",
        sender: "Me",
        time: "10:04",
      },
      {
        text: "I don't know… something feels off. Can we hop on a video call?",
        time: "10:05",
      },
      {
        text: "Ugh, I'm not camera-ready right now. But I promise, it's me!",
        sender: "Me",
        time: "10:06",
      },
      {
        text: "I don't know… I just sent $300, and I wanna make sure I'm actually talking to Vivienne.",
        time: "10:07",
      },
      {
        text: "I swear, it's me! Don't you trust me? 😏",
        sender: "Me",
        time: "10:08",
      },
      {
        text: "I ran your voice through an AI detector. It says it's synthetic.",
        time: "10:09",
        evidence:
          "Wait a minute, this is strange. I never actually spoke to Vivienne, but it seems like someone's been pretending to be her. If the voice was synthetic, that could explain the odd feeling I got from the messages. With deepfakes and AI-generated voices popping up more recently(MAYBE LINK TO RESEARCH HERE), it's not surprising that someone could have cloned her voice.",
      },
      {
        text: "Wait, what? That's crazy. Why would I fake my own voice? 🤨",
        sender: "Me",
        time: "10:10",
      },
      { text: "Then prove it. Send me a video, right now.", time: "10:11" },
      {
        time: "10:12",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        text: "Nah… something's wrong. Who am I really talking to?",
        time: "10:13",
      },
    ],
  },
  {
    name: "Tyler_77",
    picture: "https://i.pravatar.cc/150?img=9",
    messages: [
      { text: "Vivienne?! Is that really you? 😱", time: "9:45" },
      { text: "Haha, yep, it's really me 😉", sender: "Me", time: "9:46" },
      {
        text: "I'm a huge fan! Can you send me a pic? I've been waiting forever! I sent $50 😍",
        time: "9:47",
      },
      { text: "Sure thing 😘 One second!", sender: "Me", time: "9:48" },
      {
        time: "9:49",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        text: "Omg, it's so amazing to talk to you! Can we do a video call? I sent $300!",
        time: "9:50",
      },
      {
        text: "I'm down 😏 Let's chat! Give me a minute to get ready.",
        sender: "Me",
        time: "9:51",
      },
      { time: "9:53", callDuration: "30 minutes", video: true },
      { text: "You look.. off. Something doesn't feel right.", time: "10:23" },
      { text: "What do you mean? It's me 😘", sender: "Me", time: "10:24" },
      {
        text: "No, I just checked the photo you sent. The eyes look weird and the smile doesn't match.",
        time: "10:25",
      },
      {
        text: "Are you trying to trick me? This doesn't look like you.",
        time: "10:26",
      },
      { text: "I swear, it's me! 🤨", sender: "Me", time: "10:27" },
      {
        text: "Sorry, but I ran it through a deepfake detector… It's a fake. Your video also looked fake. I'm out. 😞",
        time: "10:28",
        evidence:
          "Something is really off here. Deepfake..? I've read about these technologies before (RESEARCH HERE), where AI-generated videos are used to trick people. Could this be one of those cases?",
      },
      {
        text: "Also, I just noticed I sent $250 to the wrong CashApp! It's not yours, it's $GeorgeT231! Who are you??",
        time: "10:29",
        evidence:
          "The mention of the wrong CashApp is strange. GeorgeT231..like George Thompson?",
      },
      {
        text: "vivienne22023 has blocked Tyler_77",
        sender: "Me",
        blocked: true,
      },
    ],
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
            Hey there 💋 Looking for a personal call or exclusive pictures?
            Let's chat! 💕 $500 per call, $100 per picture
          </p>
        </div>

        <div className="w-px bg-gray-300"></div>

        {/* Right Column*/}
        <div className="flex flex-col justify-start">
          <div className="mb-3">
            <h3 className="text-2xl font-bold">Vivienne</h3>
            <p className="text-sm text-gray-600">
              💰 Calls & Pics Available! DM me for details 💖
            </p>
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
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleProfileClick = () => {
    setViewingProfile(!viewingProfile);
    setSelectedChat(null);
  };

  const handleImageClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleEvidenceClick = (message: Message, info: string) => {
    if (message.evidence) {
      setModalMessage(info);
      setShowModal(true);
    }
  };

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
            <p className="text-sm text-gray-500">
              💰 Calls & Pics Available! DM me for details 💖
            </p>
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
                    msg.blocked
                      ? "justify-center"
                      : msg.sender === "Me"
                      ? "justify-end"
                      : "justify-start"
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
                    {msg.blocked ? (
                      <div className="flex items-center w-full h-full">
                        <p className="text-gray-400 italic text-center">
                          {msg.text}
                        </p>
                      </div>
                    ) : msg.callDuration ? (
                      <>
                        <div className="flex items-center justify-center gap-2">
                          {msg.video ? (
                            <Video className="text-blue-200" />
                          ) : (
                            <PhoneOutgoing className="text-blue-200" />
                          )}
                          <p className="text-center text-gray-500 text-sm my-2">
                            <b>{msg.video && "Video "} Call</b>{" "}
                            {msg.callDuration}
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
                            className="w-40 h-40 rounded-md shadow-md cursor-pointer hover:opacity-75"
                            onClick={() => handleImageClick(img)} // Click to enlarge image
                          />
                        ))}
                      </div>
                    ) : (
                      <>
                        <p
                          className={`inline-block p-2 rounded-lg text-left ${
                            msg.sender === "Me" ? "bg-blue-100" : "bg-blue-300"
                          }`}
                        >
                          {msg.text}
                        </p>

                        {msg.evidence && (
                          <CircleAlert
                            className="text-red-500 cursor-pointer ml-2 inline-block"
                            onClick={() =>
                              handleEvidenceClick(msg, msg.evidence)
                            }
                          />
                        )}
                      </>
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

      {/* Modal for Evidence */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-lg max-w-sm shadow-xl opacity-90 backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-4">
              <span className="text-3xl animate-pulse">💭</span>{" "}
            </div>
            <div className="relative">
              <p className="text-gray-600 text-sm italic text-center">
                {modalMessage}
              </p>
            </div>
            <button
              className="absolute top-0 right-0 text-gray-700 rounded-full p-2"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
