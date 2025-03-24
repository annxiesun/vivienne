import { useEffect, useState } from "react";
import ThoughtButton from "../../../../components/thought_button";
import { useGameActions } from "../../../../state/context";

const ProfileView = () => {
  const actions = useGameActions();
  const { toggleModal, setThought, setModalType } = actions;
  const { markEvidenceAsViewed } = actions.skype;

  const [evidenceClicked, setEvidenceClicked] = useState(new Set());

  useEffect(() => {
    // If all evidence has been clicked, mark as viewed
    if (evidenceClicked.size === 3) {
      markEvidenceAsViewed("profile");
    }
  }, [evidenceClicked, markEvidenceAsViewed]); // Re-run this effect when `evidenceClicked` changes

  const handleEvidenceClick = (evidence) => {
    setEvidenceClicked((prev) => {
      const newSet = new Set(prev);
      newSet.add(evidence);
      return newSet;
    });
  };

  return (
    <div className="p-4 rounded-lg text-gray-700">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="/assets/skype/vivi.png"
              className="w-32 h-32 border-4 border-white rounded-full"
            />
            <div
              className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded-bl-lg animate-pulse cursor-pointer"
              onClick={() => {
                handleEvidenceClick("1");
                setThought(
                  "This profile has been reported for deepfaking. Maybe I should investigate further.."
                );
                setModalType("thought");
                toggleModal(true);
              }}
            >
              ⚠️ Deepfake
            </div>
          </div>
          <p className="mt-3 text-sm text-left max-w-xs">
            Hey there 💋 Looking for a personal call or exclusive pictures?
            Let&apos;s chat! 💕 $250 per call, $100 per picture
            <ThoughtButton
              thought="Why is she charging for this stuff? She is way too young..."
              className="h-6 w-6"
              onClick={() => handleEvidenceClick("2")}
            />
          </p>
        </div>

        <div className="w-px bg-gray-300"></div>

        {/* Right Column*/}
        <div className="flex flex-col justify-start">
          <div className="mb-3">
            <h3 className="text-2xl font-bold">Vivienne</h3>
            <p className="text-sm text-gray-600">
              💰 Calls & Pics Available! DM me for details 💖
            </p>
          </div>
          <hr className="border-white my-2" />
          <div className="text-gray-700 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
            <strong>Skype Name</strong> <span>w3stw00d_doll</span>
            <strong>Phone</strong> <span>555-3512</span>
            <strong>Birthday</strong>
            <span>
              February 14, 2000
              <ThoughtButton
                thought="That's strange..wasn't she born in 2007?"
                className="ml-1 h-5 w-5"
                onClick={() => handleEvidenceClick("3")}
              />
            </span>
            <strong>Gender</strong> <span>Female</span>
            <strong>Language</strong> <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
