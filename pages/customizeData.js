import React, { useEffect, useState } from 'react'
import data from '../data/bioData.json'

const customizeData = () => {

  // useEffect(() => {
  //   let tempData = []
  //   let businessData = []
  //   let politicalData = []
  //   let sportsData = []
  //   let otherData = []
  //   data.map((item) => {
  //     if (item.profession.toLowerCase().includes('business') || item.profession.toLowerCase().includes('entrepreneur') || item.profession.toLowerCase().includes('ceo') || item.profession.toLowerCase().includes('founder') || item.profession.toLowerCase().includes('owner') || item.profession.toLowerCase().includes('manager') || item.profession.toLowerCase().includes('executive')) {
  //       businessData.push(item)
  //     }
  //     else if (item.profession.toLowerCase().includes('politic') || item.profession.toLowerCase().includes('politician') || item.profession.toLowerCase().includes('minister') || item.profession.toLowerCase().includes('president') || item.profession.toLowerCase().includes('prime minister') || item.profession.toLowerCase().includes('senator')) {
  //       politicalData.push(item)
  //     }
  //     else if (item.profession.toLowerCase().includes('cricket') || item.profession.toLowerCase().includes('football') || item.profession.toLowerCase().includes('wrestler') || item.profession.toLowerCase().includes('athlete') || item.profession.toLowerCase().includes('player') || item.profession.toLowerCase().includes('coach') || item.profession.toLowerCase().includes('sportsperson') || item.profession.toLowerCase().includes('sportsman')) {
  //       sportsData.push(item)
  //     }
  //     else {
  //       otherData.push(item)
  //     }

  //     tempData = [...businessData, ...politicalData, ...sportsData, ...otherData]

  //     tempData.map((item) => {
  //       delete item.id
  //       delete item?.image_url
  //     })

  //     let uniqueId = 1

  //     tempData.map((item) => {
  //       item.id = uniqueId
  //       uniqueId++
  //     })

  //   })
  // }, [data])


  useEffect(() => {
    let tempData = data
    tempData.map((item) => {
      delete item.id
      delete item?.image_url
    })

    tempData = shuffleArray(tempData)

    let uniqueId = 1
    tempData.map((item) => {
      item.id = uniqueId
      uniqueId++
    })

    console.log("tempData", tempData)
  }, [data])

  // Shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  return (
    <div>customizeData</div>
  )
}

export default customizeData