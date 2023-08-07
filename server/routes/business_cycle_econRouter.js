const Router = require('express')
const router = new Router()
const business_cycle_econController = require('../controllers/business_cycle_econController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), business_cycle_econController.create)
router.get('/', business_cycle_econController.getAll)

module.exports = router