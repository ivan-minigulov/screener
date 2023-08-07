const Router = require('express')
const router = new Router()
const conclusionController = require('../controllers/conclusionController')


router.get('/', conclusionController.getAll)

module.exports = router