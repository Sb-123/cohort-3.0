import { useMemo, useState } from "react";

import "./App.css";
import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import {
  jobsAtom,
  messagesAtom,
  networkAtom,
  totalNotificationSelector,
} from "./atom";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const [messagesAtomCount, setMessageAtomCount] = useRecoilState(messagesAtom);
  const notificationsAtomCount = useRecoilValue(networkAtom);
  //  M-1:- use useMemo method.
  // const totalNotificationCount = useMemo(() => {
  //   return (
  //     networkCount + jobsAtomCount + messagesAtomCount + notificationsAtomCount
  //   );
  // }, [networkCount, jobsAtomCount, messagesAtomCount, notificationsAtomCount]);

  // M-II:- selector method.
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <div>
        <button>Home</button>
        <button>
          My network ({networkCount >= 100 ? "99+" : networkCount})
        </button>
        <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
        <button>
          messaging ({messagesAtomCount >= 100 ? "99+" : messagesAtomCount})
        </button>
        <button>
          Notification (
          {notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount}){" "}
        </button>

        <button>Me({totalNotificationCount})</button>
      </div>
    </>
  );
}

export default App;
