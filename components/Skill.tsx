import React from 'react'
import {motion} from "framer-motion";
import { Skill } from '@/typings';
import { url } from 'inspector';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean
  skill: Skill
}


function Skill({directionLeft, skill}:Props) {
  return (
    <div className='group relative flex cursor-pointer '>

      <motion.img
      initial = {{
        x: directionLeft ? -200:200,
        opacity:0
      }}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
       src={urlFor(skill?.image).url()}
       className='rounded-full border-gray-500 object-cover w-24 h-24 xl:2-32 xl:h-24 fileter group-hover:grayscale transition duration-300 ease-in-out'
       />
  <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-24 xl:h-24 rounded-full z-0'>
    <div className='flex items-center justify-center h-full' >
      <p className='text-2xl font-bold text-black opactiy-100'>{skill.progress}</p>
    </div>
  </div>

    </div>
  )
}

export default Skill

// className='absolute opacity-0 gorup-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-28 w-28 xl:w-32 xl:h-32 rounded-full z-0 '
// className='flex items-0center justify-center h-full'