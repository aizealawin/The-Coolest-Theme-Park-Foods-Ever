const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('this is root!!!'))

router.post('/newfood', controllers.postFood)
router.get('/food', controllers.getAllFood)
router.get('/food/:id', controllers.getFoodById)
router.delete('/food/:id', controllers.findByIdAndDeleteFood)
router.put('/food/:id', controllers.findByIdAndUpdateFood)

module.exports = router
