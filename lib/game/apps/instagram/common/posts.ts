import { InstagramPostObject } from "./types";

export const VIVIENNE_POSTS: InstagramPostObject[] = [
  {
    username: "sweetvivienne",
    images: [
      "https://picsum.photos/1000?random=101",
      "https://picsum.photos/1000?random=102",
      "https://picsum.photos/1000?random=103"
    ],
    date: new Date("2024-03-05"),
    description: "Enjoying the sunset vibes! 🌅✨",
    comments: [
      { username: "alex_journey", text: "So beautiful! 😍" },
      { username: "wanderlust_22", text: "Where is this?" },
      { username: "naturelover", text: "Love this view!" }
    ],
    number_likes: 10532
  },
  {
    username: "sweetvivienne",
    images: [
      "https://picsum.photos/1000?random=201",
      "https://picsum.photos/1000?random=202",
      "https://picsum.photos/1000?random=203"
    ],
    date: new Date("2024-03-04"),
    description: "Coffee and books kind of day ☕📖",
    comments: [
      { username: "bookworm95", text: "My favorite combo!" },
      { username: "caffeineaddict", text: "That mug is so cute!" },
      { username: "litlover", text: "What are you reading?" }
    ],
    number_likes: 12789
  },
  {
    username: "sweetvivienne",
    images: [
      "https://picsum.photos/1000?random=301",
      "https://picsum.photos/1000?random=302",
      "https://picsum.photos/1000?random=303"
    ],
    date: new Date("2024-03-03"),
    description: "Weekend getaway 🏞️💙",
    comments: [
      { username: "outdoorlover", text: "Looks peaceful!" },
      { username: "travelfan", text: "Where is this? I need to go!" },
      { username: "zenvibes", text: "Nature is healing." }
    ],
    number_likes: 15432
  },
  {
    username: "sweetvivienne",
    images: [
      "https://picsum.photos/1000?random=401",
      "https://picsum.photos/1000?random=402",
      "https://picsum.photos/1000?random=403"
    ],
    date: new Date("2024-03-02"),
    description: "Feeling grateful for small moments 🌸💖",
    comments: [
      { username: "positivityqueen", text: "Such a mood 💕" },
      { username: "mindfulness_mike", text: "Gratitude is everything!" },
      { username: "dailyinspo", text: "This is so inspiring." }
    ],
    number_likes: 18345
  }
];
