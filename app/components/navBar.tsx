'use client'
import React from 'react'
import Image from 'next/image'
import Logo from "@/app/assets/Link → logo-1.svg.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const Nav = () => {
    const router = useRouter()
    return (

        <div className='flex items-center my-5 mx-32 gap-80 '>
            <div className='flex items-center gap-8 '>
                <Image onClick={() => router.push('/')} src={Logo} alt="logo" className=' cursor-pointer' />
                <input type="text" className=' w-96' placeholder='Search destinations or activities' />
            </div>
            <div className='flex items-center  gap-20 '>

                <Link href="/">Destinations</Link>
                <Link href="/">Activities</Link>
                <Link href="/">USD</Link>
                <Link className=' bg-orange w-20 h-11 rounded-3xl flex items-center justify-center ' href="/">Log in</Link>

            </div>
        </div>

    )
}

export default Nav
