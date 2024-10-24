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
      <p>{data.suites[suitePage-1].}</p>
      <p>{data.suites[suitePage-1].id}</p>
      <p>{data.suites[suitePage-1].id}</p>
    </div>
  )
}

export default SuitePage
