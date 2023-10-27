import React from 'react'

const TodayBestDeals = () => {
    return (
        <React.Fragment>
            <div className="mt-8 container h-9 justify-between items-center flex">
                <div className="justify-start items-start gap-6 flex">
                    <h3 className="text-zinc-900 text-2xl font-semibold font-['Public Sans'] leading-loose">Best Deals</h3>
                    <div className="justify-start items-center gap-3 flex">
                        <span className="text-black text-sm font-normal font-['Public Sans'] leading-tight">Deals ends in</span>
                        <div className="  bg-amber-200 rounded-sm justify-start items-center  flex">
                            <span className="p-3 text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">16d</span>
                            <span className="p-3 text-center text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">:</span>
                            <span className="p-3 text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">21h</span>
                            <span className="p-3 text-center text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">:</span>
                            <span className="p-3 text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">57m</span>
                            <span className="p-3 text-center text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">:</span>
                            <span className="p-3 text-zinc-900 text-base font-normal font-['Public Sans'] leading-normal">23s</span>
                        </div>
                    </div>
                </div>
                <div className="py-1.5 bg-white justify-start items-center gap-2 flex">
                    <div className="text-sky-400 text-sm font-semibold font-['Public Sans'] leading-tight">Browse All Product</div>
                    <div className="w-5 h-5 relative" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default TodayBestDeals