import React from 'react'

function WorkItem({year, title, company, desc, tech}) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm '>
                <span className='inline-block px-1 py-1 font-balo text-white bg-[#35155D] rounded-md'>{year}</span>
                <span className='text-lg font-semibold font-balo text-[#35155D]'>{title}</span>
                <span className='my-1 text-sm font-balo leading-none text-primaryText'>{company}</span>
            </p>
            <p>
                <span className='my-2 font-semibold font-balo text-[#141E46]'>{desc}</span>
            </p>
            <p className='border-b-2 border-black-4 inline-block px-2 ml-2 font-noto text-[#FF6337]'>{tech}</p>
        </li>
    </ol>
  )
}

export default WorkItem