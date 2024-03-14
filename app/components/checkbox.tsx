'use client'
import React from 'react'
const Checkbox = () => {
    return (
        <div>
            <div className=' w-72 shadow-lg py-8 '>
                <div className='mx-4'>
                    <p className='text-lg my-4'>Tour Type</p>
                    <div className='flex flex-row gap-1 my-4 '>
                        <input type="checkbox" />
                        <p> Nature Tours</p>
                    </div>
                    <div className='flex flex-row gap-1 my-4 '>
                        <input type="checkbox" />
                        <p> Nature Tours</p>
                    </div>
                    <div className='flex flex-row gap-1 my-4 '>
                        <input type="checkbox" />
                        <p> Adventure Tours </p>
                    </div>
                    <div className='flex flex-row gap-1 my-4 '>
                        <input type="checkbox" />
                        <p> Cultural Tours</p>
                    </div>
                    <div className='flex flex-row gap-1  my-4'>
                        <input type="checkbox" />
                        <p> Food Tours</p>
                    </div>
                    <a className=' text-darkblue hover:underline' href="#">See More</a>

                </div>
            </div>
        </div>
    )
}

export default Checkbox
