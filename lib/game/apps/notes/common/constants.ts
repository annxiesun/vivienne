export const lockedFolderPassword = "1234"

export type Note = {
  title: string;
  content: string;
  date: string;
  hidden: boolean;
  folder: "public" | "private" | "hint";
};

export const initialNotes: Note[] = [
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

export const hintNotes: Note[] = [
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
