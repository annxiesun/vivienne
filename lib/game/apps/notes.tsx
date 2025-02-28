import { useState } from "react";
import { FileText, Edit3, Trash2, PlusCircle, Lock } from "lucide-react";

export type Note = {
  title: string;
  content: string;
  date: string;
  hidden: boolean;
  folder: "public" | "private" | "hint";
};

const initialNotes: Note[] = [
  {
    title: "Public Note 1",
    content: "This is a public note.",
    date: "12/27/2025",
    hidden: false,
    folder: "public",
  },
  {
    title: "Public Note 2",
    content: "Another public note.",
    date: "12/28/2025",
    hidden: false,
    folder: "public",
  },
  {
    title: "Private Note 1",
    content: "This is a private note.",
    date: "12/29/2025",
    hidden: true,
    folder: "private",
  },
  {
    title: "Hint Note 1",
    content:
      "This is where you can get hints. Click 'Get Hint' and based on where you are in the game, it will generate the right hint note for you",
    date: "12/29/2025",
    hidden: false,
    folder: "hint",
  },
];

// give user a hint based on game state
let fake_state = 0;
const hintNotes: Note[] = [
  {
    title: "Hint 1",
    content: "This is a hint.",
    date: "12/27/2025",
    hidden: true,
    folder: "hint",
  },
  {
    title: "Hint 2",
    content: "This is hint 2.",
    date: "12/27/2025",
    hidden: true,
    folder: "hint",
  },
  {
    title: "Hint 3",
    content: "This is hint 3.",
    date: "12/27/2025",
    hidden: true,
    folder: "hint",
  },
];

export default function NotesApp() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [lockedFolderPassword] = useState("1234");

  const handleSelectNote = (note: Note) => {
    if (note.folder === "private" && !isPasswordCorrect) return;
    setSelectedNote(note);
  };

  const handleCreateHint = () => {
    const hintNote = hintNotes[fake_state++];
    setNotes([
      ...notes,
      {
        ...hintNote,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === lockedFolderPassword) {
      setIsPasswordCorrect(true);
      setPasswordInput("");
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="notes-app flex w-full h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 h-full shadow-lg bg-white border-r border-gray-300 flex flex-col rounded-lg">
        <h2 className="text-2xl font-semibold px-6 py-4 text-gray-700">
          Notes
        </h2>
        <button
          className="flex items-center gap-3 px-4 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition-colors mx-4 mb-4"
          onClick={() => handleCreateHint()}
        >
          <PlusCircle size={18} /> Get Hint
        </button>
        {/* Locked Folder Button */}
        <button
          className="flex items-center gap-3 px-4 py-3 bg-red-400 text-white rounded-lg shadow-md hover:bg-red-500 transition-colors mx-4 mb-4"
          onClick={() => {
            setIsPasswordCorrect(false);
            setSelectedNote(null);
          }}
        >
          <Lock size={18} /> Locked Folder
        </button>

        {/* Notes */}
        <div className="flex-1 overflow-y-auto">
          {isPasswordCorrect && (
            <>
              <h3 className="text-lg font-semibold px-6 py-3 text-gray-700">
                Private Notes
              </h3>
              {notes
                .filter((note) => note.folder === "private")
                .map((note, index) => (
                  <div
                    key={index}
                    className={`px-6 py-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-all text-gray-700 rounded-lg ${
                      selectedNote?.title === note.title ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleSelectNote(note)}
                  >
                    <FileText size={20} />
                    <p className="text-sm truncate">{note.title}</p>
                  </div>
                ))}
            </>
          )}
          <h3 className="text-lg font-semibold px-6 py-3 text-gray-700">
            Public Notes
          </h3>
          {notes
            .filter((note) => note.folder === "public")
            .map((note, index) => (
              <div
                key={index}
                className={`px-6 py-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-all text-gray-700 rounded-lg ${
                  selectedNote?.title === note.title ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSelectNote(note)}
              >
                <FileText size={20} />
                <p className="text-sm truncate">{note.title}</p>
              </div>
            ))}
          {/* Hint Notes Section */}
          <h3 className="text-lg font-semibold px-6 py-3 text-gray-700">
            Hints
          </h3>
          {notes
            .filter((note) => note.folder === "hint")
            .map((note, index) => (
              <div
                key={index}
                className={`px-6 py-3 cursor-pointer flex items-center gap-3 hover:bg-gray-200 transition-all text-gray-700 rounded-lg ${
                  selectedNote?.title === note.title ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSelectNote(note)}
              >
                <FileText size={20} />
                <p className="text-sm truncate">{note.title}</p>
              </div>
            ))}
        </div>
      </div>
      {/* Main Content */}
      <div className="w-3/4 px-8 py-6 h-full">
        {!isPasswordCorrect && !selectedNote ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-700">
            <h2 className="text-xl font-semibold mb-4">
              Enter Password to Access Locked Folder
            </h2>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-4 text-xl border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              onClick={handlePasswordSubmit}
            >
              Unlock Folder
            </button>
          </div>
        ) : (
          <>
            {selectedNote ? (
              <div className="flex flex-col h-full text-gray-700">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <h2 className="text-3xl font-semibold">
                    {selectedNote.title}
                  </h2>
                  <div className="flex gap-3">
                    <Edit3 className="text-blue-600" size={20} />
                    <Trash2 className="text-red-600" size={20} />
                  </div>
                </div>
                <p className="text-gray-500 mb-2">{selectedNote.date}</p>
                <p className="text-lg">{selectedNote.content}</p>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p>Select a note to view or create a new one</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
