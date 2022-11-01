import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import axios from 'axios'
import Nav from '../components/Nav'

const Home = () => {
  // const BASE_URL = '/api'
  const [foodList, setFoodList] = useState([])

  useEffect(() => {
    const getFoodList = async () => {
      const response = await axios.get(`http://localhost:3001/api/food`)
      setFoodList(response?.data.food)
    }
    getFoodList()
  }, [])

  return (
    <div>
      <div className="foodcards">
        {foodList.map((result) => (
          <Link to={`/food/${result._id}`} key={result._id}>
            <FoodCard name={result.name} image={result.image} />
          </Link>
        ))}
      </div>
      <Link to="/newfood">create food card</Link>
    </div>
  )
}

export default Home
