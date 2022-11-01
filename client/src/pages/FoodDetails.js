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
      <section className="details">
        <div>
          <h3>{foodDetails?.name}</h3>
          <p className="description">{foodDetails?.description}</p>
          <p className="prices">
            Retail Price: {foodDetails?.retail_price}
            <br />
            Vendor Price: {foodDetails?.vendor_price}
          </p>
        </div>
      </section>
    </div>
  )
}

export default FoodDetails
