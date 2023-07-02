import React, { useEffect, useState } from 'react'
import { kFormatter, time_ago } from './utils'
import { ForumData } from '../data'
import heart from '../../../public/heart.svg'
import eye from '../../../public/eye.svg'
import share from '../../../public/share.svg'
import message2 from '../../../public/message2.svg'
import Image from 'next/image'

const ForumCard = (props) => {
    const [forum, setForum] = useState(ForumData);
    useEffect(() => {
        let data;
        if (props.selectSector) {
            data = ForumData.filter((item) => {
                return item.sector == props.selectSector
            })
            setForum(data);
        }
        if (props.authorSearch) {
            data = ForumData.filter((item) => {
                return item.authorTitle == props.authorSearch
            })
            setForum(data)
        }
    }, [props.selectSector, props.authorSearch])
    return (
        <div className="filter-listing max-h-[720px] overflow-y-scroll overscroll-black max-sm:max-h-none max-sm:overflow-hidden ">
            {forum.map((data) => (
                <div className="filter-card mb-5 bg-white shadow-md rounded-xl relative p-7 mr-8 max-sm:mr-0  max-sm:p-2">
                    {data.bigImage && <Image src={data.bigImage} width={500} height={500} className='mx-auto object-contain max-sm:w-[200px] max-sm:h-[100px]' alt='card' />}
                    <div className="flex gap-4 items-start max-sm:gap-2">
                        {data.authorTitle && <Image src={data.authorImage} width={50} height={50} className='object-cpv max-sm:w-[30px] max-sm:h-[30px]' alt='writer' />}
                        <div className="w-[700px] max-sm:w-fit">
                            <div className="flex gap-4 items-center  max-sm:gap-2">
                                {data.authorTitle && <h5 className=' font-semibold text-sm'>{data.authorTitle}</h5>}
                                {data.sector && <div className=' bg-red-700 px-2 py-1 rounded-2xl text-white text-xs'>{data.sector}</div>}
                            </div>
                            {data.description && <p className=' mt-4 text-sm'>{data.description}</p>}
                            <div className="mt-7 flex share items-center gap-3 likes">
                                {data.likes && <div className="flex items-center gap-1 text-xs">
                                    <Image src={heart} width={20} height={20} className='rounded  object-contain' alt='like' />
                                    <span>{kFormatter(data.likes)} likes</span>
                                </div>}
                                {data.seen && <div className="flex items-center gap-1   text-xs">
                                    <Image src={eye} width={20} height={20} className='rounded  object-contain' alt='like' />
                                    <span>{kFormatter(data.seen)}</span>
                                </div>}
                                {data.comments && <div className="flex items-center gap-2   text-xs">
                                    <Image src={message2} width={20} height={20} className='rounded  object-contain' alt='like' />
                                    <span>{kFormatter(data.comments)} comments</span>
                                </div>}
                                <div className="flex items-center gap-1   text-xs">
                                    <Image src={share} width={20} height={20} className='rounded  object-contain' alt='like' />
                                    <span>share</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {data.timePublished && (<div className="times absolute top-[20px] right-4  text-xs  text-sky-500">
                        {time_ago(data.timePublished)}
                    </div>)}
                </div>
            ))}
        </div>
    )
}

export default ForumCard