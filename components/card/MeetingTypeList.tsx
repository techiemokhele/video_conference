"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

//custom
import HomeCardComponent from "./HomeCardComponent";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCardComponent
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-orange-1"
      />
      <HomeCardComponent
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan you next meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCardComponent
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out all your meeting recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-purple-1"
      />
      <HomeCardComponent
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
