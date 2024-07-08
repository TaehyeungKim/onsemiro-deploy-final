import MainIconSection from ".";
import Love from "../../assets/love 1.png";
import { useState, useEffect } from "react";
import { RequestHold } from "./cases";

export default function RequestAccepted() {
  const [requestInfo, setRequestInfo] = useState(null);

  useEffect(() => {
    setRequestInfo([{}]);
  }, []);

  return (
    requestInfo && (
      <MainIconSection icon={Love} caption={"받은 요청"}>
        <RequestHold count={requestInfo.length}></RequestHold>
      </MainIconSection>
    )
  );
}
