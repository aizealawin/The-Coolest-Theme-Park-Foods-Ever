import React from 'react'

const FoodCard = ({name, image}) => {
  return (
    <div className='foodcard'>
      <div className='food-image'>
        <img className='rendered-image' src={image}/>
      </div>
      <div className='name-desc'>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default FoodCard