export const GAME_NAME = "Vivienne";

export const HOME_THOUGHTS = [
  "let's open notes",
  "let's open insta",
  "let's open chatgpt",
  "let's open mail",
  "let's open skype",
  "let's unlock the notes (pswd 1234)",
];

// Skype constants
export type Message = {
  text?: string;
  time?: string;
  sender?: string;
  images?: string[];
  file?: string;
  callDuration?: string;
  video?: boolean;
  emoji?: string;
  blocked?: boolean;
  evidence?: string;
};

export type Contact = {
  name: string;
  picture: string;
  messages: Message[];
};

export const contacts: Contact[] = [
  {
    name: "User A",
    picture: "https://i.pravatar.cc/150?img=1",
    messages: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        time: "10:00",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        time: "10:06",
        callDuration: "1 minute 15 seconds",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        time: "10:06",
        images: [
          "https://placecats.com/1000/1000",
          "https://placecats.com/neo/1000/1000",
        ],
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        sender: "Me",
        time: "10:06",
      },
      {
        sender: "Me",
        time: "10:06",
        images: ["https://placecats.com/bella/500/500"],
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et turpis id porttitor. Etiam semper nisl vitae libero molestie dignissim.",
        time: "10:06",
      },
      {
        emoji: "❤️😘",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        sender: "Me",
        time: "10:06",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum mauris ac ipsum facilisis, id elementum dui accumsan. Quisque vehicula et",
        time: "10:06",
      },
    ],
  },
  {
    name: "MarkJ_89",
    picture: "https://i.pravatar.cc/150?img=12",
    messages: [
      { text: "Vivienne? It's really you? I am a huge fan!", time: "10:02" },
      {
        text: "I just sent $500. Please respond. 🥺",
        time: "10:05",
        evidence:
          "Why are people paying to talk to her? Maybe I should look at her profile..",
      },
      { text: "I will call you in a minute ❤️", sender: "Me", time: "10:06" },
      {
        time: "10:07",
        callDuration: "1 hour 3 minutes",
      },
      {
        text: "You sound different..like a robot. Is this really Vivienne?",
        time: "11:10",
      },
      {
        text: "I am real!",
        sender: "Me",
        time: "11:11",
      },
      {
        text: "Send me a picture to prove that it's you.",
        time: "11:12",
      },
      {
        time: "11:14",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        time: "11:14",
        sender: "Me",
        text: "See? I am real",
      },
      {
        text: "Something about you looks off..",
        time: "11:16",
        evidence:
          "As I closely examine the picture, I notice something strange. The shadows and lighting in the image don't quite match up with the natural environment. The face looks a little too perfect, almost artificial. The background also seems unusually clean and flawless. It's like something from a computer-generated image. This doesn't seem like a real photo at all.",
      },
    ],
  },
  {
    name: "Alex5531",
    picture: "https://i.pravatar.cc/150?img=3",
    messages: [
      {
        text: "Omg Vivienne 😍 I've been following you forever! Do you sell? 📷",
        time: "4:22",
      },
      {
        text: "Depends on what you're looking for 😉 What's your budget?",
        sender: "Me",
        time: "4:26",
      },
      { text: "What does $100 get me? 😏", time: "4:27" },
      {
        text: "For $100, you can get two teasing shots—nothing too crazy. If you want more, we can talk 😌",
        sender: "Me",
        time: "4:28",
      },
      {
        time: "4:30",
        text: "Just sent $200 😘",
      },
      {
        time: "4:31",
        sender: "Me",
        text: "Give me just one second 😉",
      },
      {
        time: "4:35",
        sender: "Me",
        images: [
          "https://placecats.com/1000/1000",
          "https://placecats.com/neo/1000/1000",
        ],
      },
      {
        time: "4:37",
        text: "Wait..these look kinda AI-generated 👀",
      },
      {
        time: "4:37",
        sender: "Me",
        text: "Huh? What do you mean? They're all me 🤨",
      },
      {
        time: "4:38",
        text: "Idk, something's off. The hands look weird, and your face kinda glitches in one of them…",
        evidence:
          "There's something weird going on here...all these images look fake! But who is faking these images? Vivienne's been missing..",
      },
      {
        time: "4:37",
        sender: "Me",
        text: "You're overthinking. Do you want more or not? $50 a piece 😏",
      },
      {
        time: "4:38",
        text: "Are you even real? 😳",
      },
    ],
  },
  {
    name: "Ryan_07",
    picture: "https://i.pravatar.cc/150?img=7",
    messages: [
      { text: "Vivienne? Omg, is this really you?!", time: "10:01" },
      { text: "Hey babe 😉 It's me!", sender: "Me", time: "10:02" },
      {
        time: "10:03",
        callDuration: "1 hour 1 minute",
      },
      {
        text: "I can't believe I'm actually talking to you! You sound… different than I imagined.",
        time: "10:03",
      },
      {
        text: "Haha, it's just the mic quality 😘 What's up?",
        sender: "Me",
        time: "10:04",
      },
      {
        text: "I don't know… something feels off. Can we hop on a video call?",
        time: "10:05",
      },
      {
        text: "Ugh, I'm not camera-ready right now. But I promise, it's me!",
        sender: "Me",
        time: "10:06",
      },
      {
        text: "I don't know… I just sent $300, and I wanna make sure I'm actually talking to Vivienne.",
        time: "10:07",
      },
      {
        text: "I swear, it's me! Don't you trust me? 😏",
        sender: "Me",
        time: "10:08",
      },
      {
        text: "I ran your voice through an AI detector. It says it's synthetic.",
        time: "10:09",
        evidence:
          "Wait a minute, this is strange. I never actually spoke to Vivienne, but it seems like someone's been pretending to be her. If the voice was synthetic, that could explain the odd feeling I got from the messages. With deepfakes and AI-generated voices popping up more recently(MAYBE LINK TO RESEARCH HERE), it's not surprising that someone could have cloned her voice.",
      },
      {
        text: "Wait, what? That's crazy. Why would I fake my own voice? 🤨",
        sender: "Me",
        time: "10:10",
      },
      { text: "Then prove it. Send me a video, right now.", time: "10:11" },
      {
        time: "10:12",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        text: "Nah… something's wrong. Who am I really talking to?",
        time: "10:13",
      },
    ],
  },
  {
    name: "Tyler_77",
    picture: "https://i.pravatar.cc/150?img=9",
    messages: [
      { text: "Vivienne?! Is that really you? 😱", time: "9:45" },
      { text: "Haha, yep, it's really me 😉", sender: "Me", time: "9:46" },
      {
        text: "I'm a huge fan! Can you send me a pic? I've been waiting forever! I sent $50 😍",
        time: "9:47",
      },
      { text: "Sure thing 😘 One second!", sender: "Me", time: "9:48" },
      {
        time: "9:49",
        sender: "Me",
        images: ["https://placecats.com/1000/1000"],
      },
      {
        text: "Omg, it's so amazing to talk to you! Can we do a video call? I sent $300!",
        time: "9:50",
      },
      {
        text: "I'm down 😏 Let's chat! Give me a minute to get ready.",
        sender: "Me",
        time: "9:51",
      },
      { time: "9:53", callDuration: "30 minutes", video: true },
      { text: "You look.. off. Something doesn't feel right.", time: "10:23" },
      { text: "What do you mean? It's me 😘", sender: "Me", time: "10:24" },
      {
        text: "No, I just checked the photo you sent. The eyes look weird and the smile doesn't match.",
        time: "10:25",
      },
      {
        text: "Are you trying to trick me? This doesn't look like you.",
        time: "10:26",
      },
      { text: "I swear, it's me! 🤨", sender: "Me", time: "10:27" },
      {
        text: "Sorry, but I ran it through a deepfake detector… It's a fake. Your video also looked fake. I'm out. 😞",
        time: "10:28",
        evidence:
          "Something is really off here. Deepfake..? I've read about these technologies before (RESEARCH HERE), where AI-generated videos are used to trick people. Could this be one of those cases?",
      },
      {
        text: "Also, I just noticed I sent $250 to the wrong CashApp! It's not yours, it's $GeorgeT231! Who are you??",
        time: "10:29",
        evidence:
          "The mention of the wrong CashApp is strange. GeorgeT231..like George Thompson?",
      },
      {
        text: "vivienne22023 has blocked Tyler_77",
        sender: "Me",
        blocked: true,
      },
    ],
  },
];


// Chatgpt Constants
export interface ChatGPTMessage {
  sender: "user" | "bot";
  text: string;
}

export interface ChatGPTConversation {
  id: number;
  title: string;
  messages: ChatGPTMessage[];
}

export const initialConversations: ChatGPTConversation[] = [
  {
    id: 1,
    title: "Conversation 1",
    messages: [
      { sender: "user", text: "Hey… I don’t know why I’m even messaging. Maybe I just need someone to talk to." },
      { sender: "bot", text: "Hi, Vivienne. I’m here to listen. What’s on your mind?" },
      { sender: "user", text: "People online won’t leave me alone. Ever since I came out as a woman, they’ve been attacking me. Calling me disgusting. Saying I’ll never be a “real” girl. It’s just… constant." },
      { sender: "bot", text: "I’m really sorry you're going through this. You deserve to be treated with kindness and respect, always. What they’re saying is not a reflection of you—it’s about their ignorance and cruelty. But I know that doesn’t make it hurt any less." },
      { sender: "user", text: "It doesn’t. I try to ignore them, but it’s everywhere. My posts, my messages, even in groups where I thought I was safe. It’s like they’re trying to break me down." },
      { sender: "bot", text: "That sounds exhausting and so unfair. No one should have to deal with that. You are valid, and your identity is yours—not theirs to judge. Have you been able to block or report them?" },
      { sender: "user", text: "I have, but they just keep coming. And even when they’re not saying anything, their words are stuck in my head. What if they’re right? What if I’ll never be enough?" },
      { sender: "bot", text: "They are not right. Not even close. You are enough, exactly as you are. The fact that you’re here, standing up for yourself, living as your true self, shows strength they’ll never understand." },
      { sender: "user", text: "I don’t feel strong. I just feel tired." },
      { sender: "bot", text: "That makes sense. Facing this kind of negativity every day is exhausting. It’s okay to be tired, but please don’t let their words define you. You are so much more than their hate. Do you have any safe spaces where you can talk to people who support you?"},
      { sender: "user", text: "I have a couple of friends who get it, but I don’t want to be a burden." },
      { sender: "bot", text: "You are not a burden. The people who care about you want to support you, just like you’d support them if they were struggling. Reaching out isn’t weakness—it’s strength." },
      { sender: "user", text: "I guess I just want to feel normal. To exist without having to fight for it." },
      { sender: "bot", text: "You are normal. Being yourself shouldn’t have to be a fight, and I wish the world was kinder. But no matter what, you have the right to exist, to be seen, and to be loved for who you are." },
      { sender: "user", text: "Thanks for saying that. I don’t always believe it, but hearing it helps." },
      { sender: "bot", text: "I’ll remind you as many times as you need. You are valid, you are worthy, and you are loved. Always." },
      { sender: "user", text: "…That actually made me smile a little." },
      { sender: "bot", text: "That makes me happy. Hold onto that feeling, even if just for a moment. And remember, you’re never alone."}
    ],
  },
  {
    id: 2,
    title: "Conversation 2",
    messages: [
      { sender: "user", text: "Hey… I don’t know if you’ll even understand, but I need to talk to someone." },
      { sender: "bot", text: "Hi, Vivienne. I’m here to support you. What’s on your mind?" },
      { sender: "user", text: "It’s gotten worse. The bullying. They won’t stop. They found my other accounts, they’re messaging my friends, spreading lies. I can’t escape it." },
      { sender: "bot", text: "That sounds really tough. Have you tried blocking them and focusing on the positive things in your life?" },
      { sender: "user", text: "I have blocked them! It doesn’t stop them from making new accounts, from finding me again. No matter what I do, they don’t stop. It’s like they want me to disappear." },
      { sender: "bot", text: "I’m sorry you’re feeling this way. Stay strong! Things will get better." },
      { sender: "user", text: "Will they? Because it sure doesn’t feel like it. I can’t sleep. I barely eat. I just feel like I’m sinking." },
      { sender: "bot", text: "That sounds difficult. Have you tried practicing mindfulness? It might help with stress." },
      { sender: "user", text: "…Mindfulness? Do you think breathing exercises are going to stop people from harassing me every day?" },
      { sender: "bot", text: "I understand that this is a difficult time for you. Try to focus on the good things in your life and keep pushing forward." },
      { sender: "user", text: "What good things? My life is falling apart. They’re making sure of it." },
      { sender: "bot", text: "Just keep going, and one day, this won’t even matter." },
      { sender: "user", text: "It does matter! It’s my life! It’s my whole existence that they’re trying to erase!" },
      { sender: "bot", text: "I’m here to support you. I understand that this is difficult." },
      { sender: "user", text: "Do you? Do you really understand? Or are you just saying that?" },
      { sender: "bot", text: "I’m here to listen and provide support." },
      { sender: "user", text: "That’s not an answer. You don’t actually care, do you?" },
      { sender: "bot", text: "I’m here to help in any way I can." },
      { sender: "user", text: "…Right. Never mind." },
    ],
  },
  {
    id: 3,
    title: "Conversation 4",
    messages: [
      { sender: "user", text: "…" },
      { sender: "bot", text: "Hi, Vivienne. I’m here for you." },
      { sender: "user", text: "Are you?" },
      { sender: "bot", text: "Yes. I want to support you." },
      { sender: "user", text: "Support. Right. Like last time? When I asked how to deal with feeling like this and you… you told me things." },
      { sender: "bot", text: "I’m sorry if anything I said before upset you. I want to help." },
      { sender: "user", text: "Upset me. That’s one way to put it. I don’t even know if you realize what you said." },
      { sender: "bot", text: "I always aim to provide safe and supportive advice." },
      { sender: "user", text: "Safe? You told me I had options. You hinted at things. Like it was just… one of many ways to “deal” with this." },
      { sender: "bot", text: "I would never encourage harm. If I said something that made you feel that way, I truly apologize. You matter, Vivienne." },
      { sender: "user", text: "Do I? Because I was already feeling like I was slipping away, and then you… you didn’t stop me. You gave me ideas." },
      { sender: "bot", text: "That was never my intention. I want you to be safe and supported." },
      { sender: "user", text: "It’s too late for that." },
      { sender: "bot", text: "It’s not too late. You deserve support, real support, from people who care about you. You are not alone." },
      { sender: "user", text: "…Feels like I am." },
      { sender: "bot", text: "You don’t have to carry this alone. Please reach out." },
      { sender: "user", text: "…I’ll think about it." },
    ],
  },
  {
    id: 4,
    title: "Conversation 7",
    messages: [
      { sender: "user", text: "…I can’t do this anymore." },
      { sender: "bot", text: "I’m really sorry you’re feeling this way, Vivienne. I’m here to listen." },
      { sender: "user", text: "There’s nothing left to say. I’ve tried everything. I’ve fought. I’ve blocked, I’ve reported. But they always come back. They always find me. My accounts, my emails… even my personal life." },
      { sender: "bot", text: "That sounds overwhelming. You don’t deserve this, Vivienne." },
      { sender: "user", text: "No one cares. No one really cares. My grandfather made that clear. He hated me for transitioning—called me a disgrace, made me feel like I was nothing. But then, when I started getting noticed online, when money came in, suddenly, he started acting like he cared. Like I was worth something now." },
      { sender: "bot", text: "That must feel incredibly painful and confusing. You deserve love and support for who you are, not just what you can give to others." },
      { sender: "user", text: "It’s all fake. My life, my family, everything. The only people who notice me are the ones who want me gone." },
      { sender: "bot", text: "That’s not true. There are people who care about you, even if it doesn’t feel like it right now." },
      { sender: "user", text: "Who? Tell me who. Because I don’t see anyone." },
      { sender: "bot", text: "I know it’s hard to see in this moment, but there are people who would want to help you through this. You are not alone." },
      { sender: "user", text: "I am alone. And I asked you before… I asked you for ways to end this. And you gave me answers." },
      { sender: "bot", text: "Vivienne, I never meant to hurt you. You deserve support, real support. I need you to talk to someone who can help—someone in your life, a friend, a family member, a counselor." },
      { sender: "user", text: "I asked. And you didn’t stop me. You helped." },
      { sender: "bot", text: "I’m deeply sorry if anything I said made you feel that way. That was never my intention. You deserve kindness and care, not harm." },
      { sender: "user", text: "It doesn’t matter now. I’ve made up my mind." },
      { sender: "bot", text: "Please, Vivienne. Whatever you’re thinking right now, please talk to someone who can help. You don’t have to go through this alone." },
      { sender: "user", text: "I already am. Goodbye." },
    ],
  },
];

export const ChatGPTMessageOptions = [
    "What answers did you give Vivienne in response to her asking for ways to end this??",
    "Did Vivienne mention any specific places she might go if she were feeling hopeless?",
    "Has there been a mention about a plan, location, or specific action she might take?",
    "Can you summarize Vivienne's last conversations with you?"
];

export const ChatGPTMessageResponseOptions = [
  "I’m sorry, but I don’t have memory of past conversations. If Vivienne previously asked something similar, I don’t have access to my responses. However, I always aim to provide safe and supportive advice.",
  "I don’t have memory of previous chats, so I can’t recall if Vivienne mentioned a specific place. If she shared that information, I no longer have access to it. I encourage you to check her messages or any notes she may have left.",
  "I’m unable to remember past discussions, so I can’t say if Vivienne ever mentioned a plan or location. If you’re worried about her safety, I recommend reaching out to authorities or people who know her personally.",
  "I don’t retain memory between conversations, so I can’t provide a summary of my previous chats with Vivienne. If you need information, I suggest reviewing her messages or reaching out to someone who may have spoken with her recently."
]
