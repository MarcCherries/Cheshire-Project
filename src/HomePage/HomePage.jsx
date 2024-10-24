import React from 'react'
import './HomePage.css'
import { useParams } from 'react-router-dom'

const HomePage = () => {
    const {userId } = useParams()
  return (
    <div>
      <p>This is the Home Page for user number {userId}</p>
    </div>
  )
}

export default HomePage
