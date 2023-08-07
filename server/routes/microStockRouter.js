const Router = require('express')
const router = new Router()
const microStockController = require('../controllers/microStockController')


router.get('/', microStockController.getAll)
router.get('/:ticker', microStockController.getOne)

module.exports = router