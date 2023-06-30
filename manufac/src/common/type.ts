export interface ObjectType {
  Alcohol: number
  'Malic Acid'?: number
  Ash: number
  'Alcalinity of ash'?: number
  Magnesium: number
  'Total phenols'?: number
  Flavanoids: number
  'Nonflavanoid phenols'?: string
  Proanthocyanins?: string
  'Color intensity'?: number
  Hue: number
  'OD280/OD315 of diluted wines'?: string
  Unknown?: number
}

export interface DataObjType {
  name?: string
  dataObj: ClassWiseData
}

export interface ClassWiseData {
  [key: string]: number[]
}
