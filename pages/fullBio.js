import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton
} from 'next-share';
import Link from 'next/link';
import data from '../data/bioData.json'
import { useRouter } from 'next/router';
import Head from 'next/head';

const fullBio = () => {

  const [bioData, setBioData] = useState()
  const [briefBioContent, setBriefBioContent] = useState()
  const [shareUrl, setShareUrl] = useState("")
  const router = useRouter();
  const id = router.query.id

  useEffect(() => {
    let tempData = data.filter((item) => item.id === parseInt(id))
    setBioData(tempData[0])
    setBriefBioContent(tempData[0]?.briefBio.split("\n\n"))
    setShareUrl(window.location.href)
  }, [id])


  return (
    <>
      <Head>
        <title>BIO - {bioData?.name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-3 px-3 md:mx-10 md:px-2 my-4'>
        <div className="sm:flex items-center sm:px-7 justify-between w-full border-b-2 border-gray-100 py-4 sticky top-14 sm:top-[88px] z-30 bg-white">

          <div className='flex items-center'>
            <img alt="pic" src={bioData?.image} className="w-36 h-36 rounded-full flex-shrink-0 object-cover object-center" />
            <span className="flex-grow flex flex-col ml-4 sm:ml-10">
              <span className="title-font font-medium mr-0 ml-auto sm:ml-0 text-gray-900 tracking-widest uppercase text-sm sm:text-base">{bioData?.name}</span>
              <span className="mr-0 ml-auto sm:ml-0 w-fit text-xs font-medium tracking-widest uppercase">{bioData?.profession}</span>
              <span className="text-gray-400 text-xs tracking-widest mt-0.5 mr-0 ml-auto sm:ml-0">({bioData?.origin})</span>
              <div className="flex sm:hidden items-center mt-3 w-full justify-end ">
                <WhatsappShareButton
                  url={shareUrl} >
                  <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
                </WhatsappShareButton>
                <TwitterShareButton
                  url={shareUrl} >
                  <TiSocialTwitter className='text-4xl text-rose-400 hover:scale-125 ease-in-out duration-200' />
                </TwitterShareButton>
              </div>
            </span>
          </div>

          <div className='sm:flex mt-4 sm:mt-0 hidden'>
            {/* Share */}
            <div className="flex items-center flex-wrap mt-auto w-full justify-end">
              <WhatsappShareButton
                url={shareUrl} >
                <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
              </WhatsappShareButton>
              <TwitterShareButton
                url={shareUrl} >
                <TiSocialTwitter className='text-4xl text-rose-400 mr-4 hover:scale-125 ease-in-out duration-200' />
              </TwitterShareButton>
            </div>
          </div>
        </div>

        <div className='mb-8 sm:px-7 mt-3 sm:mt-6'>
          {briefBioContent?.map((item, index) => {
            return (
              <p className="leading-relaxed mb-2" key={index}>
                {item}
              </p>
            )
          })}
        </div>

        <div className="cursor-pointer w-fit mx-auto my-6 md:my-12">
          <Link href={"/"}>
            <div className='text-rose-400 flex items-center space-x-1 hover:scale-110 duration-300 hover:underline hover:underline-offset-8'>
              <span className='font-semibold'>
                Other Famous Personalities
              </span>
              <BsArrowRight className='text-xl' />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default fullBio