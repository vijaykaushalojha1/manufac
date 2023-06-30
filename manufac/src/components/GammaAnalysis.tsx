import data from '../common/data.json'
import { getGammaDataByClass } from '../common/helper'
import Table from './Table'

const GammaAnalysis = () => {
  const dataObj = getGammaDataByClass(data)
  return <Table dataObj={dataObj} name='Gamma' />
}

export default GammaAnalysis
