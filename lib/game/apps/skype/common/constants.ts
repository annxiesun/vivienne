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
    picture: "/assets/skype/profile.png",
    messages: [
      {
        text: "Vivienne? Is it really you? Everyone thought you disappeared! I am such a huge fan. 😍",
        time: "10:02",
        evidence:
          "I remember hearing rumours about Vivienne's disappearance. Why would she disappear and then return like this?",
      },
      {
        text: "I just needed a short break, but I am here now! By the way, I charge $250 per call and $100 per picture if you're interested. 💕",
        sender: "Me",
        time: "10:02",
      },
      {
        text: "I just sent $250. When can we start the call? I'm *so* excited...😏",
        time: "10:05",
        evidence:
          "Charging for calls and pictures? Weird. Maybe I should look at her profile..",
      },
      {
        text: "I'll call you in a minute, promise! ❤️",
        sender: "Me",
        time: "10:06",
      },
      {
        time: "10:07",
        callDuration: "1 hour 3 minutes",
      },
      {
        text: "That call was incredible... I'm still thinking about it. You have no idea how turned on I am right now...",
        time: "11:10",
      },
    ],
  },
  { name: "profile", picture: "", messages: [] }, // filler for click progression
  {
    name: "Jake44992",
    picture: "/assets/skype/profile.png",
    messages: [
      {
        text: "Please call me, Vivienne, I sent $250 😘😘",
        time: "11:34",
      },
      {
        text: "Give me one second babe ❤️",
        sender: "Me",
        time: "11:35",
      },
      {
        time: "11:37",
        callDuration: "57 minutes",
      },
      {
        text: "Your voice is driving me wild 😍 I've been thinking about this moment every day... It's even better than I imagined.",
        time: "12:34",
      },
      {
        text: "You sounded a little different though. Almost robotic. Are you sure this is really Vivienne?",
        time: "12:34",
        evidence:
          "It seems like something was off during the call. Could this really be Vivienne, or is someone mimicking her voice?",
      },
      {
        text: "I am real! Why would you even question that??",
        sender: "Me",
        time: "12:37",
      },
      {
        text: "Send me a picture to prove that it's you.",
        time: "12:38",
      },
      {
        text: "It's $100 per picture!",
        time: "12:40",
        sender: "Me",
      },
      {
        text: "I've already paid $250 for the call. Why are you charging again for a picture? Is something wrong?",
        time: "12:41",
      },
      {
        text: "It's just how things work around here! Don't worry about it. 💋",
        sender: "Me",
        time: "12:45",
      },
      {
        text: "Something feels off. Why does this feel like a scam? What's really going on?",
        time: "12:46",
        evidence:
          "First, the weird vibe during the call, and now the request for another payment just for a picture after $250 was already sent. It's starting to feel like she's just playing a game—taking money without delivering anything real in return. The whole situation doesn't add up.",
      },
    ],
  },
  {
    name: "Alex5531",
    picture: "/assets/skype/profile.png",
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
      { text: "What does $100 get me?", time: "4:27" },
      {
        text: "For $100, you can get a teasing shot—nothing too crazy. If you want more, we can talk 😌",
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
        text: "Give me a sec 😉 Let's make it special.",
      },
      {
        time: "4:35",
        sender: "Me",
        images: ["/assets/skype/girl.png", "/assets/skype/girl2.png"],
      },
      {
        time: "4:36",
        text: "You look so hot..😈",
      },
      {
        time: "4:39",
        text: "Wait, something feels off... are these photos real?",
      },
      {
        time: "4:45",
        sender: "Me",
        text: "Huh? What do you mean? They're all me 🤨",
      },
      {
        time: "4:46",
        text: "Idk. Your face and hands glitch in the first picture, and the second picture looks fake.",
        evidence:
          "These are classic signs of AI-generated images. The weird hands and face glitches just don't add up. Also with the weird voice calls..it seems like someone is impersonating Vivienne.",
      },
      {
        time: "4:37",
        sender: "Me",
        text: "You're overthinking. If you want more, I'll give you them for $50 a piece, but no more questions. 😏",
      },
      {
        time: "4:38",
        text: "Are you even real? 😳",
      },
    ],
  },
  {
    name: "Ryan_07",
    picture: "/assets/skype/profile.png",
    messages: [
      {
        text: "Vivienne? Omg, is this really you?! 😍 I've been waiting to talk to you for so long...I sent you $250",
        time: "10:01",
      },
      {
        text: "Hey babe 😉 It's really me, just like you wanted.",
        sender: "Me",
        time: "10:02",
      },
      {
        time: "10:03",
        callDuration: "1 hour 1 minute",
      },
      {
        text: "I can't believe I'm actually talking to you… Your voice is even hotter than I expected.",
        time: "10:03",
      },
      {
        text: "It sounded off at some parts though? Like..robotic",
        time: "10:03",
        evidence:
          "This is the second time someone's mentioned her voice sounding robotic. Maybe that's why this profile was reported as a deepfake? It's starting to feel less like a coincidence and more like someone is using AI to impersonate her.",
      },
      {
        text: "Haha, it's just the mic quality, baby 😘 But trust me, I'm all real, just like you wanted. What's on your mind?",
        sender: "Me",
        time: "10:04",
      },
      {
        text: "I don't know… something feels off. Can we do a video call? I need to see your beauty in full. You're just too perfect.",
        time: "10:05",
      },
      {
        text: "Ugh, I'm not camera-ready right now. But I promise, it's definitely me.",
        sender: "Me",
        time: "10:06",
      },
      {
        text: "I just sent another $250, let's call again please.",
        time: "10:07",
      },
      {
        time: "10:10",
        text: "Sure babe, hold on a sec. 😘",
        sender: "Me",
      },
      {
        time: "10:10",
        callDuration: "24 minutes",
      },
      {
        time: "10:35",
        text: "That call felt good, but something still seems off. Are you sure it's really you?",
      },
      {
        text: "What do you mean, babe? It's really me 😏",
        sender: "Me",
        time: "10:36",
      },
      {
        time: "10:37",
        text: "I recorded our call and ran your voice through an AI detector. It says it's synthetic.",
        evidence: `This could be why this profile was reported as a deepfake. If the voice is synthetic, someone is clearly trying to impersonate Vivienne. I've heard about many <a href="https://www.app.com/story/news/crime/2025/01/17/ai-used-to-clone-sons-voice-scam-attempt-philadelphia-father/77774861007/">scams using AI voice impersonation</a> lately...`,
      },
      {
        text: "What? No way! That's insane. Why would I fake my own voice? 🤨",
        sender: "Me",
        time: "10:38",
      },
      {
        time: "10:39",
        text: "I'm telling you, it didn't sound real. Prove it. Video call me right now.",
      },
      {
        text: "I'm not camera-ready, babe. Don't be like this..",
        sender: "Me",
        time: "10:40",
      },
      {
        time: "10:41",
        text: "I need proof. I'm done if you don't show me who you really are.",
      },
      {
        text: "You're overthinking, stop it. It's me. 😡",
        sender: "Me",
        time: "10:42",
      },
      {
        time: "10:47",
        text: "I've had enough of this. I'm done playing games. I'm going to find out who's really behind this and expose you.",
        evidence:
          "With everything that's happened—the robotic voice, the sketchy photos—it's clear something isn't right. Whoever this is, they're hiding something.",
      },
      {
        text: "You won't get away with this! I'm real. Don't you dare accuse me of being fake.",
        sender: "Me",
        time: "10:48",
      },
      {
        text: "vivienne22023 has blocked Ryan_07",
        sender: "Me",
        blocked: true,
      },
    ],
  },
  {
    name: "Tyler_77",
    picture: "/assets/skype/profile.png",
    messages: [
      { text: "Vivienne?! Is that really you? 😱", time: "9:45" },
      { text: "Haha, yep, it's really me 😉", sender: "Me", time: "9:46" },
      {
        text: "I'm a huge fan! I can't believe this is happening! Can you send me a pic? I sent $100 😍",
        time: "9:47",
      },
      { text: "Sure thing 😘 One second!", sender: "Me", time: "9:48" },
      {
        time: "9:49",
        sender: "Me",
        images: ["/assets/skype/girl.png"],
      },
      {
        text: "Wow... You're even more beautiful than I imagined. Can we video call? I just sent $300! I need to see you for real 😍",
        time: "9:50",
      },
      {
        text: "Aww, you're so sweet 😏 Let me get ready real quick!",
        sender: "Me",
        time: "9:51",
      },
      { time: "9:53", callDuration: "30 minutes", video: true },
      { text: "Wait… something feels off. You looked… weird.", time: "10:23" },
      {
        text: "Weird? What do you mean? It's me, silly 😘",
        sender: "Me",
        time: "10:24",
      },
      {
        text: "I don't know… your eyes didn't track right, and your smile felt kinda… off. Like it didn't match your face?",
        time: "10:25",
        evidence: `It seems like whoever is impersonating Vivienne is using some kind of deepfake technology. <a href="https://arstechnica.com/information-technology/2024/08/new-ai-tool-enables-real-time-face-swapping-on-webcams-raising-fraud-concerns/">I've read about this online</a>, where people can swap faces and mimic voices with alarming accuracy. This isn't just some glitch—it's a deliberate attempt to trick all these people. Whoever's behind this could be using deepfakes to steal Vivienne's identity.`,
      },
      {
        text: "You're overthinking, babe. It's just the video quality. Don't be weird 😏",
        sender: "Me",
        time: "10:26",
      },
      {
        text: "Are you trying to trick me? This doesn't look like you.",
        time: "10:26",
      },
      {
        text: "You're acting crazy. If you don't believe me, we can call again. Just send another $200 😉",
        sender: "Me",
        time: "10:28",
      },
      {
        text: "Sorry, but I ran your video through a deepfake detector… and it flagged it as fake. What the hell is going on?",
        time: "10:29",
      },
      {
        text: "Babe, stop! Why would I fake my own video? That's insane! 😡",
        sender: "Me",
        time: "10:30",
      },
      {
        text: "Wait… I just checked. I sent $250 to the wrong CashApp. It wasn't yours—it was $GeorgeT231. Who the hell is George?!",
        time: "10:31",
        evidence:
          "GeorgeT231… Wait a second. I *know* George. He's the guy who brought in this laptop! This can't be a coincidence.",
      },
      {
        text: "Wtf are you talking about? You're being weird.",
        sender: "Me",
        time: "10:32",
      },
      {
        text: "I know you're trying to mess with me, but I'm done. I'm reporting you.",
        time: "10:34",
      },
      {
        text: "vivienne22023 has blocked Tyler_77",
        sender: "Me",
        blocked: true,
      },
    ],
  },
];
