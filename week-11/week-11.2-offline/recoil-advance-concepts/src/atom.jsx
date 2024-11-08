import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 52,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 8,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 20,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom); // jese hi networkAtom change hoga wese hi get function update kr denga.
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagesAtomCount = get(messagesAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagesAtomCount
    );
  },
});
