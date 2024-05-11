"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

//custom
import { useGetCallById } from "@/hooks/useGetCallById";
import LoaderComponent from "@/components/constant/LoaderComponent";
import MeetingSetupComponent from "@/components/meeting/MeetingSetupComponent";
import MeetingRoomComponent from "@/components/meeting/MeetingRoomComponent";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <LoaderComponent />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetupComponent setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoomComponent />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
