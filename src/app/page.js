'use client'
import Sidebar from './components/UI/Sidebar'
import { useState } from 'react'
import Sponsors from './components/Sponsors'
import BottomBar from './components/BottomBar'
import ForumCard from './components/ForumCard'
import MarketCard from './components/MarketCard'
import Filters from './components/Filters'

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showForum, setShowForum] = useState(true);
  const [selectSector, setSelectSector] = useState('');
  const [authorSearch, setSearchAuthor] = useState('');

  return (
    <main className="">
      <div className="px-8 py-4 max-sm:hidden">
        <h1 className='text-2xl text-red-500 uppercase  font-semibold'>Featured Companies</h1>
      </div>
      <Sponsors showForum={showForum} />
      <div className="hidden max-sm:flex  bg-blue-800 justify-center items-center ">
        <div className=" w-1/2 text-center py-4  hover:bg-blue-950 hover:border-red-600 hover:border-b-2" onClick={() => {
          setShowForum(true)
        }}>
          <h2 className=' text-sm text-white'>Discussion Forum</h2>
        </div>
        <div className="  w-1/2 text-center py-4 hover:bg-blue-950 hover:border-red-600 hover:border-b-2" onClick={() => {
          setShowForum(false)
        }}>
          <h2 className=' text-sm text-white'>Market Stories</h2>
        </div>
      </div>
      <div className="flex w-full flex-row">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className={`${showSidebar ? 'px-8 max-sm:basis-[100%]' : ''} basis-1/2 w-full max-sm:basis-[100%] max-sm:px-0 ${showForum ? '' : 'hidden'} `}>
          <h2 className='text-2xl text-red-500 uppercase font-semibold pt-4 pb-2 max-sm:hidden'>Discussion Forum</h2>
          <div className=" px-12 max-sm:px-6 max-sm:pr-2">
            <Filters setSelectSector={setSelectSector} setSearchAuthor={setSearchAuthor} />
            <ForumCard selectSector={selectSector} authorSearch={authorSearch} />
          </div>
        </div>
        <div className={`${showSidebar ? 'basis-1/4 max-sm:basis-[100%]' : 'basis-1/2'} max-sm:basis-[100%]  w-full pr-8 max-sm:px-10 py-5 ${showForum && 'max-sm:hidden'}`}>
          <h1 className="text-2xl text-red-500 uppercase font-semibold mb-12 max-sm:hidden">Market Stories</h1>
          <div className={`${showSidebar ? 'flex flex-col ' : 'grid grid-cols-2'} gap-x-14 gap-y-4 max-2xl:grid-cols-1`}>
            <MarketCard />
          </div>
        </div>
      </div>
      <BottomBar />
    </main>
  )
}
