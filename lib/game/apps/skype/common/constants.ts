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
