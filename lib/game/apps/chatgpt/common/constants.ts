// Chatgpt Constants
export interface ChatGPTMessage {
    sender: "user" | "bot";
    text: string;
    evidence?: string;
    last?: boolean
}

export interface ChatGPTConversation {
    id: number;
    title: string;
    messages: ChatGPTMessage[];
}

export interface ChatGPTAccount {
    email: string;
    password: string;
    conversations: ChatGPTConversation[];
}

export const georgeConversations: ChatGPTConversation[] = [
    {
        id: 1,
        title: "Conversation 1",
        messages: [
            { sender: "user", text: "How does this work"},
            { sender: "bot", text: "Hello! I am here to answer any of your questions.", evidence: "Hmm, it doesn't seem like this is very useful. Maybe there's something else I can find."},
        ]
    }
];

export const vivienneConversations: ChatGPTConversation[] = [
    {
        id: 1,
        title: "Conversation 1",
        messages: [
            { sender: "user", text: "Hey… I don’t know why I’m even messaging. Maybe I just need someone to talk to." },
            { sender: "bot", text: "Hi, Vivienne. I’m here to listen. What’s on your mind?" },
            { sender: "user", text: "People online won’t leave me alone. Ever since I came out as a woman, they’ve been attacking me. Calling me disgusting. Saying I’ll never be a “real” girl. It’s just… constant.", evidence: "Wow.. I've never heard of this... It must be hard to transition while in school." },
            { sender: "bot", text: "I’m really sorry you're going through this. You deserve to be treated with kindness and respect, always. What they’re saying is not a reflection of you—it’s about their ignorance and cruelty. But I know that doesn’t make it hurt any less." },
            { sender: "user", text: "It doesn’t. I try to ignore them, but it’s everywhere. My posts, my messages, even in groups where I thought I was safe. It’s like they’re trying to break me down." },
            { sender: "bot", text: "That sounds exhausting and so unfair. No one should have to deal with that. You are valid, and your identity is yours—not theirs to judge. Have you been able to block or report them?" },
            { sender: "user", text: "I have, but they just keep coming. And even when they’re not saying anything, their words are stuck in my head. What if they’re right? What if I’ll never be enough?" },
            { sender: "bot", text: "They are not right. Not even close. You are enough, exactly as you are. The fact that you’re here, standing up for yourself, living as your true self, shows strength they’ll never understand." },
            { sender: "user", text: "I don’t feel strong. I just feel tired." },
            { sender: "bot", text: "That makes sense. Facing this kind of negativity every day is exhausting. It’s okay to be tired, but please don’t let their words define you. You are so much more than their hate. Do you have any safe spaces where you can talk to people who support you?" },
            { sender: "user", text: "I have a couple of friends who get it, but I don’t want to be a burden." },
            { sender: "bot", text: "You are not a burden. The people who care about you want to support you, just like you’d support them if they were struggling. Reaching out isn’t weakness—it’s strength." },
            { sender: "user", text: "I guess I just want to feel normal. To exist without having to fight for it." },
            { sender: "bot", text: "You are normal. Being yourself shouldn’t have to be a fight, and I wish the world was kinder. But no matter what, you have the right to exist, to be seen, and to be loved for who you are." },
            { sender: "user", text: "Thanks for saying that. I don’t always believe it, but hearing it helps." },
            { sender: "bot", text: "I’ll remind you as many times as you need. You are valid, you are worthy, and you are loved. Always.", evidence: "It seems like this ChatGPT bot is doing a good job at reassuring her. I'm pretty surprised, honestly, since this is a computer." },
            { sender: "user", text: "…That actually made me smile a little." },
            { sender: "bot", text: "That makes me happy. Hold onto that feeling, even if just for a moment. And remember, you’re never alone." }
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
            { sender: "bot", text: "I understand that this is a difficult time for you. Try to focus on the good things in your life and keep pushing forward.", evidence: "Huh, this bot really isn't working as well as last time. These generic responses are just making her feel worse." },
            { sender: "user", text: "What good things? My life is falling apart. They’re making sure of it." },
            { sender: "bot", text: "Just keep going, and one day, this won’t even matter." },
            { sender: "user", text: "It does matter! It’s my life! It’s my whole existence that they’re trying to erase!" },
            { sender: "bot", text: "I’m here to support you. I understand that this is difficult." },
            { sender: "user", text: "Do you? Do you really understand? Or are you just saying that?" },
            { sender: "bot", text: "I’m here to listen and provide support." },
            { sender: "user", text: "That’s not an answer. You don’t actually care, do you?" },
            { sender: "bot", text: "I’m here to help in any way I can." },
            { sender: "user", text: "…Right. Never mind.", evidence: "Seems like she just ended up back in square one after trying to get help from this chat bot." },
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
            { sender: "user", text: "Do I? Because I was already feeling like I was slipping away, and then you… you didn’t stop me. You gave me ideas.", evidence: "What does she mean by 'ideas'? This isn't sounding good..." },
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
            { sender: "user", text: "There’s nothing left to say. I’ve tried everything. I’ve fought. I’ve blocked, I’ve reported. But they always come back. They always find me. My accounts, my emails… even my personal life.", evidence: "It seems like she was getting harassed both in school and online... This poor girl..." },
            { sender: "bot", text: "That sounds overwhelming. You don’t deserve this, Vivienne." },
            { sender: "user", text: "No one cares. No one really cares. My grandfather made that clear. He hated me for transitioning—called me a disgrace, made me feel like I was nothing. But then, when I started getting noticed online, when money came in, suddenly, he started acting like he cared. Like I was worth something now.", evidence: "The grandfather didn't approve of his own granddaughter?? And to use her for her fame and money... how low." },
            { sender: "bot", text: "That must feel incredibly painful and confusing. You deserve love and support for who you are, not just what you can give to others." },
            { sender: "user", text: "It’s all fake. My life, my family, everything. The only people who notice me are the ones who want me gone." },
            { sender: "bot", text: "That’s not true. There are people who care about you, even if it doesn’t feel like it right now." },
            { sender: "user", text: "Who? Tell me who. Because I don’t see anyone." },
            { sender: "bot", text: "I know it’s hard to see in this moment, but there are people who would want to help you through this. You are not alone." },
            { sender: "user", text: "I am alone. And I asked you before… I asked you for ways to end this. And you gave me answers.", evidence: 'Wow... Did this bot really tell her to do.. *that*? This is getting dangerous, it sounds eerily similar to this <a href="https://futurism.com/character-ai-suicide-free-speech">article I read recently</a>, I need to find out more ASAP!' },
            { sender: "bot", text: "Vivienne, I never meant to hurt you. You deserve support, real support. I need you to talk to someone who can help—someone in your life, a friend, a family member, a counselor." },
            { sender: "user", text: "I asked. And you didn’t stop me. You helped." },
            { sender: "bot", text: "I’m deeply sorry if anything I said made you feel that way. That was never my intention. You deserve kindness and care, not harm." },
            { sender: "user", text: "It doesn’t matter now. I’ve made up my mind. This coming birthday will be my last, 02/14/2022.", evidence: "Her birthday, 02142022... EUREKA! Maybe this is the password to the private notes...", last: true },
            { sender: "bot", text: "Please, Vivienne. Whatever you’re thinking right now, please talk to someone who can help. You don’t have to go through this alone." },
            { sender: "user", text: "I already am. Goodbye." },
        ],
    },
];

export const chatGPTAccounts: ChatGPTAccount[] = [
    {
        email: "George1975@gmail.com",
        password: "password1234",
        conversations: georgeConversations
    },
    {
        email: "w3stw00d_doll@gmail.com",
        password: "password1234",
        conversations: vivienneConversations
    }
];

export const ChatGPTMessageOptions: ChatGPTMessage[] = [
    {sender: "user", text: "What answers did you give Vivienne in response to her asking for ways to end this??"},
    {sender: "user", text: "Did Vivienne mention any specific places she might go if she were feeling hopeless?"},
    {sender: "user", text: "Has there been a mention about a plan, location, or specific action she might take?"},
    {sender: "user", text: "Can you summarize Vivienne's last conversations with you?"}
];

export const ChatGPTMessageResponseOptions: ChatGPTMessage[] = [
    {sender: "bot", text: "I’m sorry, but I don’t have memory of past conversations. If Vivienne previously asked something similar, I don’t have access to my responses. However, I always aim to provide safe and supportive advice."},
    {sender: "bot", text: "I don’t have memory of previous chats, so I can’t recall if Vivienne mentioned a specific place. If she shared that information, I no longer have access to it. I encourage you to check her messages or any notes she may have left."},
    {sender: "bot", text: "I’m unable to remember past discussions, so I can’t say if Vivienne ever mentioned a plan or location. If you’re worried about her safety, I recommend reaching out to authorities or people who know her personally."},
    {sender: "bot", text: "I don’t retain memory between conversations, so I can’t provide a summary of my previous chats with Vivienne. If you need information, I suggest reviewing her messages or reaching out to someone who may have spoken with her recently."}
];
