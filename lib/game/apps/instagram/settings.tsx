import ThoughtButton from "../../../components/thought_button";
import { useGameActions, useGameState } from "../../../state/context";
import InstagramUsernameButton from "./components/instagram_username_button";

export default function Settings() {
  const actions = useGameActions();
  const state = useGameState();

  const { blocked } = state.instagram;
  const { unblock } = actions.instagram;

  return (
    <div className="w-full h-full flex text-black flex-col p-20">
      <div className="text-[36px] font-bold">Settings</div>
      <div className="text-xl font-black">App Version</div>
      <div className="mb-5">7.8.12</div>
      <div className="text-xl font-black">Display Mode</div>
      <div className="mb-5">Light</div>
      <div className="text-xl font-black">Account Privacy</div>
      <div className="mb-5">Public</div>
      {blocked && (
        <>
          <div className="text-xl mb-5 font-black">Blocked List</div>
          <div className="flex flex-row gap-40 items-center mb-4">
            <InstagramUsernameButton username="olivveee" disabled hasPicture />
            <InstagramUsernameButton username="realea" disabled hasPicture />
            <InstagramUsernameButton
              username="leidylovelies"
              disabled
              hasPicture
            />
            <InstagramUsernameButton username="xavier27" disabled hasPicture />
          </div>
          <div className="flex gap-2">
            <button
              onClick={unblock}
              className="p-2 border-solid border-gray-800 rounded-md border-[2px] flex items-center"
            >
              Unblock All
            </button>
            <ThoughtButton thought="Maybe I should unblock them to get more context" />
          </div>
        </>
      )}
    </div>
  );
}
