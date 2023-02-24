import Card from '@/components/Card'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import data from '../data/bioData.json'
import Link from 'next/link'
import { FaPenNib } from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'

export default function Home() {
  console.log(data)
  const [quotesData, setQuotesData] = useState([])

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        setQuotesData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, []);

  return (
    <>
      <Head>
        <title>BIO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="mt-3 md:mt-6 mx-6 md:mx-16">

        <div className='md:flex flex-row-reverse items-center md:gap-x-7'>
          <img src="/elonMusk.png" alt="poster" className='w-80 h-80 md:w-[520px] md:h-[520px] flex-shrink-0 object-cover object-center rounded-full mx-auto' />
          <div className='mt-3 md:mt-0'>
            <h2 className="custom-font font-bold uppercase text-4xl md:text-6xl mx-8 md:mx-auto leading-snug text-left tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400">Short Bios of Famous Personalities.</h2>
            <p className="text-sm md:text-lg mx-8 md:mx-auto text-left leading-normal mt-4">
              Welcome to our website featuring short bios of inspirational personalities. Discover the stories of some of the most famous and influential individuals in history and be inspired by their remarkable achievements.
            </p>

            <div className="mt-8">
              <button className="text-[#1b1b1b] bg-white px-6 py-2 rounded-full font-bold hover:text-white border-2 hover:duration-300 hover:border-white uppercase flex space-x-2 items-center hover:bg-gradient-to-t hover:from-rose-500 hover:to-pink-400 hover:scale-110 hover:ease-in-out">
                <BiNotepad className="text-xl" />
                <span>Explore</span>
              </button>
            </div>
          </div>


        </div>

        {/* Quotes */}
        <div className="my-6 md:my-8 md:w-1/2">
          <h2 className="custom-font uppercase text-2xl md:text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Quote of the Day</h2>
          <p className=' font-medium'>
            {quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.text}
          </p>
          <p className=" text-xs tracking-widest mt-0.5 uppercase">
            - {" "}{quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.author}
          </p>
        </div>

        {/* BIO Cards */}
        <div>
          <h2 className="custom-font uppercase text-2xl md:text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Short Bios of Famous Personalities</h2>
          <p className=''>Welcome to our website celebrating the lives of famous and influential people. Explore our collection of short biographies, from Steve Jobs to Nelson Mandela, and be inspired by their legacies. Discover the stories of some of the world's most remarkable individuals and find motivation in their achievements.</p>
          <div className='my-4 flex flex-wrap'>
            {data.map((item, index) => {
              return <Card key={index} data={item} />
            })}
          </div>
        </div>
      </div>

    </>
  )
}
