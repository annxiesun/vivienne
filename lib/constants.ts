export const GAME_NAME = "Vivienne";

export const HOME_THOUGHTS = [
  "Let's open notes",
  "Hmm, that was weird. I should look into Instagram.",
  "Well that was odd, maybe I should check her email",
  "Maybe I can find something in ChatGPT",
  "I should check out her Skype",
  "I remember some of her notes were locked, lets go back and check now", // (pswd 1234)
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
