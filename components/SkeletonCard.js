import React from 'react'

const SkeletonCard = () => {
  return (
    <div className='px-5 py-4 md:px-6 lg:px-12 md:py-6 my-2 min-w-full md:min-w-0 md:w-1/2 2xl:w-1/3 flex flex-col items-start rounded-2xl hover:shadow-[-10px_-10px_30px_4px_rgba(139,92,246,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ease-in-out transition-shadow'>
      <div className='grid grid-cols-2 justify-between w-full'>
        <p className='w-24 h-24 md:w-28 md:h-28 rounded-full bg-gray-200 dark:bg-gray-300 animate-pulse'></p>
        <div className="flex flex-col ml-5 space-y-3 justify-center w-full animate-pulse">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-24"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-32"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 w-24"></div>
        </div>
      </div>
      <div className='mt-5 w-full animate-pulse'>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300  mb-2.5"></div>
      </div>
      <div className='mt-3 w-full animate-pulse flex items-center justify-between pb-4 mb-4 border-b-2 border-gray-100'>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5 w-24"></div>
        <div className='animate-pulse w-fit flex space-x-2'>
          <p className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-300'></p>
          <p className='w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-300'></p>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard