import React from 'react'
import Image from 'next/image'
import icon from "@/app/assets/ticket.svg fill (1).png"
const Card = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl my-3 mx-9 font-bold'>
                Why choose Tourz
            </h1>
            <div className='flex flex-row justify-center items-center gap-36 p-16'>
                <div>
                    <Image src={icon} alt="Tourist Icon" />
                    <p>Ultimate flexibility</p>
                    <p>You're in control, with free
                        cancellation and payment options to
                        satisfy any plan or budget.</p>
                </div>
                <div>
                    <Image src={icon} alt="Tourist Icon" />
                    <p>Ultimate flexibility</p>
                    <p>You're in control, with free
                        cancellation and payment options to
                        satisfy any plan or budget.</p>
                </div>
                <div>
                    <Image src={icon} alt="Tourist Icon" />
                    <p>Ultimate flexibility</p>
                    <p>You're in control, with free
                        cancellation and payment options to
                        satisfy any plan or budget.</p>
                </div>

            </div>
        </div>
    )
}

export default Card
