"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { Button } from "../ui/button";

const MeetingSetupComponent = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const router = useRouter();
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error(
      "❌ Oops, useCall must be used within StreamCall component!"
    );
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-white">
      <Image src="/icons/logo.svg" alt="logo" width={50} height={50} />
      <h1 className="font-bold text-xl">Setup Video Conference</h1>

      <VideoPreview />

      <div className="flex h-16 items-center justify-center gap-2">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join the call with mic and camera off
        </label>

        <DeviceSettings />
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => router.push("/")}
          className="rounded-full bg-red-500 px-4 py-2.5"
        >
          Cancel joining
        </Button>

        <Button
          onClick={() => {
            call.join();
            setIsSetupComplete(true);
          }}
          className="rounded-full bg-green-500 px-4 py-2.5 ml-5"
        >
          Join meeting
        </Button>
      </div>
    </div>
  );
};

export default MeetingSetupComponent;
