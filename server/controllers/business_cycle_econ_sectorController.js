const {Business_cycle_econ_Sector} = require('../models/models')
const ApiError = require('../error/ApiError')

class Business_cycle_econ_sectorController {
    async create(req, res) {
        const {businessCycleEconMenuId, sectorMenuId} = req.body
        const business_cycle_econ_Sector = await Business_cycle_econ_Sector.create({businessCycleEconMenuId, sectorMenuId})
        return res.json(business_cycle_econ_Sector)
    }

    async getAll(req, res) {
        const {businessCycleEconMenuId, sectorMenuId} = req.query
        let business_cycle_econ_Sectors;
        if (!businessCycleEconMenuId && !sectorMenuId) {
            business_cycle_econ_Sectors = await Business_cycle_econ_Sector.findAll()
            
        }
        else if (businessCycleEconMenuId && !sectorMenuId) {
            business_cycle_econ_Sectors = await Business_cycle_econ_Sector.findAll({where:{businessCycleEconMenuId}})
            
        }
        else if (!businessCycleEconMenuId && sectorMenuId) {
            business_cycle_econ_Sectors = await Business_cycle_econ_Sector.findAll({where:{sectorMenuId}})
            
        }
        else if (businessCycleEconMenuId && sectorMenuId) {
            business_cycle_econ_Sectors = await Business_cycle_econ_Sector.findAll({where:{businessCycleEconMenuId, sectorMenuId}})
        }
        return res.json(business_cycle_econ_Sectors)
    }


}

module.exports = new Business_cycle_econ_sectorController()