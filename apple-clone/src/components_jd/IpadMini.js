import React from "react";
import { useMediaQuery } from "react-responsive";

function IpadMini() {
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
    <div class="py-2">
      {(isPC || isTablet) && (
        <div
          id="ipad_mini_section"
          class="mx-auto bg-white text-black px-20 pt-10 flex justify-center items-center"
        >
          <div id="section-image">
            {isPC && (
              <img
                src="asset/image/hero/ipad_mini__dn6g8b0hw8om_large_2x.jpg"
                width={500}
              ></img>
            )}
            {isTablet && (
              <img
                src="asset/image/hero/ipad_mini__dn6g8b0hw8om_medium_2x.jpg"
                width={300}
              ></img>
            )}
          </div>
          <div id="section-content" class="m-10 text-center">
            {isPC && (
              <div class="p-4 m-2 text-center">
                <div class="grid grid-cols-2 gap-2 flex items-center">
                  <h2 class="text-6xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/mini_script__bjahejz6luqa_large_2x.png" width={100} alt="mini"></img>
                </div>
                <p class="text-xl font-bold mt-1">메가급 성능.</p>
                <p class="text-xl font-bold">크기만 미니.</p>
                <p class="p-2 text-lg">₩649,000부터</p>
              </div>
            )}
            {isTablet && (
              <div class="p-2 m-1 text-center">
                <div class="grid grid-cols-2 gap-1 flex items-center">
                  <h2 class="text-4xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/mini_script__bjahejz6luqa_medium_2x.png" width={60} alt="mini"></img>
                </div>
                <p class="text-lg font-bold mt-1">메가급 성능.</p>
                <p class="text-lg font-bold">크기만 미니.</p>
                <p class="p-2">₩649,000부터</p>
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
        </div>
      )}
      {isMobile && (
        <div
          id="ipad_section"
          class="grid grid-cols-1 mx-auto bg-white text-black px-10 pt-5 flex items-center"
        >
          <div class="p-2 m-1 text-center">
          <div class="grid grid-cols-2 gap-1 flex items-center">
                  <h2 class="text-4xl font-semibold place-self-end">iPad </h2>
                  <img src="asset/image/hero/mini_script__bjahejz6luqa_medium_2x.png" width={60} alt="mini"></img>
            </div>
            <p class="font-bold mt-1">메가급 성능.</p>
            <p class="font-bold">크기만 미니.</p>
            <p class="p-1">₩649,000부터</p>
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
          <div id="section-image" class="place-self-center pl-20">
            <img src="asset/image/hero/ipad_mini__dn6g8b0hw8om_medium_2x.jpg" width={300}></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default IpadMini;
