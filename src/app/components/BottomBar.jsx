import React from 'react'
import app from '../../../public/app-menu.svg'
import todo from '../../../public/todo.svg'
import home from '../../../public/home.svg'
import airplay from '../../../public/airplay.svg'
import message from '../../../public/message.svg'
import Image from 'next/image'

const BottomBar = () => {
    return (
        <div className="sm:hidden fixed flex justify-center items-center h-12 w-full bg-blue-800 bottom-0">
            <div className=" basis-1/5 relative"><Image src={app} width={30} height={30} className='object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='search' /></div>
            <div className=" basis-1/5 relative"><Image src={message} width={30} height={30} className='object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='search' /></div>
            <div className=" basis-1/5 relative h-12 border-red-600 border-b-2"><Image src={home} width={30} height={30} className='object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='search' /></div>
            <div className=" basis-1/5 relative"><Image src={airplay} width={30} height={30} className='object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='search' /></div>
            <div className=" basis-1/5 relative"><Image src={todo} width={30} height={30} className='object-cover absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' alt='search' /></div>
        </div>
    )
}

export default BottomBar