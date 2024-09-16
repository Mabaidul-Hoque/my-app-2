"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Meetimg1 from "../../public/images/meetimg1.png";
import Meetimg2 from "../../public/images/meetimg2.png";
import Meetimg3 from "../../public/images/meetimg3.png";
import { useGlobalData } from "@/contexts/GlobalDataProvider";

const Speeddating = () => {
  const { screenSize } = useGlobalData();
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 p-4 py-10 lg:py-16 md:px-10">
      <div className="w-full text-left sm:text-center sm:px-20 md:px-0">
        <p className="text-xs md:text-base lg:text-xl text-[#F7A293] font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          SPEED DATING
        </p>
        <p className="w-full text-2xl md:text-3xl lg:text-5xl font-bold mb-4 leading-8 lg:leading-[63px] flex flex-col">
          {screenSize < 640 ? (
            "Meet, Engage, Connect Dive into Our  Events!"
          ) : (
            <>
              <span> Meet Genuine Connections:</span>
              <span> Dive into Our Exciting Events!</span>
            </>
          )}
        </p>
        <p className="text-sm md:text-base lg:text-xl sm:px-10 md:px-20 lg:px-40">
          Step beyond the screen and connect in real life! Our exclusive events
          allow you to meet and mingle with other members in a relaxed, social
          setting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg1}
            alt="Speak to new potential matches"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center mb-2">
            Speak to new potential matches
          </p>
          <p className="text-sm text-center">
            You’ll have various Events to attend to connect and get to know each
            other.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg2}
            alt="Video or voice - it’s your choice"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center mb-2">
            Video or voice - it’s your choice
          </p>
          <p className="text-sm text-center  leading-5">
            Calls will always begin with voice. If the call is going well, take
            it to the next level with video.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-[#FDECE9] text-black rounded-3xl overflow-hidden">
          <Image
            src={Meetimg3}
            alt="You’re in control of each call"
            className="w-50 h-50 object-cover mb-4"
          />
          <p className="text-lg font-semibold text-center mb-2">
            You’re in control of each call
          </p>
          <p className="text-sm text-center leading-5">
            You decide what happens during each call. If you both like each
            other.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speeddating;
