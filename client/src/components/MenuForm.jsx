import axios from 'axios'
import { useState } from 'react'


const MenuForm = () => {
  const [foods, setFoods] = useState([])
  const [formState, setFormState] = useState({ name: "", description: "", image: "", retail_price: "", vendor_price: ""})

  
  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let food = await axios.post('/api/newfood', formState)
      setFoods([...foods, food.data] )
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
        <input id="retail_price" value={formState.retail_price} onChange={handleChange}/>
        <label htmlFor="vendor_price">Vendor Price</label>
        <input id="vendor_price" value={formState.vendor_price} onChange={handleChange}/>
        <button type="submit" >Add Food Item</button>

      </form>

    </div>
  )
}

export default MenuForm