// START SCREEN CONSTANTS
export const introductionText: string[] = [
  "You're a technician in a quiet repair shop.",
  "An older man, Mr. George Thompson, brings in a damaged laptop. He claims it belongs to his granddaughter, Vivienne.",
  "She's been missing for a while, and he wants the laptop wiped.",
  "The laptop is in bad shape, but it's not the hardware that stands out. As you begin your work, you realize there's something strange about the apps and messages on it.",
  "Vivienne's life may hold more mysteries than you expected.",
  "Your task is simple: wipe the laptop clean.",
];

export const images: string[] = [
  "/assets/intro/repairshop.png",
  "/assets/intro/laptop.png",
  "/assets/intro/missing.png",
  "/assets/intro/files.png",
  "/assets/intro/missing.png",
  "/assets/intro/wipe.png",
];

// END SCREEN CONSTANTS
export const endings: { info: string; image: string }[][] = [
  // DID NOT WIPE + REPORTED
  [
    {
      info: "You explored the entire laptop without wiping data and learned Vivienne's fate.",
      image: "/assets/end/laptop.png",
    },
    {
      info: "You chose to report George Thompson to the authorities for impersonation of the deceased Vivienne.",
      image: "/assets/end/police.png",
    },
    {
      info: "Word spread quickly, and soon, no one wanted to trust a repairman who digs too deep. Your shop shuts down.",
      image: "/assets/end/closed.png",
    },
    {
      info: "But justice is served. The police arrest George, and during the investigation, they uncover Vivienne's body.",
      image: "/assets/end/handcuff.png",
    },
    {
      info: "She receives a proper funeral, and her story makes news headlines across the country.",
      image: "/assets/end/funeral.png",
    },
    {
      info: "The internet explodes with discussions about cyberbullying, identity theft, and the dangers Vivienne faced.",
      image: "/assets/end/news.png",
    },
    {
      info: "The world finally knows the truth. Vivienne gets to rest in peace.",
      image: "/assets/end/sky.png",
    },
  ],
  // WIPED + REPORTED (no suicide note?)
  [
    {
      info: "You reported George Thompson to the authorities, but you wiped a lot of evidence.",
      image: "/assets/end/laptop.png",
    },
    {
      info: "Without solid proof, the police dismiss your claims as baseless accusations.",
      image: "/assets/end/police2.png",
    },
    {
      info: "George, enraged by the allegations, takes legal action against you for defamation.",
      image: "/assets/end/judge.png",
    },
    {
      info: "Your repair shop is caught in the controversy, and customers stop coming.",
      image: "/assets/end/closed.png",
    },
    {
      info: "In the end, you're left bankrupt, with more questions than answers about Vivienne's fate.",
      image: "/assets/intro/missing.png",
    },
  ],
  // DID NOT WIPE + DID NOT REPORT
  [
    {
      info: "You explored the entire laptop and learned Vivienne's fate.",
      image: "/assets/end/laptop.png",
    },
    {
      info: "You pieced together the truth but chose to stay silent.",
      image: "/assets/end/puzzle.png",
    },
    {
      info: "Vivienne's story remains buried in the depths of her old laptop.",
      image: "/assets/intro/files.png",
    },
    {
      info: "George continues to impersonate her online, weaving a false legacy in her name.",
      image: "/assets/end/shadow.png",
    },
    {
      info: "You alone carry the weight of what you know, haunted by the secrets you'll never share.",
      image: "/assets/end/mirror.png",
    },
  ],
  // WIPED + DID NOT REPORT
  [
    {
      info: "You never uncovered the full truth about Vivienne.",
      image: "/assets/intro/missing.png",
    },
    {
      info: "With too many gaps in the story, you decide it's not your place to interfere.",
      image: "/assets/end/text.png",
    },
    {
      info: "George leaves with the laptop, and life moves on as if nothing ever happened.",
      image: "/assets/end/door.png",
    },
    {
      info: "But every now and then, you wonder: who was Vivienne, really? And what happened to her?",
      image: "/assets/intro/missing.png",
    },
  ],
  // WIPED LAPTOP (no option to report)
  [
    {
      info: "You wiped the laptop, just as George requested.",
      image: "/assets/end/delete.png",
    },
    {
      info: "No questions. No investigations. Just another job completed.",
      image: "/assets/intro/laptop.png",
    },
    {
      info: "Pleased with your work, George sends new customers your way, and business starts booming.",
      image: "/assets/end/money.png",
    },
    {
      info: "You never learn what truly became of Vivienne.",
      image: "/assets/intro/missing.png",
    },
    {
      info: "Perhaps it's better that way.",
      image: "/assets/intro/missing.png",
    },
  ],
];
