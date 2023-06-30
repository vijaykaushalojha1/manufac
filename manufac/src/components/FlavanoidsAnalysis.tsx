import data from '../common/data.json'
import { getFlavanoidsDataByClass } from '../common/helper'
import Table from './Table'

const FlavanoidsAnalysis = () => {
  const dataObj = getFlavanoidsDataByClass(data)
  return <Table dataObj={dataObj} name='Flavanoids' />
}
export default FlavanoidsAnalysis
