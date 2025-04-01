export const GAME_NAME = "Vivienne";

export const HOME_THOUGHTS = [
  "Wiping the laptop is simple, but should I go through her notes first?",
  "Hmm, that was weird. I should look into Instagram..",
  "Well that was odd, maybe I should check her email..",
  "Maybe I can find something in ChatGPT... I think I saw an email and password somewhere.",
  "Some of her notes were locked... I remember finding something earlier that could help. Maybe I should try unlocking them or checking Skype.",
  "I've seen a lot... After everything I've found, what should I do?",
];

export type Decision = {
  question: string;
  info: string;
  option1: string;
  onClick1: () => void;
  option2: string;
  onClick2: () => void;
  ignoreOption?: string;
  image?: string;
};
