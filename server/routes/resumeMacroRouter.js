const Router = require('express')
const router = new Router()
const resumeMacroController = require('../controllers/resumeMacroController')


router.get('/', resumeMacroController.getAll)

module.exports = router