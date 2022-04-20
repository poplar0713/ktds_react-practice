import React from "react";

class IpadAir extends React.Component {
  render() {
    return (
      <section id="ipad_section" class="grid grid-cols-5 mx-auto bg-black text-white p-10 flex items-center">
        <div id="section-content" class="text-center col-span-2 col-start">
          <div class="font-bold p-3">
            <p class="text-xs text-orange-500 font-normal">New</p>
            <span class="text-6xl">iPad </span>
            <span class="text-6xl text-purple-300">air</span>
            <p class="text-2xl">가뿐하게. 색다르게.</p>
            <p class="text-2xl">강력하게.</p>
          </div>
          <p class="p-2 text-lg">₩779,000부터</p>
          <div class="p-1">
            <button class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-full">
              구입하기
            </button>
          </div>
          <div class="p-2">
            <a href="#" class="text-blue-500">
              더 알아보기 &gt
             </a>
          </div>
        </div>
        <div id="section-image" class="col-span-3">
          <img src="asset/image/ipad_air_main.png"></img>
        </div>
      </section>
    );
  }
}

export default IpadAir;
