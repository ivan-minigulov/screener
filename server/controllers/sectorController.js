const {Sector_menu, Business_cycle_econ_menu} = require('../models/models')
const ApiError = require('../error/ApiError')

class SectorController {
    async create(req, res) {
        const {name} = req.body
        const sector_menu = await Sector_menu.create({name})
        return res.json(sector_menu)
    }

    async getAll(req, res) {
        const {businessCycleEconMenuId} = req.query
        let sector_menus 
        if (!businessCycleEconMenuId) {
            sector_menus = await Sector_menu.findAll()
        }
        if (businessCycleEconMenuId) {
            sector_menus = await Sector_menu.findAll({
                include: [{ model: Business_cycle_econ_menu, where: {id: businessCycleEconMenuId} }]})
        }
        return res.json(sector_menus)
    }

}

module.exports = new SectorController()