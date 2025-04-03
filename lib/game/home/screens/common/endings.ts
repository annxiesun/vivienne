// END SCREEN CONSTANTS
export const sentEmailEnding = (sentEmail: boolean) => ({
  info: sentEmail
    ? "The email request to be forgotten was approved, and Vivienne's leaked data was successfully removed from the internet by the EU, some of it may still remain."
    : "The leaked data about Vivienne still remains online.",
  image: sentEmail ? "/assets/end/removed.png" : "/assets/intro/missing.png",
});

// ENDINGS:
// 1: reported + wiped
// 2: reported + !wiped
// 3: !reported + wiped
// 4: !reported + !wiped
// 5: wiped first (no gameplay)
export const getEnding = (
  reported: boolean,
  wiped: boolean,
  foundNote: boolean,
  sentEmail: boolean,
  defaultEnding: boolean = false
): { info: string; image: string }[] => {
  const emailEnding = sentEmailEnding(sentEmail);

  if (defaultEnding) {
    // Default ending (i.e. if player wipes without investigating anything)
    return [
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
    ];
  }

  if (reported && wiped) {
    return [
      emailEnding,
      {
        info: "You wiped the entire laptop and reported George Thompson to the authorities for impersonating Vivienne.",
        image: "/assets/end/laptop.png",
      },
      ...(foundNote
        ? [
            {
              info: "You take the suicide note to the police, and they uncover Vivienne's body.",
              image: "/assets/end/text.png",
            },
            {
              info: "With concrete proof, George is arrested for fraud and identity theft.",
              image: "/assets/end/handcuff.png",
            },
            {
              info: "Vivienne receives a proper burial, and the world mourns her loss.",
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
          ]
        : [
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
          ]),
    ];
  }

  if (reported && !wiped) {
    return [
      emailEnding,
      {
        info: "You did not wipe the laptop and reported George Thompson to the authorities for impersonating Vivienne.",
        image: "/assets/end/laptop.png",
      },
      {
        info: "Word spread quickly, and soon, no one wanted to trust a repairman who digs too deep. Your shop shuts down.",
        image: "/assets/end/closed.png",
      },
      {
        info: "But justice is served. The police arrest George for fraud and identity theft.",
        image: "/assets/end/handcuff.png",
      },
      ...(foundNote
        ? [
            {
              info: "During the investigation, the police find Vivienne's body.",
              image: "/assets/end/police.png",
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
          ]
        : [
            {
              info: "Vivienne's whereabouts remain a mystery, leaving everyone wondering if she vanished on her own or was lost to something darker.",
              image: "/assets/intro/missing.png",
            },
          ]),
    ];
  }

  if (!reported && wiped) {
    return [
      emailEnding,
      {
        info: "You wiped the entire laptop and did not report George Thompson to the authorities for impersonating Vivienne.",
        image: "/assets/end/laptop.png",
      },
      ...(foundNote
        ? [
            {
              info: "You found Vivienne's note and quietly reported her death.",
              image: "/assets/end/text.png",
            },
            {
              info: "The police investigate and find her body, but George walks free.",
              image: "/assets/end/police.png",
            },
            {
              info: "With Vivienne's death now public, George can no longer impersonate her.",
              image: "/assets/end/funeral.png",
            },
            {
              info: "Pleased with your work, George refers new customers to you, but your conscience is uneasy.",
              image: "/assets/end/money.png",
            },
          ]
        : [
            {
              info: "George continues to impersonate Vivienne, and you live with the knowledge of his deception.",
              image: "/assets/end/shadow.png",
            },
            {
              info: "Pleased with your work, George refers new customers to you, but your conscience is uneasy.",
              image: "/assets/end/money.png",
            },
            {
              info: "Vivienne's whereabouts remain a mystery, leaving everyone wondering if she vanished on her own or was lost to something darker.",
              image: "/assets/intro/missing.png",
            },
          ]),
    ];
  }

  if (!reported && !wiped) {
    return [
      emailEnding,
      {
        info: "You did not wipe the laptop and did not report George Thompson to the authorities for impersonating Vivienne.",
        image: "/assets/end/laptop.png",
      },
      ...(foundNote
        ? [
            {
              info: "You found Vivienne's note and quietly reported her death.",
              image: "/assets/end/text.png",
            },
            {
              info: "The police investigate and find her body, but George walks free.",
              image: "/assets/end/police.png",
            },
            {
              info: "With Vivienne's death now public, George can no longer impersonate her.",
              image: "/assets/end/funeral.png",
            },
            {
              info: "You did the right thing, but the unsettling truth still lingers in your mind.",
              image: "/assets/end/mirror.png",
            },
          ]
        : [
            {
              info: "You kept quiet about George's impersonation, and the truth stays hidden.",
              image: "/assets/end/puzzle.png",
            },
            {
              info: "Vivienne's story remains locked in the laptop.",
              image: "/assets/intro/files.png",
            },
            {
              info: "George continues to impersonate her online, weaving a false legacy in her name.",
              image: "/assets/end/shadow.png",
            },
            {
              info: "You are the only one who knows the truth.",
              image: "/assets/end/mirror.png",
            },
          ]),
    ];
  }
};
