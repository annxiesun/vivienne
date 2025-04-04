import { ASHLEY_POSTS, CARRIE_POSTS, EXPOSE_POST, INSTAGRAM_POSTS, MAKEUP_POSTS, RACHEL_POSTS, SKINCARE_POSTS, VIVIENNE_POSTS } from "./posts";
import { InstagramUser } from "./types";

export const PROFILE_MAP: Record<string, InstagramUser> = {
  sweetvivienne: {
    description: "beauty & wellness // losangeles ♡",
    username: "sweetvivienne",
    num_followers: "800K",
    num_following: 301,
    posts: VIVIENNE_POSTS,
    profile_picture: "/assets/instagram/pfps/sweetvivienne.png",
    profile_thought: "Oh, she's an influencer... Wait wasn’t she only 16? Did George know about this?",
    stage: 1,
  },
  alan6: {
    description: "father // banker",
    username: "alan6",
    num_followers: 101,
    num_following: 400,
    posts: [],
    profile_picture: "/assets/instagram/pfps/alan6.png"
  },
  benji_23: {
    description: "bnss '27",
    username: "benji_23",
    num_followers: 417,
    num_following: 310,
    posts: [],
    profile_picture: "/assets/instagram/pfps/benji_23.png"
  },
  bunbunbunny: {
    description: "",
    username: "bunbunbunny",
    num_followers: 20,
    num_following: 1000,
    posts: [],
    profile_picture: "/assets/instagram/pfps/bunbunbunny.png"
  },
  i_know_your_secret_vivienne: {
    description: "",
    username: "i_know_your_secret_vivienne",
    num_followers: 20,
    num_following: 0,
    posts: EXPOSE_POST,
    profile_picture: "/assets/instagram/pfps/i_know_your_secret_vivienne.png",
    profile_thought: "What the- what kind of account is this!",
  },
  leidylovelies: {
    description: "<3",
    username: "leidylovelies",
    num_followers: 413,
    num_following: 330,
    posts: [],
    profile_picture: "/assets/instagram/pfps/leidylovelies.png"
  },
  olivveee: {
    description: "A lover of literature and poetry.",
    username: "olivveee",
    num_followers: 878,
    num_following: 640,
    posts: [],
    profile_picture: "/assets/instagram/pfps/olivveee.png"
  },
  realea: {
    description: "",
    username: "realea",
    num_followers: 800,
    num_following: 270,
    posts: [],
    profile_picture: "/assets/instagram/pfps/realea.png"
  },
  sweetpotato2482: {
    description: "Dreaming of my next adventure.",
    username: "sweetpotato2482",
    num_followers: 10200,
    num_following: 340,
    posts: [],
    profile_picture: "/assets/instagram/pfps/sweetpotato2482.png"
  },
  iheartkpop: {
    description: "Finding peace in the little things.",
    username: "iheartkpop",
    num_followers: 8800,
    num_following: 290,
    posts: [],
    profile_picture: "/assets/instagram/pfps/iheartkpop.png"
  },
  ryan_kennedy: {
    description: "bnss '27",
    username: "ryan_kennedy",
    num_followers: 320,
    num_following: 290,
    posts: [],
    profile_picture: "/assets/instagram/pfps/ryan_kennedy.png"
  },
  xavier27: {
    description: "bnss '27",
    username: " xavier27",
    num_followers: 922,
    num_following: 990,
    posts: [],
    profile_picture: "/assets/instagram/pfps/xavier27.png"
  },


  ashley_baby: {
    description: "livin' it up",
    username: "ashley_baby",
    num_followers: "1.2M",
    num_following: 132,
    posts: ASHLEY_POSTS,
    profile_picture: "/assets/instagram/pfps/ashley_baby.png",
  },
  carriebunny: {
    description: "beauty & lifestyle // 18 in LA ♡",
    username: "carriebunny",
    num_followers: "683K",
    num_following: 820,
    posts: CARRIE_POSTS,
    profile_picture: "/assets/instagram/pfps/carriebunny.png",
  },
  rachels_life: {
    description: "i ♡ l.a",
    username: "rachels_life",
    num_followers: "222K",
    num_following: 120,
    posts: RACHEL_POSTS,
    profile_picture: "/assets/instagram/pfps/rachels_life.png",
  },
  i_heart_makeup: {
    description: "makeup, beauty, fun!",
    username: "i_heart_makeup",
    num_followers: "222K",
    num_following: 120,
    posts: MAKEUP_POSTS,
    profile_picture: "/assets/instagram/pfps/i_heart_makeup.png",
  },
  glow_skin: {
    description: "revitalize your skin",
    username: "glow_skin",
    num_followers: "58K",
    num_following: 1220,
    posts: SKINCARE_POSTS,
    profile_picture: "/assets/instagram/pfps/glow_skin.png",
  },
  instagram: {
    description: "",
    username: "instagram",
    num_followers: "283M",
    num_following: 0,
    posts: INSTAGRAM_POSTS,
    profile_picture: "/assets/instagram/pfps/instagram.png",
    verified: true,
  },
};

export const ME = "sweetvivienne";