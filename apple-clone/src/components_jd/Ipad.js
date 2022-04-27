import React from "react";
import { useMediaQuery } from "react-responsive";

function Ipad() {
  const isPC = useMediaQuery({
    query: "(min-width:1199px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:800px) and (max-width:1198px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:799px)",
  });

  return (
    <div class="my-2 pb-2">
      {(isPC || isTablet) && (
        <div
          id="ipad_air_section"
          class="mx-auto bg-white text-black px-20 pb-5 flex justify-center items-center"
        >
          <div id="section-content" class="m-10 text-center">
            {isPC && (
              <div class="p-4 m-2 text-center">
                <h2 class="text-6xl font-semibold">iPad </h2>
                <p class="text-xl font-bold mt-1">만족스러운 성능.</p>
                <p class="text-xl font-bold">기분좋은 가격.</p>
                <p class="p-2 text-lg">₩449,000부터</p>
              </div>
            )}
            {isTablet && (
              <div class="p-2 m-1 text-center">
                <h2 class="text-4xl font-semibold">iPad </h2>
                <p class="text-lg font-bold mt-1">만족스러운 성능.</p>
                <p class="text-lg font-bold">기분 좋은 가격.</p>
                <p class="p-2">₩449,000부터</p>
              </div>
            )}
            <div class="p-1">
              <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
                구입하기
              </button>
            </div>
            <div class="p-2">
              <a href="#" class="text-blue-600">
                더 알아보기 >
              </a>
            </div>
          </div>
          <div id="section-image">
            {isPC && (
              <img
                src="asset/image/hero/ipad_10_2__7yowwyyrbmaa_large.jpg"
                width={750}
              ></img>
            )}
            {isTablet && (
              <img
                src="asset/image/hero/ipad_10_2__7yowwyyrbmaa_medium.jpg"
                width={400}
              ></img>
            )}
          </div>
        </div>
      )}
      {isMobile && (
        <div
          id="ipad_section"
          class="grid grid-cols-1 mx-auto bg-white text-black px-10 py-5 flex items-center"
        >
          <div class="p-2 m-1 text-center">
            <h2 class="text-4xl font-semibold">iPad </h2>
            <p class="font-bold mt-1">만족스러운 성능.</p>
            <p class="font-bold">기분 좋은 가격.</p>
            <p class="p-1">₩449,000부터</p>
            <div class="p-1">
              <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
                구입하기
              </button>
            </div>
            <div class="p-2">
              <a href="#" class="text-blue-600">
                더 알아보기 >
              </a>
            </div>
          </div>
          <div id="section-image" class="place-self-center">
            <img src="asset/image/hero/ipad_10_2__7yowwyyrbmaa_small.jpg"></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ipad;
