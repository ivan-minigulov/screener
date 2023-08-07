const Router = require('express')
const router = new Router()

const countryRouter = require('./countryRouter')
const industryRouter = require('./industryRouter')
const sectorRouter = require('././sectorRouter')
const stockRouter = require('./stockRouter')
const userRouter = require('./userRouter')
const business_cycle_compRouter = require('./business_cycle_compRouter')
const business_cycle_econRouter = require('./business_cycle_econRouter')
const business_cycle_econ_sectorRouter = require('./business_cycle_econ_sectorRouter')
const business_cycle_econ_stockRouter = require('./business_cycle_econ_stockRouter')
const microStockRouter = require('./microStockRouter')
const resumeMacroRouter = require('./resumeMacroRouter')
const conclusionRouter = require('./conclusionRouter')
const macroTableRouter = require('./macroTableRouter')





router.use('/user', userRouter)
router.use('/country', countryRouter)
router.use('/industry', industryRouter)
router.use('/sector', sectorRouter)
router.use('/stock', stockRouter)
router.use('/businesscyclecomp', business_cycle_compRouter)
router.use('/businesscycleecon', business_cycle_econRouter)
router.use('/businesscycleeconsector', business_cycle_econ_sectorRouter)
router.use('/businesscycleeconstock', business_cycle_econ_stockRouter)
router.use('/micro', microStockRouter)
router.use('/resume', resumeMacroRouter)
router.use('/conclusion', conclusionRouter)
router.use('/macrotable', macroTableRouter)




module.exports = router