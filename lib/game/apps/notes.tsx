import { useState } from "react";
import { FileText, PlusCircle } from "lucide-react";

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
];

const hintNotes: Note[] = [
  {
    title: "Hint 1",
    content: "This is a hint.",
    date: "12/27/2025",
    hidden: false,
    folder: "hint",
  },
  {
    title: "Hint 2",
    content: "This is hint 2.",
    date: "12/27/2025",
    hidden: false,
    folder: "hint",
  },
  {
    title: "Hint 3",
    content: "This is hint 3.",
    date: "12/27/2025",
    hidden: false,
    folder: "hint",
  },
  {
    title: "Hint 4",
    content: "This is hint 4.",
    date: "12/27/2025",
    hidden: false,
    folder: "hint",
  },
];

let isPasswordCorrect = false; // global state so it remembers if password is already correct (might want to turn into context)

export default function NotesApp() {
  const [fakeState, setFakeState] = useState(0);
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const lockedFolderPassword = "1234";

  const handleSelectNote = (note: Note) => {
    setSelectedNote(note);
  };

  const handleCreateHint = () => {
    if (fakeState < hintNotes.length) {
      const hintNote = hintNotes[fakeState];
      setFakeState(fakeState + 1)
      setNotes([
        ...notes,
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
    <div className="notes-app flex w-full h-screen bg-gray-100 overflow-hidden">
      <div className="w-1/4 h-full shadow-lg bg-white border-r border-gray-300 flex flex-col rounded-lg">
        <h2 className="text-2xl font-semibold px-6 py-4 text-gray-700">
          Notes
        </h2>
        <button
          className="flex items-center gap-3 px-4 py-3 bg-yellow-400 text-white rounded-lg shadow-md hover:bg-yellow-500 transition-colors mx-4 mb-4"
          onClick={handleCreateHint}
        >
          <PlusCircle size={18} /> Get Hint
        </button>

        <h3 className="text-lg font-semibold px-6 py-2 text-gray-700">
          Private Notes
        </h3>
        {!isPasswordCorrect && (
          <div className="px-6 py-2">
            <input
              type="password"
              placeholder="Enter Password"
              className="p-2 border rounded w-full text-gray-700"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <button
              className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
              onClick={handlePasswordSubmit}
            >
              Unlock Private Notes
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">
          {isPasswordCorrect && (
            <>
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
      <div className="w-3/4 px-8 py-6 h-full">
        {selectedNote ? (
          <div className="flex flex-col h-full text-gray-700">
            <h2 className="text-3xl font-semibold border-b pb-2 mb-4">
              {selectedNote.title}
            </h2>
            <p className="text-gray-500 mb-2">{selectedNote.date}</p>
            <p className="text-lg">{selectedNote.content}</p>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            Select a note to view or create a new one
          </div>
        )}
      </div>
    </div>
  );
}
