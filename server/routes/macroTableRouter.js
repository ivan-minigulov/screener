const Router = require('express')
const router = new Router()
const macroTableController = require('../controllers/macroTableController')


router.get('/', macroTableController.getAll)

module.exports = router