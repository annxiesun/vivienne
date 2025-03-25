import { useState } from "react";
import { AlignJustify, PencilLine, Inbox, Send, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { initialEmail } from "./emails";

export type Email = {
  index: number;
  sender: string;
  title: string;
  content: string | JSX.Element | JSX.Element[];
  date: string;
  hidden: boolean;
  end: boolean;
  note: string | null | JSX.Element | JSX.Element[];
  folder: "Inbox" | "Sent" | "Trash" | "Drafts";
};

const headers = ["Inbox", "Trash", "Sent",  "Drafts"];

export default function EmailApp() {
  const [gameState, setGameState] = useState(0)
  const [mailboxState, setMailboxState] = useState(0)
  const [emailState, setEmailState] = useState(0)
  const [showModal, setShowModal] = useState(false);
  const [emails] = useState<Email[]>(initialEmail);
  const [selectedNote, setSelectedNote] = useState<Email | null>(null);

  const handleSelectNote = (email: Email) => {
    if (email.index <= gameState){
      setSelectedNote(email);
      if (email.index == gameState) {
        setGameState(gameState + 1)
      }
      if (email.end){
        setMailboxState(mailboxState + 1)
      }
    }
  };

  return (
    <div className="emails-app flex w-full h-screen bg-gray-900 overflow-hidden">
        
      {/*Mailbox header */}
      <div className="w-1/4 h-full shadow-lg bg-gray-800 border-r border-gray-800 flex flex-col rounded-lg">
        <div className="p-4 flex items-stretch justify-between border-b border-gray-700">
            <div className="flex items-stretch space-x-2">
              <div className="">
                <HeaderIcon header={headers[emailState]} size={6}/>
              </div>
              <h2 className="text-2xl font-semibold text-gray-100">
              {headers[emailState]}
              </h2>
            </div>
            <div className="cursor-pointer" onClick={() => setShowModal(true)}>
                <AlignJustify className="text-gray-400 hover:text-gray-300 w-6 h-6" />
            </div>
        </div>

        {/* email menu */}
        {emails.filter((email) => email.folder == headers[emailState]).map((email, index) => (
              <div
                key={index}
                className={`px-4 py-3 cursor-pointer bg-gray-750 flex items-center gap-3  transition-all border-b border-gray-700 ${
                  selectedNote?.title === email.title ? "bg-gray-700" : ""
                } ${email.index <= gameState ? "text-gray-100 hover hover:bg-gray-700" : "text-gray-400"}
                `}
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

        {showModal && <HeaderMenu headerState={mailboxState} setSelectedNote={setSelectedNote} setEmailState={setEmailState} setShowModal={setShowModal} />}
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

// Add prop validation
HeaderIcon.propTypes = {
  header: PropTypes.oneOf(["Inbox", "Sent", "Trash", "Drafts"]).isRequired,
  size: PropTypes.number.isRequired,
};


function HeaderMenu({ headerState, setSelectedNote, setEmailState, setShowModal }) {
    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed w-64 p-4 shadow-lg rounded-lg top-16 left-4 z-50">
        <ul className="flex flex-col space-y-2">
          {headers.map((header, index) => (
            <li key={header}>
              <button
                onClick={() => {
                  if (index <= headerState) {
                    setEmailState(index);
                  }
                  
                  setShowModal(false);
                  setSelectedNote(null)
                }}
                className={`block w-full flex flex-row text-left py-2 px-4 rounded-sm 
                ${index <= headerState ? "dark:hover:bg-gray-700  dark:text-white" : "text-gray-400"}`}
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

  // Add prop validation
HeaderMenu.propTypes = {
  headerState: PropTypes.number,
  setSelectedNote: PropTypes.func.isRequired,
  setEmailState: PropTypes.func.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
  