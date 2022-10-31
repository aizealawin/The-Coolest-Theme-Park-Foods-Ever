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

const getAllFood = async (req, res) => {
  try {
    const food = await Food.find()
    return res.status(200).json({
      food
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

const getFoodById = async (req, res) => {
  try {
    const { id } = req.params
    const food = await Food.findById(id)
    if (food) {
      return res.status(200).json({
        food
      })
      return res.status(404).send('Food with the specific ID does not exist')
    }
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findByIdAndDeleteFood = async (req, res) => {
  try {
    const { id } = req.params
    const food = await Food.findByIdAndDelete(id)
    if (food) {
      return res.status(200).send('Food deleted!!!')
    }
    return res.status(404).send('Food with the specific ID does not exist')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findByIdAndUpdateFood = async (req, res) => {
  try {
    const { id } = req.params
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(food)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  postFood,
  getAllFood,
  getFoodById,
  findByIdAndDeleteFood,
  findByIdAndUpdateFood
}
