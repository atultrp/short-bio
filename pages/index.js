import Card from '@/components/Card'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import data from '../data/bioData.json'
import Link from 'next/link'
import { BiNotepad } from 'react-icons/bi'

export default function Home() {
  const [quoteData, setQuoteData] = useState([])
  const [bioData, setBioData] = useState()

  const fetchRandomQuotes = async () => {
    const response = await axios.get("https://type.fit/api/quotes")
    let randomIndex = Math.floor(Math.random() * (response.data.length + 1))
    setQuoteData(response.data[randomIndex])
    console.log(response.data[randomIndex], randomIndex, "respise")
  }
  useEffect(() => {
    fetchRandomQuotes()
  }, []);

  const handleSearch = (query) => {
    let tempData = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
    setBioData(tempData)
  }

  useEffect(() => {
    if (data) {
      setBioData(data)
    }
  }, [data])



  return (
    <>
      <Head>
        <title>BIO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="mt-3 md:mt-6 mx-6 lg:mx-16">

        <div className='lg:flex flex-row-reverse items-center lg:gap-x-7'>
          <img src="/elonMusk.png" alt="poster" className='w-80 h-80 md:w-96 md:h-96 xl:w-[450px] xl:h-[450px] flex-shrink-0 object-cover object-center rounded-full mx-auto' />
          <div className='mt-3 lg:mt-0'>
            <h2 className="custom-font font-bold uppercase text-4xl md:text-6xl md:mx-auto leading-snug text-center lg:text-left tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400">Short Bios of Famous Personalities.</h2>
            <p className="text-sm md:text-lg md:mx-auto text-center lg:text-left leading-normal mt-4">
              Welcome to our website featuring short bios of inspirational personalities. Discover the stories of some of the most famous and influential individuals in history and be inspired by their remarkable achievements.
            </p>

            <div className="mt-8">
              <a href="#bioSection" className='w-fit'>
                <button className="text-[#1b1b1b] mx-auto lg:mx-0 bg-white px-6 py-2 rounded-full font-bold hover:text-white border-2 hover:duration-300 hover:border-white uppercase flex space-x-2 items-center hover:bg-gradient-to-t hover:from-rose-500 hover:to-pink-400 hover:scale-110 hover:ease-in-out">
                  <BiNotepad className="text-xl" />
                  <span>Explore</span>
                </button>
              </a>
            </div>
          </div>


        </div>

        {/* Quotes */}
        <div className="my-6 md:my-8 md:w-1/2">
          <h2 className="custom-font uppercase text-2xl md:text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Quote of the Day</h2>
          {quoteData && <div className='mt-1'>
            {quoteData?.text?.split(";")?.map(item => {
              return <p className='text-sm sm:text-base font-medium'>
                {item}
              </p>
            })}
            <p className="text-xs tracking-widest mt-0.5 uppercase">
              - {" "}{quoteData?.author}
            </p>
          </div>}
        </div>

        {/* BIO Cards */}
        <div id='bioSection'>
          <h2 className="custom-font uppercase text-2xl md:text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Short Bios of Famous Personalities</h2>
          <p className='text-sm sm:text-base mt-1'>Welcome to our website celebrating the lives of famous and influential people. Explore our collection of short biographies, from Steve Jobs to Nelson Mandela, and be inspired by their legacies. Discover the stories of some of the world's most remarkable individuals and find motivation in their achievements.</p>

          {/* Searchbar */}
          <div class='max-w-md my-6'>
            <div class="relative flex items-center w-full h-12 rounded-lg shadow-[0px_0px_10px_0px_#00000024]
            focus-within:shadow-[0px_0px_15px_2px_#00000024] ease-in-out transition-shadow bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-rose-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search Personalities..."
                onChange={(e) => { handleSearch(e.target.value) }}
              />
            </div>
          </div>

          {/* Cards */}
          <div className='my-4 flex flex-wrap'>
            {bioData?.map((item, index) => {
              return <Card key={index} data={item} />
            })}
          </div>
        </div>
      </div>

    </>
  )
}
