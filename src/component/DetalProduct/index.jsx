import React from 'react'

const DetalProduct = () => {
    return (
        <div className="w-[248px] h-[296px] relative bg-white border border-gray-200">
            <img className="w-[216px] h-[188px] left-[16px] top-[16px] absolute" src="https://via.placeholder.com/216x188" />
            <div className="px-2.5 py-[5px] left-[12px] top-[12px] absolute bg-gray-400 rounded-sm justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-xs font-semibold font-['Public Sans'] leading-none">SOLD OUT</div>
            </div>
            <div className="left-[16px] top-[212px] absolute flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[216px] text-zinc-900 text-sm font-normal font-['Public Sans'] leading-tight">Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</div>
                <div className="justify-start items-start gap-1 inline-flex">
                    <div className="text-sky-400 text-sm font-semibold font-['Public Sans'] leading-tight">$2,300</div>
                </div>
            </div>
        </div>
    )
}

export default DetalProduct