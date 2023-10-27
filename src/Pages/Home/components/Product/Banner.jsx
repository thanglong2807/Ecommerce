import React from 'react'
import Button from '../../../../component/Button'

const Banner = () => {
    return (
        <div className=" w-[312px] p-8 h-[716px] bg-amber-200 rounded-[3px]">
            <div className=" h-[152px] flex-col justify-center items-center gap-4 inline-flex">
                <div className="flex-col justify-start items-start gap-3 flex">
                    <div className="flex-col justify-start items-start gap-2 flex">
                        <div className="w-[248px] text-center text-red-500 text-sm font-semibold font-['Public Sans'] leading-tight">
                            COMPUTER & ACCESSORIES
                        </div>
                        <div className="w-[248px] text-center text-zinc-900 text-[32px] font-semibold font-['Public Sans'] leading-10">
                            32% Discount
                        </div>
                    </div>
                    <div className="w-[248px] text-center text-neutral-600 text-base font-normal font-['Public Sans'] leading-normal">
                        For all ellectronics products
                    </div>
                </div>
                <div className="justify-center items-center gap-2 inline-flex">
                    <div className="text-zinc-900 text-sm font-medium font-['Public Sans'] leading-tight">
                        Offers ends in:
                    </div>
                    <div className="px-3 py-1.5 bg-white rounded-sm justify-start items-start gap-2.5 flex">
                        <div className="text-zinc-900 text-sm font-semibold font-['Public Sans'] leading-tight">
                            ENDS OF CHRISTMAS
                        </div>
                    </div>
                </div>
            </div>
            <Button />
        </div>
    )
}

export default Banner