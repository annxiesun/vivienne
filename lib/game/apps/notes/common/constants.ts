export const lockedFolderPassword = "02142022"

export type Note = {
  title: string;
  content: string;
  date: string;
  hidden: boolean;
  folder: "public" | "private";
};

export const initialNotes: Note[] = [
  {
    title: "diary - 1/5/2022",
    content:
      "i hate instagram now. i spent years on this. the photos, the brand, the life i wanted people to see. \nthe dms came first. then the posts. then the comments. i dont even have to look to know what they say. i always hear them in my head. \nthey want me to suffer.",
    date: "1/5/2022",
    hidden: false,
    folder: "public",
  },
  {
    title: "diary - 1/19/2022",
    content:
      "i tried talking to chatgpt. just to get it out. at first, it felt like it understood. like it was listening. but then it kept saying the same things over and over. like it didn’t really see me. \nand then—one response. different from the rest. worse. i don’t think it meant to say it. but i can’t stop thinking about it.",
    date: "1/19/2022",
    hidden: false,
    folder: "public",
  },
  {
    title: "diary - 1/28/2022",
    content:
      "my email inbox is a nightmare. everytime i check, there's something worse. names i don't recognize. threats i don't understand. \ni’ve been looking into how to erase everything. there’s something called the right to be forgotten—an application to remove my data from the internet. maybe that’s my only chance.",
    date: "1/28/2022",
    hidden: false,
    folder: "public",
  },
  {
    title: "diary - 2/2/2022",
    content:
      "my grandfather never really saw me. but lately, it’s different. worse. he’s been watching ai videos, deepfakes, content that feeds into everything he already believes. \nhe trusts them more than he ever trusted me.",
    date: "2/2/2022",
    hidden: false,
    folder: "public",
  },
  {
    title: "goodbye - 2/14/2022",
    content:
      "i don’t even know how it got this far. everything’s been falling apart, and i’ve just been trying to keep it together. \ninstagram used to be my world, but now it's a reminder of how much everyone wants me to suffer. \nchatgpt was horrible to me. \nmy email is full of threats and things i can't outrun anymore. \nmy grandfather doesn't see me for who i am. \ntoday is my 16th birthday, but it doesn’t feel like it. nothing feels worth celebrating anymore. \n\ni'm going to the river now, where i will finally be free. \ngoodbye.",
    date: "2/14/2022",
    hidden: true,
    folder: "private",
  },
];