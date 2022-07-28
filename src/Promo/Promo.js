// CodeEditorWindow.js

import React, { useState } from "react";

import './Promo.css'

const Compilier = ({ onChange, language, code, theme }) => {

  const [display, setDisplay] = useState(false)

  const onClick = () => {
    setDisplay(!false)
  }


  return (

    <div className=" bg-black">
      <div className="grid  grid-cols-1  md:grid-cols-4 py-20 md:w-[90%] w-[70%] mx-auto ">

        <div className="pt-20  relative ">



          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 absolute bottom-[77%] right-[10%] md:right-[30%] bg-black text-[red] rounded  " style={{ zIndex: '20' }} viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>

          <div class="w-64 carousel rounded-box promo">

            <div style={{ zIndex: '10' }} className="bg-[red] absolute top-[76%] text-white w-64 justify-center flex h-[50px] px-3 py-3 opacity-80 ">

              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>

              <p className="mx-4 font-semibold">
                30% OFF !!!
              </p>

            </div>


            <div style={{ zIndex: '20' }} className=" icons absolute left-[50%] md:left-[35%] bottom-[55%] ">
              <div className=" h-[100px] w-[100%] text-[black] space-y-8 ">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon rounded-full h-6 w-6  bottom-[70%] left-[0%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon rounded-full h-5 w-5  bottom-[92%] left-[30%]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon rounded-full h-6 w-6  bottom-[78%] left-[60%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon rounded-full h-5 w-5 bottom-[50%] left-[80%]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon rounded-full h-6 w-6 bottom-[10%] left-[75%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>

              </div>
            </div>

            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/young-man-model-posing-street_1303-14448.jpg?w=360&t=st=1658977410~exp=1658978010~hmac=cdd78f2c68229c3b523a937727b3b7c2467e41aa7b3784804d30cf2c8a5d0b95" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?w=360&t=st=1658977456~exp=1658978056~hmac=6bddc0339644fc0f6317fb56dcd1a14311a9e741d435a09ae8430d16b978fd8e" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5867.jpg?w=360&t=st=1658977665~exp=1658978265~hmac=f11d5cc92a42fab702e089736b90803781455069bffef0a94b7b8f3d389bd8fb" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5871.jpg?w=360&t=st=1658977704~exp=1658978304~hmac=808492b6cf1f268109e9a0ff5b6b0e399c974f04c5d2de648001f761d1a142af" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5876.jpg?w=360&t=st=1658977713~exp=1658978313~hmac=a6b5ac4720ad6988dc6d6c370ac30a0a4307cb5d763a56d31edb1f4b17637f91" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/young-elegant-handsome-businessman-male-model-suit-fashionable-glasses-posing-studio_158538-2138.jpg?w=360&t=st=1658977800~exp=1658978400~hmac=c317b021610a598794d426d253d69fe7bf2d13bfc23b0bb620dbd2c98dc5cb06" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
            <div class="carousel-item w-full">
              <img src="https://img.freepik.com/free-photo/portrait-attractive-african-american-businessman-wearing-black-suit-smart-look-isolated-white-background_640221-612.jpg?w=360&t=st=1658977955~exp=1658978555~hmac=f95b97ffd97a182f0f2864e442e01bb1c9a5ab0ea9a5c9c98777f2bbd7b0f7e5" class="w-full" alt="Tailwind CSS Carousel component" />
            </div>
          </div>

          <div className=" flex justify-between w-[99%] mt-2 md:w-[76%] text-white relative">
            <p className="font-semibold pr-4">Promo vouchers, to ease you life</p>

            <label tabindex="0" htmlFor='bigTogglerpro' class="">
              <div class="indicator cursor-pointer p-1 active:bg-[red] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
            </label>
            <input type="checkbox" name="" id="bigTogglerpro" />


            <ul class="men p-2 rounded-lg notificationpro text-black absolute left-[50%] md:left-[90%] top-[80%] bg-base-100 w-40">
              <li class="px-4 rounded-lg py-2 font-semibold cursor-pointer hover:bg-slate-200 active:text-white active:bg-[red]"><a>Get voucher</a></li>
              <li class="px-4 rounded-lg py-2 font-semibold cursor-pointer hover:bg-slate-200 active:text-white active:bg-[red]"><a>Pin it</a></li>
              <li class="px-4 rounded-lg py-2 font-semibold cursor-pointer hover:bg-slate-200 active:text-white active:bg-[red]"><a>Hide it</a></li>

            </ul>
          </div>


        </div>
       
      </div>
    </div>

  );
};
export default Compilier;