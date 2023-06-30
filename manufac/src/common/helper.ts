import { ObjectType, ClassWiseData } from '../common/type'

export const getFlavanoidsDataByClass = (data: (ObjectType | any)[]) => {
  return data.reduce((acc: ClassWiseData, ele) => {
    if (ele?.Alcohol) {
      acc[ele.Alcohol.toString()]
        ? acc[ele.Alcohol.toString()].push(ele?.Flavanoids)
        : (acc[ele.Alcohol.toString()] = [ele?.Flavanoids])
    }
    return acc
  }, {})
}

export const getGammaDataByClass = (data: (ObjectType | any)[]) => {
  return data.reduce((acc, ele) => {
    if (ele?.Alcohol) {
      acc[ele.Alcohol.toString()]
        ? acc[ele.Alcohol.toString()].push(
            (ele?.Ash * ele?.Hue) / ele?.Magnesium
          )
        : (acc[ele.Alcohol.toString()] = [
            (ele?.Ash * ele?.Hue) / ele?.Magnesium
          ])
    }
    return acc
  }, {})
}

export const calculateMean = (data: number[]) =>
  (data.reduce((acc, ele) => acc + ele) / data?.length).toFixed(3)

export const calculateMedian = (data: number[]) => {
  const sortedData = [...data].sort((a, b) => a - b)
  const middleIndex = Math.floor(sortedData?.length / 2)
  const median =
    sortedData?.length % 2 === 0
      ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
      : sortedData[middleIndex]
  return median.toFixed(3)
}

export const calculateMode = (data: number[]) => {
  const frequencyMap = new Map()
  for (let i = 0; i < data.length; i++) {
    const value = data[i]
    const count = frequencyMap.get(value) || 0
    frequencyMap.set(value, count + 1)
  }

  // Find the maximum frequency
  let maxFrequency = 0
  frequencyMap.forEach((frequency) => {
    if (frequency > maxFrequency) {
      maxFrequency = frequency
    }
  })

  // Retrieve the mode(s)
  const mode: number[] = []
  frequencyMap.forEach((frequency, value) => {
    if (frequency === maxFrequency) {
      mode.push(value.toFixed(3))
    }
  })

  return mode[0]
}
