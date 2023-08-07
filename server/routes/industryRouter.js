const Router = require('express')
const router = new Router()
const industryController = require('../controllers/industryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), industryController.create)
router.get('/', industryController.getAll)


module.exports = router