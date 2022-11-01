import axios from 'axios'
import { useEffect, useState } from 'react'

const MenuForm = () => {
  const [foods, updateFoods] = useState([])
  const [formState, setFormState] = useState({ name: "", description: "", image: "", retail_price: "", vendor_price: ""})

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let food = await axios.post('http://localhost:3001/api/newfood', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      updateFoods(...foods, )
      setFormState({name: "", description: "", image: "", retail_price: "", vendor_price: ""})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" value={formState.name} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input id="description" value={formState.description} onChange={handleChange}/>
        <label htmlFor="image">Image</label>
        <input id="image" value={formState.image} onChange={handleChange}/>
        <label htmlFor="retail_price">Retail Price</label>
        <input id="retail_price" value={formState.retail_price}/>
        <label htmlFor="vendor_price">Vendor Price</label>
        <input id="vendor_price" value={formState.vendor_price}/>
        <button type="submit">Add Food Item</button>

      </form>

    </div>
  )
}

export default MenuForm