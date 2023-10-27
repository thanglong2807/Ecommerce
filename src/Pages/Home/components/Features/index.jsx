import React from 'react'
import CreditCard from './assets/CreditCard.svg'
import Headphones from './assets/Headphones.svg'
import Package from './assets/Package.svg'
import Trophy from './assets/Trophy.svg'
const Features = () => {
    return (
        <div className="container w-[1320px] h-[108px] p-4 bg-white rounded-md border border-gray-200 justify-between items-center gap-7 inline-flex">
            <div className="p-4 bg-white justify-center items-center gap-4 flex">
                <img alt='' src={Package} className="w-10 h-10 relative" />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-48 text-zinc-900 text-sm font-medium font-['Public Sans'] uppercase leading-tight">Fasted Delivery</div>
                    <div className="w-48 text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Delivery in 24/H</div>
                </div>
            </div>
            <div className="w-14 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
            <div className="p-4 bg-white justify-center items-center gap-4 flex">
                <img alt='' src={Trophy} className="w-10 h-10 relative" />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-48 text-zinc-900 text-sm font-medium font-['Public Sans'] uppercase leading-tight">24 Hours Return</div>
                    <div className="w-48 text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">100% money-back guarantee</div>
                </div>
            </div>
            <div className="w-14 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
            <div className="p-4 bg-white justify-center items-center gap-4 flex">
                <img alt='' src={CreditCard} className="w-10 h-10 relative" />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-48 text-zinc-900 text-sm font-medium font-['Public Sans'] uppercase leading-tight">Secure Payment</div>
                    <div className="w-48 text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Your money is safe</div>
                </div>
            </div>
            <div className="w-14 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
            <div className="p-4 bg-white justify-center items-center gap-4 flex">
                <img alt='' src={Headphones} className="w-10 h-10 relative" />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="w-48 text-zinc-900 text-sm font-medium font-['Public Sans'] uppercase leading-tight">Support 24/7</div>
                    <div className="w-48 text-gray-500 text-sm font-normal font-['Public Sans'] leading-tight">Live contact/message</div>
                </div>
            </div>
        </div>
    )
}

export default Features