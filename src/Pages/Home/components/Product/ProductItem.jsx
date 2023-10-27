import React from "react";

const ProductItem = () => {
  return (
    <div className="heading w-full">
      <div className="w-full h-9 justify-between items-center inline-flex">
        <div className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose">
          Featured Products
        </div>
        <div className="justify-center items-center gap-4 flex">
          <div className="justify-start items-start flex">
            <div className="p-2 bg-white shadow-inner justify-start items-start gap-2.5 flex">
              <div className="text-zinc-900 text-sm font-semibold font-['Public Sans'] leading-tight">
                All Product
              </div>
            </div>
            <div className="p-2 bg-white justify-start items-start gap-2.5 flex">
              <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">
                Smart Phone
              </div>
            </div>
            <div className="p-2 bg-white justify-start items-start gap-2.5 flex">
              <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">
                Laptop
              </div>
            </div>
            <div className="p-2 bg-white justify-start items-start gap-2.5 flex">
              <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">
                Headphone
              </div>
            </div>
            <div className="p-2 bg-white justify-start items-start gap-2.5 flex">
              <div className="text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">
                TV
              </div>
            </div>
          </div>
          <div className="py-1.5 bg-white justify-start items-center gap-2 flex">
            <div className="text-orange-400 text-sm font-semibold font-['Public Sans'] leading-tight">
              Browse All Product
            </div>
            <div className="w-5 h-5 relative" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
