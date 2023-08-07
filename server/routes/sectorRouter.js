const Router = require('express')
const router = new Router()
const sectorController = require('../controllers/sectorController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), sectorController.create)
router.get('/', sectorController.getAll)


module.exports = router