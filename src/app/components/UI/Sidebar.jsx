'use client'
import React from 'react'
import logo from '../../../../public/logo.webp'
import arrow from '../../../../public/arrow.svg'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = (props) => {
    return (

        <div className={`${props.showSidebar !== true && 'w-8'} relative max-sm:absolute max-sm:z-10   max-h-full h-[78vh]`}>
            <div className={`absolute  top-[0] right-0   ${props.showSidebar === true ? 'basis-1/4 sm:z-10   min-w-[300px] w-full left-0' : 'flex-grow-0 w-0 left-[-17%]'} bg-blue-700  max-h-full h-[78vh] relative `}>
                <div className={`${props.showSidebar !== true && 'hidden'} flex justify-between items-center border-b-2 border-slate-400 h-20 px-8`}>
                    <div className="flex items-center gap-4">
                        <Image src={logo} width={50} height={50} alt='user' />
                        <h4 className='text-white'>Hello, User</h4>
                    </div>
                    <Image src={logo} width={50} height={50} alt='bell' />
                </div>
                <ul className={` ${props.showSidebar !== true && 'hidden'} mt-3 text-white text-xl font-medium`}>
                    <li className=' py-3 hover:bg-blue-900 pl-8 pr-4'>
                        <Link href="/" className="flex items-center gap-4 relative"><Image src={logo} width={30} height={30} alt='dollar' className='absolute' /> <span className='ml-10' >Discussion Forum</span></Link>
                    </li>
                    <li className=' py-3 hover:bg-blue-900 pl-8 pr-4'>
                        <Link href="/" className="flex items-center gap-4 relative"><Image src={logo} width={30} height={30} alt='dollar' className='absolute' /> <span className='ml-10' >Market Place</span></Link>
                    </li>
                    <li className=' py-3 hover:bg-blue-900 pl-8 pr-4'>
                        <Link href="/" className="flex items-center gap-4 relative ml-10">Sentiment</Link>
                    </li>
                    <li className=' py-3 hover:bg-blue-900 pl-8 pr-4'>
                        <Link href="/" className="flex items-center gap-4 relative ml-10">Market</Link>
                    </li>

                </ul>
            </div>
            <div className={`absolute w-8 h-14 bg-blue-700  top-[50%] translate-y-[-50%]  ${props.showSidebar ? 'right-[-9%]' : 'right-[0%]'}  flex justify-center items-center`}><button onClick={() => {
                props.setShowSidebar((prevState) => !prevState)
            }}><Image src={arrow} alt='arrow' width={15} height={15} /></button></div>
        </div>
    )
}

export default Sidebar