import React from 'react'

const Email = () => {
  return (
    <>
        <div className=' h-72 my-8 shadow-md overflow-hidden  flex justify-center items-center border-[white]  flex-col gap-7'>
            <h1 className=' text-2xl'>Newsletter</h1>
            <h3 className=' text-lg'>Get timely updates from your favorite products</h3>
            <div className=' flex justify-center items-center gap-3'>
                <input type="text" name="" id="" placeholder='Enter you Email address' className=' p-2 lg:w-96 md:w-96 sm:w-96 w-54 outline-none border-b-2 shadow-lg rounded-md' />
                <div className=' bg-flashwhite shadow-lg p-2 rounded-lg'>Subscribe</div>
            </div>
        </div>
    </>
  )
}

export default Email
