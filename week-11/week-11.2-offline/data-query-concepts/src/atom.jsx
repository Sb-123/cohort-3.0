import axios from "axios";
import { atom, selector } from "recoil";

// This(below atom) will not work b/c default value of an atom need to be synchronous or it can be a selector which can be a asynchronous
// This is where concepts of asynchronous data queries comes into the picture.
//
// export const notifications = atom({
//   key: "networkAtom",
//   default: async () => {
//     const res = await axios.get(
//       "https://sum-server.100xdevs.com/notifications"
//     );
//     return res.data;
//   },
// });

export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
