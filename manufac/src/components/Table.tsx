import { calculateMean, calculateMedian, calculateMode } from '../common/helper'
import { DataObjType } from '../common/type'
import { useNavigate } from 'react-router-dom'

const Table = ({ dataObj, name }: DataObjType) => {
  const navigate = useNavigate()
  const handleBack = () => navigate('/')

  return (
    <div className='tableContainer'>
      <h1 style={{ textDecoration: 'underline' }}>{name} Analysis</h1>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(dataObj).map((item) => (
              <th key={item}>{`Class ${item}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {name}
              <br />
              Mean
            </th>
            {Object.keys(dataObj).map((item, index) => (
              <td key={index}>{calculateMean(dataObj[item])}</td>
            ))}
          </tr>
          <tr>
            <th>
              {name}
              <br />
              Median
            </th>
            {Object.keys(dataObj).map((item, index) => (
              <td key={index}>{calculateMedian(dataObj[item])}</td>
            ))}
          </tr>
          <tr>
            <th>
              {name} <br />
              Mode
            </th>
            {Object.keys(dataObj).map((item, index) => (
              <td key={index}>{calculateMode(dataObj[item])}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <h4
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={handleBack}>
        Back
      </h4>
    </div>
  )
}

export default Table
