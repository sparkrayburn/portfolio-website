import React from 'react'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { urlFor } from '@/sanity'
type Props = {
  pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, The Name's ${pageInfo?.name}`, 
          "<Developer>", 
          "<Coffee.tsx>", 
          "<Creator>"
        ],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles  />
      <img 
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src  = {urlFor(pageInfo?.profilePic).url()}  />

    <div className='z-20'>
      <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >SOFTWARE ENGINEER</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'  />

        </h1>
        <div className='pt-5'>
          <Link href ="#about" >
          <button className='heroButton' >About</button>
          </Link>
        <Link href ="#projects">
        <button className='heroButton'>Projects</button>
        </Link>
        
        <Link href ="#skills">
        <button className='heroButton'>Skills</button>
        </Link>
        
      <Link href ="#experience">
      <button className='heroButton'>Contact</button>
      </Link>
        </div>
    </div>

  </div>
  )
}

// https://cdn.sanity.io/images/hf7i70l9/production/e6ba3568f79a93e1f1df510e6b7c1b893fef5bc4-591x591.jpg