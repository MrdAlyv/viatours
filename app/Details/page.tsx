import React from 'react'
import gridphoto from '@/app/assets/div.tourSingleGrid.png'
import Image from 'next/image'
const Details = () => {
    return (
        <div className='mx-80 my-20 '>
            <h1 className=' text-3xl font-bold w-1/2 ' >Phi Phi Islands Adventure Day Trip with
                Seaview Lunch by V. Marine Tour</h1>
            <div className='flex flex-row gap-11 mt-7 mx-14'>
                <p>4.8 (269)   </p>
                <p>Paris, France </p>
                <p>30K+ booked</p>
            </div>
            <Image src={gridphoto} alt="phiphi" className='mt-4' />
            <div className='flex flex-row gap-32'>
                <div className='w-3/4'>
                    <h1 className='text-3xl font-bold my-11'>Tour Overview</h1>
                    <p>The Phi Phi archipelago is a must-visit while in Phuket, and this speedboat trip whisks you around the islands in one day.
                        Swim over the coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at Bamboo Island, and visit Monkey Beach and
                        Maya Bay, immortalized in The Beach. Boat transfers, snacks, buffet lunch, snorkeling equipment, and Phuket hotel pickup
                        and drop-off all included.</p>
                </div>

                <div className='my-11 shadow-lg rounded-2xl w-96 p-11'>
                    <div className='flex flex-row gap-8'>
                        <p>From</p>
                        <p>$1,200</p>
                    </div>
                    <p className='text-xl font-bold my-2'>Tickets</p>

                    <div className='flex flex-row gap-11 my-4'>
                        <p>Adult (18+ years) $282.00</p>
                        <input type="checkbox" name="circle" id="circle" className='w-5 h-5' />
                    </div>
                    <div className='flex flex-row gap-7'>
                        <p>Youth (13-17 years) $168.00</p>
                        <input type="checkbox" name="circle" id="circle" className='w-5 h-5' />
                    </div>
                    <div className='flex flex-row gap-6 my-4'>
                        <p>Children (0-12 years) $80.00</p>
                        <input type="checkbox" name="circle" id="circle" className='w-5 h-5' />
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p className='font-bold'>Total:</p>
                        <p className='font-extrabold'>$530.00</p>
                    </div>
                    <button className='text-center w-72 h-16 bg-orange border text-white rounded-2xl mt-7 hover:bg-white hover:text-orange'>Book now</button>
                </div>
            </div>
        </div>
    )
}

export default Details
