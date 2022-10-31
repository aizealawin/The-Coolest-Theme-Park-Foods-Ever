const Food = require('../models/food')

const postFood = async (req, res) => {
  try {
    const food = await new Food(req.body)
    await food.save()
    return res.status(201).json({
      food
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  postFood
}
