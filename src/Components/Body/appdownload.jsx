import React from "react";
import Image from "next/image";
import YourImage from "../../public/images/mobileimg.png";
import playStore from "../../public/images/googleplay.svg";
import Appstore from "../../public/images/appstore.svg";

function TwoEqualDivs() {
  return (
    <div className="w-full flex flex-col  md:flex-row bg-[#F8F8F8] md:px-[90px] md:mt-24">
      {/* FOR MOBILE */}
      <div
        id="download-app-mobile-screen"
        className="md:hidden block mt-16 md:mt-24 mx-4 mb-6 md:mb-0"
      >
        <p className="text-2xl font-semibold text-center">Download the App</p>
        <div className="btn-bottom flex justify-center gap-2 mt-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.unjected.app"
            className="inline-block"
          >
            <Image
              src={playStore}
              alt="Play Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>

          <a href="https://apps.apple.com/us/app/unjected/id1568168879">
            <Image
              src={Appstore}
              alt="App Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>
        </div>
      </div>

      {/* MOBILE IMAGES CONATINER */}
      <div className="flex-1 flex items-end justify-end px-10 sm:px-20 md:px-0 lg:justify-center lg:items-center">
        <Image
          src={YourImage}
          alt="Description of the image"
          className="w-full h-full lg:max-h-[400px] lg:max-w-[400px] xl:max-w-[800px]] xl:max-h-[800px]"
          layout="responsive"
        />
      </div>

      {/* FOR DESKTOP */}

      <div
        id="download-app-desktop-screen"
        className="hidden md:flex flex-col items-center justify-center md:pl-24 lg:pl-32 xl:pl-40"
      >
        <p className="text-3xl font-semibold text-center">Download the App</p>
        <div className="btn-bottom flex justify-center gap-2 mt-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.unjected.app"
            className="inline-block"
          >
            <Image
              src={playStore}
              alt="Play Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>

          <a href="https://apps.apple.com/us/app/unjected/id1568168879">
            <Image
              src={Appstore}
              alt="App Store"
              className="w-[100px] h-[35px] sm:w-[130px] sm:h-[45px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TwoEqualDivs;
