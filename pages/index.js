import Card from '@/components/Card'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import data from '../data/bioData.json'

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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="mt-3 md:mt-6 mx-8 md:mx-16">

        <div className="mt-10 md:my-8 md:w-1/2">
          <h2 className="custom-font uppercase text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Quote of the Day</h2>
          <p>
            {quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.text}
          </p>
          <p>
            - {" "}{quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.author}
          </p>
        </div>

        <h2 className="custom-font uppercase text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Short Bio of Famous Personalities</h2>
        <div className='my-4 flex flex-wrap'>
          {data.map((item, index) => {
            return <Card key={index} data={item} />
          })}
        </div>
      </div>

    </>
  )
}
