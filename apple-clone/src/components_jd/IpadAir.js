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
    <div class="pb-2">
      {(isPC || isTablet) && (
        <div
          id="ipad_air_section"
          class="mx-auto bg-black text-white px-20 py-20 flex justify-center items-center"
        >
          <div id="section-content" class="m-10 text-center">
            {isPC && (
              <div class="p-4 m-2">
                <p class="text-xs text-orange-500 m-3">New</p>
                <div class="grid grid-cols-2 gap-2 flex items-center">
                  <h2 class="text-6xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/air_script__coyet2g7gkia_large_2x.png" width={100} alt="air"></img>
                </div>
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
                <div class="grid grid-cols-2 gap-1 flex items-center">
                  <h2 class="text-4xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/air_script__coyet2g7gkia_large_2x.png" width={60} alt="air"></img>
                </div>
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
          <div id="section-image">
            {isPC && <img src="asset/image/hero/ipad_air__d794tkovmk02_large_2x.jpg" width={750}></img>}
            {isTablet && <img src="asset/image/hero/ipad_air__d794tkovmk02_medium_2x.jpg" width={500}></img>}
          </div>
        </div>
      )}
      {isMobile && 
        <div
        id="ipad_section"
        class="grid grid-cols-1 mx-auto bg-black text-white px-10 py-5 flex items-center">
          <div class="p-2 m-1 text-center">
                <p class="text-xs text-orange-500 m-3">New</p>
                <div class="grid grid-cols-2 gap-1 flex items-center">
                  <h2 class="text-4xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/air_script__coyet2g7gkia_large_2x.png" width={60} alt="air"></img>
                </div>
                <p class="font-bold mt-1">가뿐하게. 색다르게.</p>
                <p class="font-bold">강력하게.</p>
                <p class="p-1">
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
          <div id="section-image" class="place-self-center w-80">
            <img src="asset/image/hero/ipad_air__d794tkovmk02_large_2x.jpg"></img>
          </div>
        </div>
      }
    </div>
  );
}

export default IpadAir;
