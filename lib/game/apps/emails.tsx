import { Email } from "./email";


export const initialEmail: Email[] = [
  {
    index: 0,
    note: null,
    end: false,
    sender: "Jane Doe",
    title: "Public Email 1",
    content: "This is a public email.",
    date: "12/27/2025",
    hidden: false,
    folder: "Inbox",
  },
  {
    index: 1,
    note: null,
    end: true,
    sender: "Jane Doe",
    title: "Public Email 2",
    content: "Another public email.",
    date: "12/28/2025",
    hidden: false,
    folder: "Inbox",
  },
  {
    index: 2,
    note: null,
    end: false,
    sender: "Jane Doe",
    title: "Private Email 1",
    content: "This is a private email.",
    date: "12/29/2025",
    hidden: true,
    folder: "Trash",
  },
  {
    index: 3,
    note: null,
    end: true,
    sender: "Jane Doe",
    title: "Hint 1",
    content: "This is a hint.",
    date: "12/27/2025",
    hidden: false,
    folder: "Trash",
  },
  {
    index: 4,
    note: null,
    end: false,
    sender: "Jane Doe",
    title: "Hint 2",
    content: "This is hint 2.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    index: 5,
    note: null, 
    end: true,
    sender: "Jane Doe",
    title: "Hint 3",
    content: "This is hint 3.",
    date: "12/27/2025",
    hidden: false,
    folder: "Sent",
  },
  {
    index: 6,
    note: null,
    end: false,
    sender: "Jane Doe",
    title: "Hint 4",
    content: "This is hint 4.",
    date: "12/27/2025",
    hidden: false,
    folder: "Drafts",
  },
];