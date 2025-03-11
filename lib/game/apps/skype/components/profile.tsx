import ThoughtButton from "../../../../components/thought_button";

const ProfileView = () => {
  return (
    <div className="p-4 rounded-lg text-gray-700">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=5"
              className="w-32 h-32 border-4 border-white rounded-full"
            />
          </div>
          <p className="mt-3 text-sm text-left max-w-xs">
            Hey there 💋 Looking for a personal call or exclusive pictures?
            Let&apos;s chat! 💕 $500 per call, $100 per picture
            <ThoughtButton thought="Exclusive pictures? Something is sketchy..should I keep looking? (DECISION POINT)" />
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
            <strong>Skype Name</strong> <span>vivienne22023</span>
            <strong>Phone</strong> <span>555-1234</span>
            <strong>Birthday</strong> <span>February 14, 2000</span>
            <strong>Gender</strong> <span>Female</span>
            <strong>Language</strong> <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
