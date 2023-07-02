import React from 'react'
import Image from 'next/image'
import search from '../../../public/search.svg'

const Filters = (props) => {
    return (
        <div className="filters">
            <h3 className='text-xl text-black font-semibold' >Filters</h3>
            <div className="flex justify-center items-center my-5 text-base text-white font-medium gap-6 max-sm:gap-2 bg-white py-4 shadow-md rounded-xl">
                <div className=" bg-red-700 px-2 py-1 rounded-3xl " onClick={() => {
                    props.setSelectSector('Sector 1')
                }}><h4 className=' max-sm:text-xs'>Sector 1</h4></div>
                <div className="bg-blue-900  px-2 py-1 rounded-3xl" onClick={() => {
                    props.setSelectSector('Sector 2')
                }}><h4 className=' max-sm:text-xs'>Sector 2</h4></div>
                <div className=" bg-yellow-500 px-2 py-1 rounded-3xl" onClick={() => {
                    props.setSelectSector('Sector 3')
                }}><h4 className=' max-sm:text-xs'>Sector 3</h4></div>
                <div className="relative">
                    <input
                        className='text-black bg-slate-200 h-14 max-sm:h-8 rounded-xl shadow-inner border-1 border-slate-400 outline-none px-4 max-sm:px-2 w-full max-sm:text-xs max-sm:w-[120px]'
                        placeholder='Search here'
                        onChange={(e) => {
                            props.setSearchAuthor(e.target.value);
                        }}
                    />
                    <Image src={search} width={30} height={30} className='max-sm:h-[20px] w-[20px] absolute top-[50%] right-0 translate-y-[-50%] translate-x-[-50%] object-cover' alt='search' />
                </div>

            </div>
        </div>
    )
}

export default Filters