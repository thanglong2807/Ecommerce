import React from "react";
import ArrowRight from "./assets/ArrowRight.svg";
const Banner = () => {
  return (
    <div className="text-center container">
      <div className=" h-[520px] justify-start items-start  inline-flex">
        <div className="w-[772px] h-[520px] relative bg-gray-100 rounded-md flex align-middle justify-between">
          <div className=" top-[454px] absolute justify-start items-start gap-2 inline-flex">
            <div className="w-2.5 h-2.5 bg-zinc-900 rounded-full" />
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full" />
          </div>
          <div className=" top-[140px] absolute flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-[0px] border-2 border-sky-400"></div>
                  <div className="text-sky-600 text-sm font-semibold font-['Public Sans'] leading-tight">
                    THE BEST PLACE TO PLAY
                  </div>
                </div>
                <div className="w-[356px] text-zinc-900 text-5xl font-semibold font-['Public Sans'] leading-[56px]">
                  Xbox Consoles
                </div>
              </div>
              <div className="w-[356px] text-neutral-600 text-lg font-normal font-['Public Sans'] leading-normal">
                Save up to 50% on select Xbox games. Get 3 months of PC Game
                Pass for $2 USD.
              </div>
            </div>
            <button className="px-8 bg-orange-400 rounded-[3px] justify-center items-center gap-3 inline-flex">
              <span className="text-white text-base font-bold font-['Public Sans'] uppercase leading-[56px] tracking-tight">
                Shop Now
              </span>
              <img alt="" src={ArrowRight} className="w-6 h-6 relative" />
            </button>
          </div>
          <img
            alt=""
            className="w-[368px] h-[408px] left-[372px] top-[56px] absolute"
            src="https://via.placeholder.com/368x408"
          />
          <div className="w-[7rem] h-[7rem] left-[642px] top-[56px] absolute bg-sky-400 rounded-[100px] border-4 border-white flex-col justify-center items-center gap-2.5 inline-flex">
            <span className="text-white text-[22px] font-semibold font-['Public Sans'] ">
              $299
            </span>
          </div>
        </div>
        <div className="flex-col justify-start items-start  inline-flex">
          <div className="w-[424px] h-[248px] relative bg-zinc-900  rounded-md overflow-hidden">
            <img
              alt=""
              className="w-[312px] h-[312px] left-[188px] top-[47px] absolute"
              src="https://via.placeholder.com/312x312"
            />
            <div className="w-[102px] h-10 px-4 py-2 left-[298px] top-[24px] absolute bg-amber-300  rounded-sm justify-start items-start gap-2.5 inline-flex">
              <div className="text-neutral-900 text-base font-semibold font-['Public Sans'] leading-normal">
                29% OFF
              </div>
            </div>
            <div className="left-[40px] top-[46px] absolute flex-col justify-start items-start gap-[18px] inline-flex">
              <div className="flex-col justify-start items-start gap-[5px] flex">
                <div className="w-40 text-yellow-400 text-sm font-medium font-['Public Sans'] uppercase leading-tight">
                  Summer Sales
                </div>
                <div className="w-40 text-white text-2xl font-semibold font-['Public Sans'] leading-loose">
                  New Google Pixel 6 Pro
                </div>
              </div>
              <button className="px-6 bg-orange-400 rounded-sm justify-center items-center gap-2 inline-flex">
                <span className="text-white text-sm font-bold font-['Public Sans'] uppercase leading-[48px] tracking-tight">
                  Shop Now
                </span>
                <img alt="" src={ArrowRight} className="w-5 h-5 relative" />
              </button>
            </div>
          </div>
          <div className="pl-8 pr-10 py-10 bg-gray-100 rounded-md justify-center items-center gap-5 inline-flex">
            <img
              alt=""
              className="w-40 h-40"
              src="https://via.placeholder.com/160x160"
            />
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-[172px] text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose">
                  Xiaomi FlipBuds Pro
                </div>
                <div className="w-[172px] text-sky-400 text-lg font-semibold font-['Public Sans'] leading-normal">
                  $299 USD
                </div>
              </div>
              <button className="px-6 bg-orange-400 rounded-sm justify-center items-center gap-2 inline-flex">
                <span className="text-white text-sm font-bold font-['Public Sans'] uppercase leading-[48px] tracking-tight">
                  Shop Now
                </span>
                <img alt="" src={ArrowRight} className="w-5 h-5 relative" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
