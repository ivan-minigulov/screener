const Router = require('express')
const router = new Router()
const business_cycle_econ_stockController = require('../controllers/business_cycle_econ_stockController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), business_cycle_econ_stockController.create)
router.get('/', business_cycle_econ_stockController.getAll)

module.exports = router