import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';

import { useRouter } from 'next/router';

const Card = ({ data }) => {
  const [likeState, setLikeState] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const router = useRouter();

  const handleLikeClick = () => {
    setLikeState(false)
    setLikeCount(likeCount - 1)
  }
  const handleUnlikeClick = () => {
    setLikeState(true)
    setLikeCount(likeCount + 1)
  }

  const handleReadMoreClick = (id) => {
    // router.push(`/fullBlog/?id=${id}`)
    console.log(id)
  }

  return (
    <div className="px-2 py-4 md:px-6 lg:px-12 md:py-6 my-2 min-w-full md:min-w-0 md:w-1/2 2xl:w-1/3 flex flex-col items-start md:hover:shadow-xl rounded-2xl">
      <div className=''>
        <div className='flex items-center justify-between'>
          <img
            alt="img"
            src={data?.image}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full flex-shrink-0 object-cover object-center " />
          <div className="flex flex-col ml-5 space-y-1 text-right">
            <span className="title-font font-medium text-gray-900 tracking-widest uppercase text-sm md:text-base">{data?.name}</span>
            <div className="mr-0 ml-auto w-fit text-xs font-medium tracking-widest uppercase">{data?.profession}</div>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">({data?.origin})</span>
          </div>
        </div>
        <div className='mt-3'>
          <p className="leading-relaxed mb-8 line-clamp-3 text-sm md:text-base">{data?.bio}</p>

        </div>
      </div>

      {/* Bottom part */}
      <div className="flex justify-between items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <a onClick={() => handleReadMoreClick(data?.id)} className="text-blue-500 inline-flex items-center cursor-pointer hover:animate-bounce text-sm md:text-base">Read More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        {/* <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
          {likeState ? <FcLike className='text-2xl cursor-pointer' onClick={handleLikeClick} /> : <FcLikePlaceholder className='text-2xl cursor-pointer' onClick={handleUnlikeClick} />}
          <span className='ml-1'>{likeCount}</span>
        </span> */}
        <div className='flex items-center'>
          <WhatsappShareButton
            url={'https://blog-like-star.vercel.app'} >
            <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
          </WhatsappShareButton>
          <TwitterShareButton
            url={'https://blog-like-star.vercel.app'} >
            <TiSocialTwitter className='text-4xl text-blue-400 mr-4 hover:scale-125 ease-in-out duration-200' />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default Card