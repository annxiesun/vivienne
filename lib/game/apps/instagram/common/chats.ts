import { InstagramChatType } from "./types";

export const INSTAGRAM_CHATS: InstagramChatType[] = [
  {
    username: "i_know_your_secret_vivienne",
    messages: [
      {
        is_me: false,
        value: "Hi Vivienne, I know your secrets...",
        thought: "What an odd message"
      },
      {
        is_me: true,
        value: "???"
      },
      {
        is_me: false,
        value: ":)"
      },
      {
        is_me: true,
        value: "wdym"
      },
      {
        is_me: true,
        value: "???"
      },
      {
        is_me: true,
        value: "HELLO!"
      },
      {
        is_me: false,
        value: "I know the real you"
      },
      {
        is_me: false,
        value: "You go to Belmont North Secondary School, isn't that right?"
      },
      {
        is_me: true,
        value: "..."
      },
      {
        is_me: false,
        value: "You're also transgender"
      },
      {
        is_me: true,
        value: "wtffffffff"
      },
      {
        is_me: false,
        value: "I know all about you, and I'm going to destroy your reputation",
        thought: "I should checkout this person's profile"
      },
    ]
  },
{
  username: "realea",
  unlocked_after_unblock: true,
  stage:0,
  messages: [
    {
      is_me: true,
      value: "I'm freakin out",
    },
    {
      is_me: true,
      value: "Hihi"
    },
    {
      is_me: true,
      value: "Please reply! 🙁"
    },
    {
      is_me: false,
      value: "I'm sorry Vivienne, I don't think I can be friends with you anymore"
    },
  ]
},
{
  username: "leidylovelies",
  unlocked_after_unblock: true,
  stage: 1,
  messages: [
    {
      is_me: true,
      value: "leah isn't speaking to me anymore, please don't say your abandoning me too :(",
    },
    {
      is_me: true,
      value: "hello..."
    },
  ]
},
{
  username: "xavier27",
  stage: 2,
  unlocked_after_unblock: true,
  messages: [
    {
      is_me: false,
      value: "You should kill yourself",
    }
  ]
},
/// ****** THE KEY MESSAGES ************ //
{
  username: "olivveee",
  stage:3,
  unlocked_after_unblock: true,
  messages: [
    {
      is_me: true,
      value: "HEY",
    },
    {
      is_me: true,
      value: "WTF IS WRONG WITH YOU",
    },
    {
      is_me: true,
      value: "WHY DID YOU MAKE THAT POST ABOUT ME",
      thought: "Wow is this really the person behind that account",
    },
    {
      is_me: false,
      value: "i have no idea what you're talking about"
    },
    {
      is_me: true,
      value: "STOP ACTING DUMB"
    },
    {
      is_me: true,
      value: "UR A HORRIBLE PERSON"
    },
    {
      is_me: false,
      value: "fine, i'll admit it, it was me",
    },
    {
      is_me: false,
      value: "but you deserved it",
    },
    {
      is_me: false,
      value: "you shouldn't be lying to all your fans :)",
    },
    {
      is_me: false,
      value: "you didn't log out of your computer in computer lab and I found everything",
    },
    {
      is_me: false,
      value: "for future reference, password123 isn't a very secure password",
      thought: "Maybe I can use this somewhere",
      next_scene: true,
    },
    {
      is_me: true,
      value: "YOU'VE RUINED MY LIFE"
    },
    {
      is_me: true,
      value: "ARE YOU HAPPY NOW"
    },
  ]
},

/////////////////////////////////////////////
];
