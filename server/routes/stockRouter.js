const Router = require('express')
const router = new Router()
const stockController = require('../controllers/stockController')


router.get('/', stockController.getAll)
router.get('/:ticker', stockController.getOne)

module.exports = router