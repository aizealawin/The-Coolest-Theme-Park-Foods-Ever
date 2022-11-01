import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const FoodDetails = () => {
  let { foodId } = useParams()

  const [foodDetails, setFoodDetails] = useState(null)
  useEffect(() => {
    const getFoodDetails = async () => {
      const response = await axios.get(`/api/food/${foodId}`)
      setFoodDetails(response?.data.food)
    }
    getFoodDetails()
  }, [])

  const deleteFood = async (foodId) => {
    try {
      await axios.delete(`/api/food/${foodId}`, foodId)
    } catch (error) {
      console.log(error)
    }
  }

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
          <div className="buttons">
            <Link to="/">
              <button
                onClick={() => {
                  deleteFood(foodId)
                }}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FoodDetails
