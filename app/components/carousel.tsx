'use client'
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import paris from '@/app/assets/div.featureImage__image (1).png'
import singapore from '@/app/assets/div.featureImage__image (2).png'
import roma from '@/app/assets/div.featureImage__image (3).png'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '260px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'gray',
};

const Trending: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            <div >
                <div style={contentStyle} className=' flex  justify-center items-center gap-7'>
                    <Image src={paris} alt='parisimg' />
                    <p className='text-2xl font-black text-black'>Paris</p>
                    <p className='text-2xl font-black'> 100 +Tours</p>

                </div>
            </div>
            <div>
                <div style={contentStyle} className=' flex justify-center items-center gap-7'>
                    <Image src={singapore} alt='singaporeimg' />
                    <p className='text-2xl font-black'>Singapore</p>
                    <p className='text-2xl font-black'> 300 +Tours</p>
                </div>
            </div>
            <div>
                <div style={contentStyle} className=' flex justify-center items-center gap-7'>
                    <Image src={roma} alt='romaimg' />
                    <p className='text-2xl  black font-black'>Roma</p>
                    <p className='text-2xl font-black'> 400 +Tours</p>
                </div>
            </div>

        </Carousel>
    );
};

export default Trending;