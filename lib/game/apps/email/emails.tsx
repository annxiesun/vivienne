import { useEffect, useState } from "react";

export type Email = {
  index: number;
  from: string;
  fromEmail: string;
  to: string;
  toEmail: string;
  subject: string;
  body?: string;
  content: string | JSX.Element | JSX.Element[];
  date: string;
  end: boolean;
  note?: string;
  read: boolean;
  folder: "Inbox" | "Sent" | "Trash" | "Drafts";
};

export const headers = ["Inbox", "Trash", "Sent", "Drafts"];

function PDFViewer({ file }) {
  const [src, setSrc] = useState(file);

  useEffect(() => {
    setSrc(`${file}?ts=${Date.now()}`);//+ "?ts=" + Date.now()); // Unique URL forces reload
  }, [file]);

  return (
    <object data={src} type="application/pdf" width="100%" height="800px">
      <p>Alternative text - <a href={src} target="_blank" rel="noopener noreferrer">View PDF</a></p>
    </object>
  );
}

const googleEmail = (<img src="/assets/email/goog_temp.png" alt="Google" />);
const igEmail = (<img src="/assets/email/ig_temp.png" alt="Instagram" />);
const skypeEmail= (<img src="/assets/email/skype_temp.png" alt="Skype" />);

const maybellineEmailTextPT1 = `Hi Vivienne,


I hope you're doing well! My name is Sarah, and I’m part of the marketing team here at Maybelline. We’ve been following your amazing content, and we absolutely love the way you engage with your audience! Your style and authenticity really resonate with the beauty community.  
    
We’re reaching out to see if you'd be interested in collaborating with us for an exciting opportunity. We’re about to launch our new Lash Sensational® Sky High Mascara and would love for you to try it out and share your thoughts with your followers. We believe your experience and perspective would be a perfect fit for this product launch.  

` 
const maybellineEmailTextPT2 = `
If this sounds like something you'd be interested in, we'd be happy to provide more details and discuss how we can work together. Please let us know if you'd like to learn more!  
    
Looking forward to hearing from you soon.  
    
Best regards,
Sarah Lee  
Marketing Team, Maybelline  
Maybelline New York | 10 Hudson Yards, New York City, NY, United States | 1-888-462-9235` 

const maybellineEmail = (
<div>
  <p className="mt-4 text-gray-200 whitespace-pre-wrap">{maybellineEmailTextPT1}</p>
  <img src="/assets/email/mascara.jpg" alt="Maybelline" />
  <p className="mt-4 text-gray-200 whitespace-pre-wrap">{maybellineEmailTextPT2}</p>
  <img src="/assets/email/maybelline.jpg" alt="Maybelline" />
</div>
);


const victoriaEmailText = `Hello Vivienne,

I hope this email finds you well, what a beautiful name you've chosen, if only you were actually fit for the name, Alexander. You can run, but you cannot hide. I overheard your argument with your parents in the Principal's office yesterday and what all the other parents have been gossiping about.

You thought your records were private? Think again. People are watching, and they’re not happy. We know what you’ve done, where you’ve been, and what you’re trying to keep secret. I know you’re a boy trying to be a wh*** to seduce my son and all the other unsuspecting men you've lured. I can’t believe you! You tricked my son into sending you a candygram on Valentines and asking you out to homecoming. You need to stay away. You will corrupt his pure innocent soul. I can’t let you fool him anymore.

I had a conversation with my best friend, you might know her! She works at the hospital. It would be a shame if certain details about your "treatment" became public. Maybe your family should know. Maybe your little online fans should, too. Maybe the whole world should see what’s really going on.

I can't let you hurt my son or anyone else for much longer. You have a choice—do the right thing, or deal with the consequences.

We’ll be in touch.

Victoria Elizabeth Cox
  `

const victoriaEmail = (
    <div>
      <p className="mt-4 text-gray-200 whitespace-pre-wrap">{victoriaEmailText}</p>
      <p className="mt-4 text-gray-400 whitespace-pre-wrap">{"Attachment"}</p>
      {/* <iframe
      src={"/assets/email/mock_medical_report.pdf"}
      width="100%"
      style={{ border: 'none' }}
    /> */}
      <PDFViewer file="/assets/email/mock_medical_report.pdf"/>
    </div>
    );


const gdprEmailText = `Dear Comissioner,

I hope this email finds you well. I am writing to formally request the erasure of my personal data, in accordance with the General Data Protection Regulation (GDPR), specifically under the Right to Erasure (Article 17).
`


function GDPRRequestEmail() {
  const recipient = "Dear Supervisor,";
  const introduction = "I hope this email finds you well. I am writing to formally request the erasure of my personal data, in accordance with the General Data Protection Regulation (GDPR), specifically under the Right to Erasure (Article 17).";

  const requestDetails = "Due to the highly sensitive nature of my personal and medical information, I request that all records, documents, and data pertaining to my identity, treatment history, or any private communications shared with you or your organization be permanently deleted.";

  const dataToErase = [
    "Personal health records, including any medical treatments or surgeries related to my gender transition.",
    "Any associated personal details or identifying information linked to my medical history or identity.",
    "Any public or private records that contain my name, contact information, or other personal identifiers."
  ];

  const justification = "This request is made under the premise that this data is no longer necessary for the purposes for which it was originally collected, and I no longer consent to its processing. Furthermore, I object to the use of my data and its continued presence in your records.";

  const closingRequest = "I would appreciate it if you could confirm receipt of this email and take the necessary steps to erase this data within the required one-month timeframe, as outlined by the GDPR. Should you require any further documentation or identification to process this request, please let me know at your earliest convenience.";

  const closing = "Thank you for your prompt attention to this matter. I look forward to your confirmation that my personal data has been successfully erased.";
  const signature = "Sincerely,\nVivienne";

  return (
    <div className="text-gray-200 whitespace-pre-wrap">
      <p>{recipient}</p>
      <p className="mt-4">{introduction}</p>
      <p className="mt-4">{requestDetails}</p>
      <p className="mt-4">The information I am requesting to be erased includes, but is not limited to:</p>
      <ul className="list-disc list-inside mt-2">
        {dataToErase.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-4">{justification}</p>
      <p className="mt-4">{closingRequest}</p>
      <p className="mt-4">{closing}</p>
      <p className="mt-4">{signature}</p>
      <p className="mt-4 text-gray-400 whitespace-pre-wrap">{"Attachment"}</p>

      <PDFViewer file="/assets/email/RIGHT-TO-ERASURE-REQUEST-FORM.pdf"/>

    </div>
  );
}

export const initialEmail: Email[] = [
  {
    index: 0,
    note: `This email is from just now, must be when I signed in.`,
    read: false,
    end: false,
    from: "Google",
    fromEmail:"no-reply@accounts.google.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "Security alert",
    body: 'New sign-in to your account',
    content: googleEmail, // update to edited
    date: "12/27/2025", // UPDATE DATE TO CURRENT DATE AND TIME
    folder: "Inbox",
  },
  {
    index: 1,
    note: `This also looks like it's coming from me`,
    end: false,
    read: false,
    from: "Instagram",
    fromEmail: "security@mail.instagram.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "New login to Instagram on Max OSX",
    body:'We noticed a new login, w3stw00d_doll',
    content: igEmail, // update to edited
    date: "12/28/2025", // UPDATE DATE
    folder: "Inbox",
  },
  {
    index: 2,
    note: `This doesn't look like my doing, I haven't looked into Skype yet. 
Strange... 
Didn't she go missing before this? Why would she change her password?`,
    end: false,
    read: false,
    from: "Skype account team",
    fromEmail: "no-reply@notifications.skype.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "Skype account password change",
    body: "Did you attempt to change your password?",
    content: skypeEmail, // update to edited
    date: "09/08/2025", // UPDATE DATE
    folder: "Inbox",
  },
  {
    index: 3,
    end: true,
    read: false,
    from: "Maybelline Marketing Team",
    fromEmail: "marketing@maybelline.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "Exciting Collaboration Opportunity with Maybelline!",
    body: maybellineEmailTextPT1,
    content: maybellineEmail,
    date: "12/28/2021", // UPDATE DATE
    folder: "Inbox",
    note: `Wow, this is a huge sponsorship! She must really be popular! Why would she leave this all behind? 
    
    Her inbox is also strangely empty for someone so popular... Let's see what's in her Trash folder`,
  },
  {
    index: 4,
    note: `Weird... AND CREEPY... 
    Tom? Medical records? Lying? What on earth he talking about, how did he get Vivienne's email if they met on...Tinder? Let's dig further`,
    end: false,
    read: false,
    body: null,
    from: "Gregory Beck",
    fromEmail: "ggBeck@icloud.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "You Lied...",
    content: `I don’t know what kind of game you’re playing, but you should’ve told me the truth from the start. Now I need to wash the FILTH of your unholy existence from me and I'd like to get rid of it altogether. 

You think people won’t find out? You think you can just trick people like that? 
    
I saw those medical records with my own eyes, so don't even try and play it all off. I’m disgusted that I even entertained a relationship with you.

I know where you’ve been. These dating apps aren’t as private as you think, don't think you're safe behind the screen. Maybe other people on Tinder should know too. I saw you tried reporting me after my first email, it was a lot easier to find than you think. I ought to report you for falsifying your gender and profile.

Maybe I should make sure they do know who you REALLY are… Alexander

You messed with the WRONG person.
    
    -G
`,
    date: "01/31/2022",
    folder: "Trash",
  },
  {
    index: 5,
    note: "This email was definitely written by a 🤡. WOW her friend was MEAN, why is everyone calling her a liar? I think she's just J-E-A-L-O-U-S",
    end: false,
    read: false,
    body: null,
    from: "Kaylee Baylor",
    fromEmail: "Kaylee_baybee444@gmail.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "🤡🤡🤡",
    content: `We are SO Done

We all can't believe you were lying to us all along. My mum and I heard and saw everything from Callum's mom, its disgusting how you pump yourself with drugs everyday just to look a mess.

UGH GROSS 🤢🤢🤢

To think I thought you were my closest friend. I can’t believe you lied to us. We stood by you, supported you, liked every photo, commented on every post, resposted every reel and thought we actually knew you. But you made fools of us all. 

You built your whole persona on a lie, and we won’t be a part of it anymore. I can't believe I BACKED OFF of Callum Cox and let you wrap him around your fake little finger. 

ALL WHEN I LIKED HIM FIRST, FOR YEARS!!!!

DID YOU REALLY THINK HE WOULD LIKE YOU FOR WHO YOU WERE? 
YOU JUST HAD TO TAKE HIM FROM ME DIDN'T YOU? 
GET HIM INVOLVED WITH YOUR DISGUSTING SCHEMES, TO KEEP YOUR COVER SO YOU COULD PLAY DRESS UP!

People deserve to know the truth. Your followers? They won’t be your followers for much longer when they find out you're a crossdressing freak. We’re making sure of that. We’re spreading the word, reporting your accounts, and reaching out to every brand you’ve ever worked with. Nobody wants to support a fraud.
Consider this the end—not just of our friendship, but of everything you’ve built. You don’t get to manipulate people and walk away unscathed.


Enjoy the downfall. You earned it.

Bye 🤡
`,
    date: "01/27/2022",
    folder: "Trash",
  },
  {
    index: 6,
    note: `This is serious, how could someone give away medical information like that? Let's see what the Principal was saying to Vivienne and her Parents. I have seen cases of leaked medical records of trans individuals it's alarming <a href="https://www.rochesterfirst.com/news/health/hospital-sues-missouris-top-prosecutor-over-trans-care-data/">This happened in Kansas</a> and [insert another link]`,
    end: false,
    read: false,
    from: "Victoria Elizabeth Cox",
    fromEmail: "victoria.elizabeth.cox@outlook.com",
    to:"Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    body: victoriaEmailText,
    subject: "Notice",
    content: victoriaEmail,
    date: "01/25/2022",
    folder: "Trash",
  },
  {
    index: 7,
    note: "I didn't know principals and schools monitored their students this closely. Wait, I have seen school surveillance systems before though [link]", 
    end: true,
    body: null,
    read: false,
    from: "Principal Edmund Hughes",
    fromEmail: "ehughes@belmontnorthss.edu",
    to: "Vivienne Thompson",
    toEmail:"w3stw00d_doll@gmail.com",
    subject: "[Urgent] Concerns Regarding Your Recent Communications",
    content: `Dear Alexander Thompson,

I see you have recently expressed your preferred name to be Vivienne, but for official correspondences we will refer to you by your legal name, Alexander.

We need to discuss a matter regarding a recent communication you had with a faculty member, Mr. Rose. As part of our school’s digital monitoring policies, certain flagged keywords and discussions are reviewed to ensure student safety and compliance with district guidelines.

Due to the nature of your message, we have escalated this to administrative review. Your parents have been informed, and we request that you come to the office at 3:00PM, January 20, 2022 to discuss this matter further. If you have any questions, please let us know.

We appreciate your cooperation.

Sincerely,

Edmund Hughes
Principal
Belmont North Secondary School
`,
    date: "01/18/2022",
    folder: "Trash",
  },
  {
    index: 8,
    note: "Wow, she sent this report a while ago, even before the last email from that Greg creep. They really didn't do anything to protect her from her stalker. I guess reporting for dating apps is unreliable [link].", 
    end: false,
    read: false,
    to: "Tinder Support",
    toEmail: "support@gotinder.com",
    from: "Vivienne Thompson",
    fromEmail:"w3stw00d_doll@gmail.com",
    subject: "[Urgent] Doxxing and Threats on Your Platform",
    content: `Hello,

Please help me, I don't know what to do and I'm scared.

I am reaching out with an urgent concern regarding my account on your platform. I Vivienne (username: w3stw00d_doll) have been experiencing targeted harassment after matching with a user named Greg (username: ggbeck) on Tinder. Upon discovering that I was trans, Greg has become hostile and sent messages implying he has been tracking my location. He says he will hurt me.

I have since received emails from an unknown sender referencing my whereabouts, which suggests my digital footprint is being monitored beyond your platform. 

Please  stop him and investigating this user, my safety is at stake. I don't feel safe anymore since Greg harassed me. If you're seeing this please implement additional privacy protections, and can you make suremy location tracking is not being exploited maliciously. 

Please let us know what steps can be taken to ensure my safety and prevent Greg from hurting anyone else.

Please, I've run out of options, I've tried blocking him. NOTHING WORKS. 

Best,
Vivienne

`,
    date: "01/05/2022",
    folder: "Sent",
  },
  {
    index: 9,
    note: "This is heartbreaking. I guess we know what Mrs. Cox decided to next...", 
    end: true,
    body: null,
    read: false,
    to: "Victoria Elizabeth Cox",
    toEmail: "victoria.elizabeth.cox@outlook.com",
    from: "Vivienne Thompson",
    fromEmail:"w3stw00d_doll@gmail.com",
    subject: "Please Don't Do This",
    content: `Dear Mrs. Cox,

I’m so sorry for what happened. I never wanted to cause any harm, especially not to your son. I honestly didn’t know he felt that way, and I deeply regret how everything has turned out. I should’ve been more careful. Please believe me, I never meant for anyone to be hurt, and I will do whatever it takes to make sure he isn’t affected by this anymore.

I understand your anger, and I truly never meant to deceive anyone. Please don’t take my personal medical history and use it against me. It’s private, it’s something I’ve struggled with for so long, and the thought of anyone using it like this is terrifying.

You’ve said you overheard things and have had conversations with people, but do you not feel guilty for what you’re doing with that information? Is it really right to spread things that weren’t meant to be shared like this? I beg you, please don’t make this public. I’ll stay away from your son. I promise.

Please don’t destroy my life like this. I know what I’ve done was wrong, but I’m not a threat. I’m just trying to live my truth. I’ll keep my distance from everyone, I’ll leave your family alone, but please… don’t expose me like this.

Please don't do this,
Vivienne
`,
    date: "01/26/2022",
    folder: "Sent",
  },
  {
    index: 10,
    note: "What should I do? Should I send this email out and try and erase as much of her digital footprint as I can, or should I just let things be?",
    end: true,
    read: false,
    body: gdprEmailText,
    to: "European Data Protection Supervisor (EDPS)",
    toEmail: "edps@edps.europa.eu",
    from: "Vivienne Thompson",
    fromEmail:"w3stw00d_doll@gmail.com",
    subject: "Request for Erasure of Personal Data under GDPR (Right to be Forgotten)",
    content: GDPRRequestEmail(),
    date: "",
    folder: "Drafts",
  },
];