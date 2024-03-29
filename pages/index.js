import Card from '@/components/Card'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import data from '../data/bioData.json'
import { BiNotepad, BiUpArrowAlt } from 'react-icons/bi'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import SkeletonCard from '@/components/SkeletonCard'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { shuffleArray } from '@/utils/utils'

export default function Home() {
  const [quoteData, setQuoteData] = useState([])
  const [bioData, setBioData] = useState([])
  const [filterVal, setFilterVal] = useState()
  const [openOptions, setOpenOptions] = useState(false)
  const [showSkeleton, setShowSkeleton] = useState(true)
  const [contentIndex, setContentIndex] = useState(12)
  const [showScroll, setShowScroll] = useState(false)
  let options = ["Name", "Profession", "Origin"]
  const popUpRef = useRef();

  // Fetch Random Quotes
  const fetchRandomQuotes = async () => {
    const response = await axios.get("https://type.fit/api/quotes")
    let randomIndex = Math.floor(Math.random() * (response.data.length + 1))
    setQuoteData(response.data[randomIndex])
  }

  useEffect(() => {
    fetchRandomQuotes()
  }, []);

  // Handle Search Input and Filter
  const handleSearch = (query) => {
    let tempData = data.filter((item) => {
      if (!filterVal) {
        return item.name.toLowerCase().includes(query.toLowerCase())
      }
      else {
        return item[filterVal.toLowerCase()].toLowerCase().includes(query.toLowerCase())
      }
    })
    setBioData(tempData)
  }

  // Handle Click Outside
  useOnClickOutside(popUpRef, () => {
    setOpenOptions(false)
  });

  // Storing data in state
  useEffect(() => {
    if (data) {
      let tempData = shuffleArray(data)
      setBioData(tempData)
    }
  }, [data])

  // Skeleton
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false)
    }, 1500)
  }, [])

  // Scroll To Top
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])


  return (
    <>
      <Head>
        <title>Short Bio</title>
        <meta name="description" content="Our website showcases short biographies of some of the world's most famous and inspirational personalities from different walks of life. Our mission is to inspire and motivate our readers through the stories of others. Learn valuable lessons about perseverance, hard work, and determination by reading about the accomplishments and journeys of successful people. Explore interesting facts and trivia about the personalities to gain a deeper insight into their lives. Join us in pursuing our dreams and aspirations - visit our website now!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-3 md:my-6 mx-6 lg:mx-16 scroll-smooth">

        <div className='lg:flex flex-row-reverse items-center lg:gap-x-7'>
          <img src="/elonMusk.png" alt="poster" className='w-80 h-80 md:w-96 md:h-96 xl:w-[450px] xl:h-[450px] flex-shrink-0 object-cover object-center rounded-full mx-auto' />
          <div className='mt-3 lg:mt-0'>
            <h2 className="custom-font font-bold uppercase text-4xl md:text-6xl md:mx-auto leading-snug text-center lg:text-left tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400">Short Bios of Famous Personalities.</h2>
            <p className="text-sm md:text-lg md:mx-auto text-center lg:text-left leading-normal mt-4">
              Welcome to our website featuring short bios of inspirational personalities. Discover the stories of some of the most famous and influential individuals in history and be inspired by their remarkable achievements.
            </p>

            <div className="mt-8">
              <button className="text-[#1b1b1b] lg:mx-0 bg-white px-6 py-2 rounded-full font-bold hover:text-white border-2 hover:duration-300 hover:border-white hover:bg-gradient-to-t hover:from-rose-500 hover:to-pink-400 hover:scale-110 hover:ease-in-out">
                <a href="#bioSection" className='w-fit uppercase flex space-x-2 items-center'>
                  <BiNotepad className="text-xl" />
                  <span>Explore</span>
                </a>
              </button>
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
          <div className='sm:max-w-none sm:flex w-full items-center space-x-4'>
            <div class='max-w-md w-full mt-6 mb-2 sm:mb-6'>
              <div class="relative flex items-center w-full h-12 rounded-lg border border-gray-200 shadow-sm focus-within:shadow-[0px_0px_10px_0px_#00000024]
            ease-in-out transition-shadow bg-white overflow-hidden hover:shadow-[0px_0px_10px_0px_#00000024]">
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

            <div className='flex justify-end'>
              {/* Filter dropdown */}
              <div className="relative inline-block text-left" ref={popUpRef}>
                <div>
                  <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-200 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 focus:outline-none 
                  hover:shadow-[0px_0px_10px_0px_#00000024] ease-in-out transition-shadow
                  " id="options-menu" aria-haspopup="true" aria-expanded="true"
                    onClick={() => setOpenOptions(!openOptions)}
                  >
                    {filterVal || "Filter By"}
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* Dropdown */}
                <div className={`overflow-hidden origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${openOptions ? 'block' : 'hidden'}`}>
                  <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((item, index) => {
                      return <button type="button" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-white hover:duration-150 hover:bg-gradient-to-t hover:from-rose-500 hover:to-pink-400" role="menuitem" onClick={() => {
                        setFilterVal(item)
                        setOpenOptions(false)
                      }}>
                        {item}
                      </button>
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Results found */}
          <div className='flex justify-between items-center mt-1'>
            <p className='text-lg sm:text-2xl font-bold custom-font bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text uppercase'>
              {bioData?.length} {bioData?.length == 1 ? "Personality" : "Personalities"} Found...
            </p>
          </div>


          {/* Cards */}
          {showSkeleton ?
            <div className='my-4 flex flex-wrap'>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            : <div className='my-4 flex flex-wrap'>
              {bioData?.length !== 0 ? bioData.slice(0, contentIndex)?.map((item, index) => {
                return <Card key={index} data={item} />
              })
                : <div className='w-full flex justify-center items-center my-6'>
                  <img src="/No_data.gif" className='w-96' />
                </div>}
            </div>}

          {bioData.length >= contentIndex && <div className="cursor-pointer w-fit mx-auto my-3 md:my-6">
            <div
              className='text-rose-400 flex items-center space-x-1 hover:scale-110 duration-300 hover:underline hover:underline-offset-8'
              onClick={() => {
                setContentIndex(contentIndex + 12)
              }}
            >
              <span className='font-semibold'>
                View More
              </span>
              <BsChevronDoubleDown className='text-xl' />
            </div>
          </div>}

          {showScroll && <div
            className='fixed bottom-4 right-4 sm:bottom-5 sm:right-5 text-3xl sm:text-4xl cursor-pointer hover:scale-125 scroll-smooth ease-in-out duration-200 text-white bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400 hover:shadow-md rounded-full'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            <BiUpArrowAlt />
          </div>}
        </div>
      </div>

    </>
  )
}
