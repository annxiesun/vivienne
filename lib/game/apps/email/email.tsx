import { useState } from "react";
import { AlignJustify, PencilLine, Inbox, Send, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import { Email, headers } from "./emails";
import ThoughtButton from "../../../components/thought_button";
import { useGameActions, useGameState } from "../../../state/context";

export default function EmailApp() {
  const state = useGameState().email;
  const actions = useGameActions().email;
  const next = useGameActions()


  // const [gameState, setGameState] = useState(0)
  // const [mailboxState, setMailboxState] = useState(0)
  // const [emailState, setEmailState] = useState(0)
  const [showModal, setShowModal] = useState(false);
  // const [emails] = useState<Email[]>(initialEmail);
  // const [selectedEmail, setselectedEmail] = useState<Email | null>(null);

  const handleClickThought = () => {
    if (!state.selectedEmail.read) {
      actions.setGameState(state.gameState + 1)
      state.selectedEmail.read = true

      if (state.selectedEmail.end && state.selectedEmail.folder == 'Drafts') { // add this to send email button
        next.setScene(3)
      }
      if (state.selectedEmail.end) {
        actions.setMailboxState(state.mailboxState + 1)
      }
    }
    }

  const handleSelectNote = (email: Email) => {
    if (email.index <= state.gameState){
      actions.setSelectedEmail(email);
    }
  };

  return (
    <div className="emails-app flex w-full h-screen bg-gray-900 overflow-hidden">
        
      {/*Mailbox header */}
      <div className="w-1/4 h-full shadow-lg bg-gray-800 border-r border-gray-800 flex flex-col rounded-lg">
        <div className="p-4 flex items-stretch justify-between border-b border-gray-700">
            <div className="flex items-stretch space-x-2">
              <div className="">
                <HeaderIcon header={headers[state.currentInbox]} size={6}/>
              </div>
              <h2 className="text-2xl font-semibold text-gray-100">
              {headers[state.currentInbox]}
              </h2>
            </div>
            <div className="cursor-pointer" onClick={() => setShowModal(true)}>
                <AlignJustify className="text-gray-400 hover:text-gray-300 w-6 h-6" />
            </div>
        </div>

        {/* email menu */}
        {state.emails.filter((email) => email.folder == headers[state.currentInbox]).map((email, index) => (
              <div
                key={index}
                className={`px-4 py-3 cursor-pointer bg-gray-750 flex items-center gap-3  transition-all border-b border-gray-700 ${
                  state.selectedEmail?.index === email.index ? "bg-gray-700" : ""
                } ${email.index <= state.gameState ? "text-gray-100 hover hover:bg-gray-700" : "text-gray-400"}
                `}
                onClick={() => handleSelectNote(email)}
                >
                <div className="flex flex-col w-full space-y-1">
                    <div className="flex items-center justify-between w-full">
                        <p className="text-sm font-medium truncate">{email.from}</p>
                        <p className="text-xs text-gray-400 font-thin truncate">{email.date}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium truncate">{email.subject}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-medium truncate">{email.body != null ? email.body : email.content}</p>
                    </div>
                    </div>
              </div>
            ))}

        {showModal && <HeaderMenu setShowModal={setShowModal} />}
      </div>
      <div className="w-3/4 px-8 py-6 h-full">
        {state.selectedEmail ? (
          <div className="flex flex-col h-full text-gray-700">
            <div className="pb-2 flex flex-col border-gray-700 border-b w-full">
              <div className="flex align-bottom justify-between w-full">
                <h2 className="text-2xl text-gray-200 font-semibold">
                  {state.selectedEmail.from}
                </h2>
                <p className="text-gray-500">{state.selectedEmail.date}</p>
              </div>
              <div>
                <p className="text-gray-200">{state.selectedEmail.subject}</p>

                <div className="flex space-x-2"><p className="text-gray-200">From: </p> <p className="text-gray-500">{state.selectedEmail.from + " <" + state.selectedEmail.fromEmail + ">"}</p></div>
                <div className="flex space-x-2"><p className="text-gray-200">To: </p> <p className="text-gray-500">{state.selectedEmail.to + " <" + state.selectedEmail.toEmail + ">"}</p></div>
              </div>
            </div>
            <NoteRenderer content={state.selectedEmail.content} />  
            <div className="mt-4 w-full flex justify-center">
              <ThoughtButton onClick={handleClickThought} thought={state.selectedEmail.note}/> 
            </div>
            {/* <p className="mt-4 text-gray-200 whitespace-pre-wrap">{selectedEmail.content}</p> */}
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


function HeaderMenu({ setShowModal }) {
  const actions = useGameActions().email
  const state = useGameState().email
    return (
      <nav className="border-gray-200 bg-gray-900 border-gray-700 fixed w-64 p-4 shadow-lg rounded-lg top-16 left-4 z-50">
        <ul className="flex flex-col space-y-2">
          {headers.map((header, index) => (
            <li key={header}>
              <button
                onClick={() => {
                  if (index <= state.mailboxState) {
                    actions.setCurrentInbox(index);
                  }
                  
                  setShowModal(false);
                  actions.setSelectedEmail(null)
                }}
                className={`block w-full flex flex-row text-left py-2 px-4 rounded-sm 
                ${index <= state.mailboxState ? "hover:bg-gray-700  text-white" : "text-gray-400"}`}
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
  setShowModal: PropTypes.func.isRequired,
};

const NoteRenderer = ({ content }: { content: string | React.ReactNode }) => {
  return typeof content === "string" ? (
    <div className="overflow-auto">
      <p className="mt-4 text-gray-200 whitespace-pre-wrap">{content}</p>
    </div>
  ) : (
    <div className="overflow-auto" >{content}</div>
  );
};