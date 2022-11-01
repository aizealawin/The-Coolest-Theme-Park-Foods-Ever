import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const FoodDetails = () => {
  let { foodId } = useParams()

  const [foodDetails, setFoodDetails] = useState(null)
  useEffect(() => {
    const getFoodDetails = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/food/${foodId}`
      )
      setFoodDetails(response?.data.food)
    }
    getFoodDetails()
  }, [])

  return (
    <div>
      <section className="image-container">
        <img src={foodDetails?.image} />
      </section>
    </div>
  )
}

export default FoodDetails
