import Card from '@/components/Card'
import Head from 'next/head'
import data from '../data/bioData.json'

export default function Home() {
  // console.log(data)
  const bioData = []
  let id = 1
  data.map((item) => {
    item['id'] = id
    id++
    bioData.push(item)
  })

  console.log(bioData)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='text-2xl text-green-500'>
        <Card />
      </div>
    </>
  )
}
