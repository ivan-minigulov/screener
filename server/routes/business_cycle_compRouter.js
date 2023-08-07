const Router = require('express')
const router = new Router()
const business_cycle_compController = require('../controllers/business_cycle_compController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), business_cycle_compController.create)
router.get('/', business_cycle_compController.getAll)

module.exports = router