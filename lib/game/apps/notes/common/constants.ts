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
    title: "diary - 3/2/2016",
    content:
      "being an influencer on instagram is so much harder than people think. lately, it feels like everything is falling apart. i have this pressure to constantly be 'on' — posting, sharing, being happy, and perfect for everyone. but it’s so exhausting. behind the filtered photos and perfectly curated posts, there’s a lot of emotional weight. i feel like i’m going through a lot right now, but i can’t let anyone see the real me. i just wish i could have a moment to breathe and not worry about what others think...",
    date: "3/2/2016",
    hidden: false,
    folder: "public",
  },
  {
    title: "diary - 3/5/2016",
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
