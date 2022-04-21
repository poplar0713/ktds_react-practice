import React from "react";
import { useMediaQuery } from "react-responsive";

function IpadAir() {
  const isPC = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <div>
      {(isPC || isTablet) && (
        <div
          id="ipad_section"
          class="grid grid-cols-5 mx-auto bg-black text-white px-20 py-10 flex items-center"
        >
          <div id="section-content" class="text-center col-span-2 col-start">
            {isPC && (
              <div class="p-3 m-1">
                <p class="text-xs text-orange-500 m-3">New</p>
                <span class="text-6xl font-semibold">iPad </span>
                <span class="text-6xl text-purple-300">air</span>
                <p class="text-xl font-bold mt-1">가뿐하게. 색다르게.</p>
                <p class="text-xl font-bold">강력하게.</p>
                <p class="p-2 text-lg" alt="">
                  ₩779,000부터
                </p>
              </div>
            )}
            {isTablet && (
              <div class="p-2 m-1">
                <p class="text-xs text-orange-500 m-3">New</p>
                <span class="text-5xl font-semibold">iPad </span>
                <span class="text-5xl text-purple-300">air</span>
                <p class="text-lg font-bold mt-1">가뿐하게. 색다르게.</p>
                <p class="text-lg font-bold">강력하게.</p>
                <p class="p-2" alt="">
                  ₩779,000부터
                </p>
              </div>
            )}
            <div class="p-1">
              <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
                구입하기
              </button>
            </div>
            <div class="p-2">
              <a href="#" class="text-blue-400">
                더 알아보기 >
              </a>
            </div>
          </div>
          <div id="section-image" class="col-span-3">
            <img src="asset/image/ipad_air_main.png"></img>
          </div>
        </div>
      )}
      {isMobile && 
        <div
        id="ipad_section"
        class="mx-auto bg-black text-white px-20 py-10 items-center">
          <div class="p-2 m-1 text-center">
                <p class="text-xs text-orange-500 m-3">New</p>
                <span class="text-5xl font-semibold">iPad </span>
                <span class="text-5xl text-purple-300">air</span>
                <p class="text-lg font-bold mt-1">가뿐하게. 색다르게.</p>
                <p class="text-lg font-bold">강력하게.</p>
                <p class="p-2" alt="">
                  ₩779,000부터
                </p>
                <div class="p-1">
              <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
                구입하기
              </button>
            </div>
            <div class="p-2">
              <a href="#" class="text-blue-400">
                더 알아보기 >
              </a>
            </div>
          </div>
          <div id="section-image">
            <img src="asset/image/ipad_air_main.png"></img>
          </div>
        </div>
      }
    </div>
  );
}

export default IpadAir;
