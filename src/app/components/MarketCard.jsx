import React from 'react'
import { MarketData } from '../data';
import Image from 'next/image';

const MarketCard = () => {
    return (
        <>{MarketData.map((data) => (
            <div key={data.id} className="w-full h-52 relative">
                {data.storyImage && <Image src={data.storyImage} fill className=' rounded-lg h-52 object-cover ' />}
                {data.storyDescription && <div className=" bg-slate-950 bg-opacity-75 rounded-lg  p-4 absolute bottom-0">
                    <p className=' text-white w-5/6 text-ellipsis  line-clamp-3'>{data.storyDescription}</p>
                </div>}
            </div>
        ))}</>
    )
}

export default MarketCard