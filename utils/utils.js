// Suffle array
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

// Finding 3 random index
export const randomIndexId = (otherData) => {
  let randomIndex1 = Math.floor(Math.random() * (otherData.length + 1))
  let randomIndex2 = Math.floor(Math.random() * (otherData.length + 1))
  let randomIndex3 = Math.floor(Math.random() * (otherData.length + 1))
  if (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomIndexId(otherData)
  }
  return [randomIndex1, randomIndex2, randomIndex3]
}