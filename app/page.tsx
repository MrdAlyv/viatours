import React from 'react'
import "./globals.css";
import Card from './components/card';
import Link from 'next/link';
import Trending from './components/carousel';
const Home = () => {
  return (
    <div>
      <div className='home-bg mx-16'>
        <div className=' flex flex-col items-center p-28'>
          <h1 className=' text-7xl text-white'>Your world of joy</h1>
          <p className='text-white'>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
        </div>
        <div className='inputs text-white w-10 h-10 flex items-center px-[450px] gap-16'>

          <div className='flex flex-row gap-6'>
            <div>
              <input className=' h-10 w-10 ' type="checkbox" />
            </div>
            <div>
              <p>Where</p>
              <p>Search destinations</p>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div>
              <input type="checkbox" className=' h-10 w-10 ' />
            </div>
            <div>
              <p>Where</p>
              <p>Search destinations</p>
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div>
              <input type="checkbox" className=' h-10 w-10 ' />
            </div>
            <div>
              <p>Where</p>
              <p>Search destinations</p>
            </div>
          </div>
          <button className=' bg-orange w-[60px] h-16 rounded-2xl'>Search</button>
        </div>
      </div>
      <Card />
      <div className='flex flex-row items-center justify-between '>
        <h1 className='text-3xl font-bold  my-3 mx-9 '>Trending destinations</h1>
        <Link className='mx-8 hover:text-orange' href={"/List"}>See All</Link >
      </div>
      <Trending />
    </div >
  )
}

export default Home
