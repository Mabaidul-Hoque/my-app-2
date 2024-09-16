import React from "react";
import Image from "next/image";
import profileImg01 from "/public/assets/images/real-profile-images/frame-profiles-img01.png";
import profileImg02 from "/public/assets/images/real-profile-images/frame-profiles-img02.png";
import profileImg03 from "/public/assets/images//real-profile-images/frame-profiles-img03.png";

const profileImages = [
  { id: 1, imageUrl: profileImg01 },
  { id: 2, imageUrl: profileImg02 },
  { id: 3, imageUrl: profileImg03 },
];

const Realprofile = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #F8F8F8 0%, #FFFFFF 100%)",
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-4 md:py-10 lg:py-16 xl:py-20 md:px-10"
      style={gradientStyle}
    >
      <div className="text-left md:text-center  mb-10">
        <p className="text-xs md:text-base lg:text-lg font-bold uppercase py-1 text-[#F7A293] mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          Authenticity
        </p>
        <p className="text-[32px] lg:text-5xl md:text-3xl font-bold mb-5 leading-7 lg:leading-10">
          Real profiles, Real connections.
        </p>
        <p className="text-sm md:text-md lg:text-xl text-[#484848]">
          Our rigorous checks create a secure environment for you to find and
          connect with authentic individuals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 sm:gap-8 md:gap-5 w-full">
        {profileImages.map((image) => (
          <Image
            key={image.id}
            src={image.imageUrl}
            alt="Placeholder"
            className="w-full h-full"
          />
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-full max-w-6xl md:gap-0">
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg1}
            alt="Placeholder"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg2}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={Realimg3}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Realprofile;
