import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../databaseSim/suiteData.json'

const SuitePage = () => {

const { suitePage } = useParams();
console.log(data)

  return (
    <div>
      <p>This is the page for suite {suitePage}</p>
      <p>{data.suites[suitePage-1].id}</p>
      <p>Name: {data.suites[suitePage-1].cats[0].name}</p>
      <p>Age: {data.suites[suitePage-1].cats[0].age}</p>
      <p>{data.suites[suitePage-1].cats[0].sex}</p>
    </div>
  )
}
export default SuitePage
