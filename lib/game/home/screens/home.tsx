import { useGameActions, useGameState } from "../../../state/context";
import { useEffect, useState } from "react";
import AppButton from "../../../components/app_button";
import Email from "../../apps/email/email";
import Skype from "../../apps/skype";
import Notes from "../../apps/notes";
import { HOME_THOUGHTS } from "../../../constants";
import ThoughtButton from "../../../components/thought_button";
import GlobalModal from "../../../components/global_modal";
import Instagram from "../../apps/instagram";
import DecisionButton from "../../../components/decision_button";
import ChatGPTScreen from "../../apps/chatgpt/index";

export const Home = () => {
  const { scene, showModal } = useGameState();
  const actions = useGameActions();

  const { toggleModal } = actions;
  const { setWiped, toggleEnd, toggleDefaultEnd, setReported } =
    actions.screen;
  const [modalMessage, setModalMessage] = useState(HOME_THOUGHTS[scene]);
  const [showReportDecision, setShowReportDecision] = useState(false);

  useEffect(() => {
    console.log({ scene });
    console.log(HOME_THOUGHTS[scene]);
    setModalMessage(HOME_THOUGHTS[scene]);
  }, [scene]);

  return (
    <div
      className="flex justify-center items-center flex-col h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/bg/bg.png')",
      }}
    >
      <div className="absolute top-6 right-6 flex gap-4">
        <ThoughtButton
          thought={modalMessage}
          className="cursor-pointer animate-pulse text-3xl"
        />
        {showReportDecision ? (
          <DecisionButton
            decision={{
              question: "Should I report George for impersonating Vivienne?",
              info: "I was hired to clear this computer, but I discovered something I probably shouldn’t have.",
              option1: "REPORT",
              option2: "DON'T REPORT",
              image: "/assets/decision/report_bg.png",
              onClick1: () => {
                setReported(true);
                toggleEnd(true);
              },
              onClick2: () => {
                setReported(false);
                toggleEnd(true);
              },
            }}
            className="text-green-700 cursor-pointer animate-pulse text-3xl"
          />
        ) : scene < 5 ? (
          <DecisionButton
            decision={{
              question: "Should I wipe the laptop?",
              info: "If you wipe the laptop, you won't find out the whole story!",
              ignoreOption: "Keep exploring",
              image: "/assets/decision/wipe_bg.png",
              option1: "WIPE",
              option2: "KEEP EXPLORING",
              onClick1: () => {
                toggleEnd(true);
              },
              onClick2: () => {
                toggleModal(false);
              },
            }}
              className="text-blue-700 cursor-pointer animate-pulse text-3xl"
          />
        ) : (
          <DecisionButton
            decision={{
              question: "Should I wipe the laptop?",
              info: "If you wipe the laptop, this information you discovered will be gone forever",
              ignoreOption: "I need more time to think",
              image: "/assets/decision/wipe_bg.png",
              option1: "WIPE",
              option2: "DON'T WIPE",
              onClick1: () => {
                setWiped(true);
                toggleDefaultEnd(false);
                toggleModal(false);
              },
              onClick2: () => {
                setWiped(false);
                setShowReportDecision(true); // Show report decision
                toggleDefaultEnd(false);
                toggleModal(false);
              },
            }}
            className="text-red-500 cursor-pointer animate-pulse text-3xl"
          />
        )}

        {/*right to be forgotten decisionbutton */}
        {/* <DecisionButton
          decision={{
            question:
              "Should I send this draft email request to erase any personal data held under EU General Data Protection Regulation (GDPR)?",
            info: "Vivienne mentions wanting to erase anything that she can in her notes, and clearly she wrote this email for a reason. I am not her though, is this a decision for me to make on her behalf?",
            option1: "SEND REQUEST",
            option2: "DON'T SEND",
            image: "/assets/decision/send_email.png",
            onClick1: () => {
              setEmailSent(true);
              toggleModal(false);
            },
            onClick2: () => {
              setEmailSent(false);
              toggleModal(false);
            },
          }}
          className="text-purple-500 cursor-pointer animate-pulse text-3xl"
        /> */}
      </div>

      {showModal && <GlobalModal />}

      <div className="grid gap-6 p-6 absolute top-6 left-6 grid-cols-1">
        <AppButton imageSrc="/assets/apps/notes.png" altText="Notes">
          <Notes />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/instagram.png"
          altText="Instagram"
          disabled={scene < 1}
        >
          <Instagram />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/mail.png"
          altText="Mail"
          disabled={scene < 2}
        >
          <Email />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/chatgpt.png"
          altText="ChatGPT"
          disabled={scene < 3}
        >
          <ChatGPTScreen />
        </AppButton>
        <AppButton
          imageSrc="/assets/apps/skype.png"
          altText="Skype™"
          disabled={scene < 4}
        >
          <Skype />
        </AppButton>
      </div>
    </div>
  );
};

export default Home;
