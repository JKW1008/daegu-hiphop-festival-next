"use client";

import { useState } from "react";
import SkipButton from "../ui/SkipButton";
import AppearLogo from "../ui/AppearLogo";
import ScrollAnimation from "../ui/ScrollAniamtion";

export default function MainVideoSection() {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/header_background_video.webm" type="video/webm" />
      </video>
      <AppearLogo show={videoEnded} />
      <SkipButton show={!videoEnded} onSkip={() => setVideoEnded(true)} />
      <ScrollAnimation show={videoEnded} />
    </div>
  );
}
