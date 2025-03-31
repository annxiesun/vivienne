export const GAME_NAME = "Vivienne";

export const HOME_THOUGHTS = [
  "let's open notes",
  "let's open insta",
  "let's open chatgpt",
  "let's open mail",
  "let's open skype",
  "let's unlock the notes (pswd 1234)",
];

export type Decision = {
  question: string;
  info: string;
  option1: string;
  onClick1: () => void;
  option2: string;
  onClick2: () => void;
  ignoreOption?: string
  image?: string
};
