import React from 'react'
import ArrowRight from '../../Pages/Home/components/Banner/assets/ArrowRight.svg'
const Button = () => {
    return (
        <button className="px-8 bg-orange-400 rounded-[3px] justify-center items-center gap-3 inline-flex">
            <span className="text-white text-base font-bold font-['Public Sans'] uppercase leading-[56px] tracking-tight">
                Shop Now
            </span>
            <img alt="" src={ArrowRight} className="w-6 h-6 relative" />
        </button>
    )
}

export default Button