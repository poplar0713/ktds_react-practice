import React from "react";

function IpadPro() {

  const overStyle = {
    position: `absolute`,
  };

  return (
    <div id="ipad_pro_section" class="bg-white grid grid-cols-7">
      <div class="flex items-center col-start-3 col-span-5 py-20">
        <img src="asset/image/hero/ipad_pro_hero__bh3eq6sqfjw2_large_2x.jpg"></img>
      </div>
      <div class="self-center text-center" style={overStyle}>
          <div class="p-4 m-2">
            <h2 class="text-6xl font-semibold place-self-end">iPad Pro</h2>
            <p class="text-xl font-semibold mt-1">궁극의 iPad란 이런것.</p>
            <p class="p-2 text-lg" alt="">
              ₩999,000부터
            </p>
          </div>
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
  );
}

export default IpadPro;
