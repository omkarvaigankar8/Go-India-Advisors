
import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/logo.webp'
import Link from 'next/link'
import StockRates from '../StockRates'
import Button from './Button'
import search from '../../../../public/search.svg'
import user from '../../../../public/user.svg'

const Header = () => {
    return (
        <div className="">
            <div className='flex items-center justify-between px-8 py-3 gap-20 max-sm:gap-2 max-sm:px-4 max-sm:w-full'>
                <div className="flex items-center justify-start gap-4 basis-3/4 max-sm:basis-11/12">
                    <div className="">
                        <Image src={logo} alt='logo' width={123} height={80} className=' max-sm:w-[80px] max-sm:h-[40px]' />
                    </div>
                    <div className="w-full relative">
                        <input
                            className=' w-full text-black bg-slate-200 h-14 max-sm:min-w-[200px] max-sm:h-[40px] rounded-xl shadow-inner border-1 border-slate-400 outline-none px-4'
                            placeholder='Search here'
                        />
                        <Image src={search} width={30} height={30} className=' max-sm:h-[20px] max-sm:w-[20px] absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-50%] object-cover' alt='search' />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 basis-1/4 max-sm:hidden">
                    <Link href="/" className="text-black" >Contact Us</Link>
                    {/* <button>SignUp</button>
                    <button>SignIn</button> */}
                    <Button text="SignUp" />
                    <Button text="SignIn" />
                </div>
                <div className="sm:hidden max-sm:basis-1/12">
                    <Image src={user} width={30} height={30} className='object-contain' alt='writer' />
                </div>

            </div>
            <div className="w-full bg-black">
                <StockRates />
            </div>
        </div>
    )
}

export default Header