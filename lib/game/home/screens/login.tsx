import React from "react";
import { Power, RefreshCcw, Moon } from "lucide-react";
import DecisionButton from "../../../components/decision_button";
import { useGameActions, useGameState } from "../../../state/context";
import GlobalModal from "../../../components/global_modal";

const Login = () => {
  const state = useGameState();
  const actions = useGameActions();
  const { showModal } = state;
  const { toggleEnd, setReported } = actions.screen;

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white  bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/bg/bg.png')",
      }}
    >
      <div className="absolute top-6 right-6 flex flex-col gap-4">
        <DecisionButton
          decision={{
            question: "Should I report George for impersonating Vivienne?",
            info: "Should he be held accountable for his actions",
            option1: "REPORT",
            option2: "DON'T REPORT",
            onClick1: () => {
              setReported(true);
              toggleEnd(true);
            },
            onClick2: () => {
              setReported(false);
              toggleEnd(true);
            },
          }}
          className="cursor-pointer animate-pulse text-3xl"
        />
      </div>

      <div className="text-center w-96 mx-auto">
        <div className="flex justify-center mb-4">
          <img
            src="/assets/bg/user.png"
            alt="User Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <h2 className="text-xl text-white">Guest</h2>

        <div className="flex justify-center items-center gap-6 mt-6">
          <button className="text-white">
            <Moon size={24} />
          </button>
          <button className="text-white">
            <RefreshCcw size={24} />
          </button>
          <button className="text-white">
            <Power size={24} />
          </button>
        </div>
      </div>

      {showModal && <GlobalModal />}
    </div>
  );
};

export default Login;
