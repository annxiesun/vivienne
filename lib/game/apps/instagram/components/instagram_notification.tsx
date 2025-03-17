import {
  InstagramNotificationCategory,
  InstagramNotificationType,
} from "../common/types";
import InstagramUsernameButton from "./instagram_username_button";

type InstagramNotificationProps = {
  notification: InstagramNotificationType;
  className?: string
};

const getText = (category: InstagramNotificationCategory) => {
  switch (category) {
    case "follow":
      return "has started following you";
    case "like":
      return "has liked your post";
  }
};

export default function InstagramNotification(
  props: InstagramNotificationProps
) {
  const { notification, className} = props;
  const { username, category } = notification;

  const text = getText(category);

  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      <InstagramUsernameButton username={username} hasPicture pfp_size="sm" />
      {text}
    </div>
  );
}
