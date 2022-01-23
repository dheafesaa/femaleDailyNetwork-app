import React from 'react';

const Banner = () => {
  return (
      <div className='flex flex-col items-center py-4'>
          <div className='bg-neutral-300 w-[970px] h-[50px] flex justify-center border-2 border-stone-400'>
              <p className='font-semibold text-slate-600 text-3xl items-center'>Top Frame 970x50</p>
          </div>
          <div className='bg-neutral-300 w-[970px] h-[250px] flex justify-center mt-6 border-2 border-stone-400'>
              <p className='flex font-semibold text-slate-600 text-3xl items-center'>Billboard 970x250</p>
          </div>
      </div>
  )
}

export default Banner;
