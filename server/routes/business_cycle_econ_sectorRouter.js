const Router = require('express')
const router = new Router()
const business_cycle_econ_sectorController = require('../controllers/business_cycle_econ_sectorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), business_cycle_econ_sectorController.create)
router.get('/', business_cycle_econ_sectorController.getAll)

module.exports = router