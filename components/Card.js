import React, { useEffect, useState } from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';

import { useRouter } from 'next/router';

const Card = ({ data, customClasses }) => {
  const router = useRouter();
  const [shareUrl, setShareUrl] = useState("")

  const handleReadMoreClick = (id) => {
    router.push(`/fullBio/?id=${id}`)
  }

  useEffect(() => {
    setShareUrl(window.location.host)
  }, [])
  

  return (
    <div className={`${customClasses} px-2 py-4 md:px-6 lg:px-12 md:py-6 my-2 min-w-full md:min-w-0 md:w-1/2 2xl:w-1/3 flex flex-col items-start rounded-2xl hover:shadow-[-10px_-10px_30px_4px_rgba(139,92,246,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ease-in-out transition-shadow`}>
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
        <a onClick={() => handleReadMoreClick(data?.id)} className="text-blue-500 inline-flex items-center cursor-pointer text-sm md:text-base">Read More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <div className='flex items-center'>
          <WhatsappShareButton
            url={shareUrl+"/fullBio?id="+data?.id}>
            <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
          </WhatsappShareButton>
          <TwitterShareButton
            url={shareUrl+"/fullBio?id="+data?.id} >
            <TiSocialTwitter className='text-4xl text-blue-400 mr-4 hover:scale-125 ease-in-out duration-200' />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

export default Card