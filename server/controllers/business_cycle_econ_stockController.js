const {Business_cycle_econ_Stock} = require('../models/models')
const ApiError = require('../error/ApiError')

class Business_cycle_econ_stockController {
    async create(req, res) {
        const {businessCycleEconMenuId, stockMenuId} = req.body
        const business_cycle_econ_Stock = await Business_cycle_econ_Stock.create({businessCycleEconMenuId, stockMenuId})
        return res.json(business_cycle_econ_Stock)
    }

    async getAll(req, res) {
        const {businessCycleEconMenuId, stockMenuId} = req.query
        let business_cycle_econ_Stocks;
        if (!businessCycleEconMenuId && !stockMenuId) {
            business_cycle_econ_Stocks = await Business_cycle_econ_Sector.findAll()
            
        }
        else if (businessCycleEconMenuId && !stockMenuId) {
            business_cycle_econ_Stocks = await Business_cycle_econ_Sector.findAll({where:{businessCycleEconMenuId}})
            
        }
        else if (!businessCycleEconMenuId && stockMenuId) {
            business_cycle_econ_Stocks = await Business_cycle_econ_Sector.findAll({where:{stockMenuId}})
            
        }
        else if (businessCycleEconMenuId && stockMenuId) {
            business_cycle_econ_Stocks = await Business_cycle_econ_Sector.findAll({where:{businessCycleEconMenuId, stockMenuId}})
        }
        return res.json(business_cycle_econ_Stocks)
    }


}

module.exports = new Business_cycle_econ_stockController()