"use client"
import React from 'react'
import Checkbox from '../components/checkbox'
import islandImage from "@/app/assets/image (3).png"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Details = () => {
  const router = useRouter()
  return (
    <div className=' mx-56 my-20   '>
      <h1 className='text-4xl font-bold'>Explore all things to do in Phuket</h1>
      <div className='cont flex flex-row gap-9'>
        <div>
          <div className=' w-72 h-36 rounded-lg bg-orange my-11 flex flex-col items-center justify-center'>
            <p className='text-white'>When are you traveling?</p>
            <input type="text" className=' h-12 my-3 rounded-xl p-4 ' placeholder='February 05 ~ March 14' />
          </div>
          <Checkbox />
        </div>
        <div className='my-11 '>
          <p> 1362 results</p>
          <div className=' w-240 h-96 shadow-2xl rounded-2xl p-8 '>
            <div className='esas grid grid-cols-3'>
              <div>
                <Image src={islandImage} alt='island' />
              </div>
              <div>
                <p className='mx-4 text-sm'>Paris, France</p>
                <p className=' text-lg font-bold my-3 '>Phi Phi Islands Adventure Day Trip with
                  Seaview Lunch by V. Marine Tour</p>
                <p className='text-center text-sm'>4.8 (269)</p>
                <p className='my-1'>The Phi Phi archipelago is a must-visit while in
                  Phuket, and this speedboat trip.</p>
                <div className='flex flex-row gap-16 text-orange my-5'>
                  <p>Best Price Guarantee</p>
                  <p>Free Cancellation</p>
                </div>
              </div>
              <div className='text-center'>
                <p className=' font-semibold mb-28'>2 Days 1 Nights</p>
                <p className=' line-through text-gray' >$1200</p>
                <p className='font-bold'> From <span className='text-xl'>$114</span></p>
                <button type='button' onClick={() => router.push('/Details')} className='mt-11 text-orange border-orange border h-14 w-48 rounded-3xl hover:bg-orange hover:text-white'>View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
