import { NOTIFICATIONS } from "./common/notifications";
import InstagramNotification from "./components/instagram_notification";
import { Separator } from "radix-ui";

export default function Notifications() {
  return (
    <div className="w-full h-full text-black flex items-center py-10 px-20">
      <div className="w-full h-full">
        {NOTIFICATIONS.map((notification, i) => (
          <>
            <InstagramNotification
              key={i}
              notification={notification}
              className="mb-5"
            />
            {i != NOTIFICATIONS.length - 1 && (
              <Separator.Root className="w-full h-[1px] bg-gray-400 mb-5" />
            )}
          </>
        ))}
        <div className="h-[50px]" /> {/** SCROLL FOOTER **/}
      </div>
    </div>
  );
}
