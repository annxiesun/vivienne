import { useState } from "react";
import { AlignJustify, PencilLine, Inbox, Send, Trash2 } from "lucide-react";

export type Email = {
  sender: string;
  title: string;
  content: string;
  date: string;
  hidden: boolean;
  folder: "Inbox" | "Sent" | "Trash" | "Drafts";
};

const initialEmail: Email[] = [
  {
    sender: "Jane Doe",
    title: "Public Email 1",
    content: "This is a public email.",
    date: "12/27/2025",
    hidden: false,
    folder: "Inbox",
  },
  {
    sender: "Jane Doe",
    title: "Public Email 2",
    content: "Another public email.",
    date: "12/28/2025",
    hidden: false,
    folder: "Inbox",
  },
  {
    sender: "Jane Doe",
    title: "Private Email 1",
    content: "This is a private email.",
    date: "12/29/2025",
    hidden: true,
    folder: "Trash",
  },
  {
    sender: "Jane Doe",
    title: "Hint 1",
    content: "This is a hint.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 2",
    content: "This is hint 2.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 3",
    content: "This is hint 3.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 4",
    content: "This is hint 4.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
];

const hintEmail: Email[] = [
  {
    sender: "Jane Doe",
    title: "Hint 1",
    content: "This is a hint.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 2",
    content: "This is hint 2.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 3",
    content: "This is hint 3.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    sender: "Jane Doe",
    title: "Hint 4",
    content: "This is hint 4.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
];


const headers = ["Inbox", "Sent", "Trash", "Drafts"];

let isPasswordCorrect = false; // global state so it remembers if password is already correct (might want to turn into context)

export default function EmailApp() {
  const [emailState, setEmailState] = useState(headers[0])
  const [showModal, setShowModal] = useState(false);
  const [fakeState, setFakeState] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);
  const [emails, setEmail] = useState<Email[]>(initialEmail);
  const [selectedNote, setSelectedNote] = useState<Email | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const lockedFolderPassword = "1234";

  const handleSelectNote = (email: Email) => {
    setSelectedNote(email);
  };

  const handleCreateHint = () => {
    if (fakeState < hintEmail.length) {
      const hintNote = hintEmail[fakeState];
      setFakeState(fakeState + 1)
      setEmail([
        ...emails,
        { ...hintNote, date: new Date().toLocaleDateString() },
      ]);
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === lockedFolderPassword) {
      isPasswordCorrect = true;
      setPasswordInput("");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="emails-app flex w-full h-screen bg-gray-900 overflow-hidden">
        
      {/*Mailbox header */}
      <div className="w-1/4 h-full shadow-lg bg-gray-800 border-r border-gray-800 flex flex-col rounded-lg">
        <div className="p-4 flex items-stretch justify-between border-b border-gray-700">
            <div className="flex items-stretch space-x-2">
              <div className="">
                <HeaderIcon header={emailState} size={6}/>
              </div>
              <h2 className="text-2xl font-semibold text-gray-100">
              {emailState}
              </h2>
            </div>
            <div className="cursor-pointer" onClick={() => setShowModal(true)}>
                <AlignJustify className="text-gray-400 hover:text-gray-300 w-6 h-6" />
            </div>
        </div>

        {/* email menu */}
        {emails.filter((email) => email.folder == emailState).map((email, index) => (
              <div
                key={index}
                className={`px-4 py-3 cursor-pointer bg-gray-750 flex items-center gap-3 hover:bg-gray-700 transition-all text-gray-100 border-b border-gray-700 ${
                  selectedNote?.title === email.title ? "bg-gray-700" : ""
                }`}
                onClick={() => handleSelectNote(email)}
                >
                <div className="flex flex-col w-full space-y-1">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm font-medium truncate">{email.sender}</p>
                        <p className="text-xs text-gray-400 font-thin truncate">{email.date}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium truncate">{email.title}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-medium truncate">{email.content}</p>
                    </div>
                    </div>
              </div>
            ))}

        {showModal && <HeaderMenu setEmailState={setEmailState} setShowModal={setShowModal} />}
      </div>
      <div className="w-3/4 px-8 py-6 h-full">
        {selectedNote ? (
          <div className="flex flex-col h-full text-gray-700">
            <div className="pb-2 flex flex-col border-gray-700 border-b w-full">
              <div className="flex align-bottom justify-between w-full">
                <h2 className="text-2xl text-gray-200 font-semibold">
                  {selectedNote.sender}
                </h2>
                <p className="text-gray-500">{selectedNote.date}</p>
              </div>
              <div>
                <p className="text-gray-200">{selectedNote.title}</p>
                <div className="flex space-x-2"><p className="text-gray-200">To: </p> <p className="text-gray-500">Vivienne Thompson</p></div>
                
              </div>
            </div>
            <p className="mt-4 text-gray-200">{selectedNote.content}</p>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a email to view or create a new one
          </div>
        )}
      </div>
    </div>
  );
}

const HeaderIcon = ({ header, size }) => {
  const icons = {
    Inbox: <Inbox className={`text-blue-500 w-${size} h-${size}`} />,
    Sent: <Send className={`text-blue-500 w-${size} h-${size}`} />,
    Trash: <Trash2 className={`text-blue-500 w-${size} h-${size}`} />,
    Drafts: <PencilLine className={`text-blue-500 w-${size} h-${size}`} />
  };

  return icons[header] || null;
};


function HeaderMenu({ setEmailState, setShowModal }) {
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-64 p-4 shadow-lg rounded-lg top-16 left-4 z-50">
        <ul className="flex flex-col space-y-2">
          {headers.map((header) => (
            <li key={header}>
              <button
                onClick={() => {
                  setEmailState(header);
                  setShowModal(false);
                }}
                className="block w-full flex flex-row text-left py-2 px-4 text-gray-900 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
              >
                <div className="pr-4">
                  <HeaderIcon header={header} size={0.5}/>
                </div>
                {header}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  