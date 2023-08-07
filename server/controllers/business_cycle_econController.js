const {Business_cycle_econ_menu} = require('../models/models')
const ApiError = require('../error/ApiError')

class Business_cycle_econController {
    async create(req, res) {
        const {name} = req.body
        const business_cycle_econ_menu = await Business_cycle_econ_menu.create({name})
        return res.json(business_cycle_econ_menu)
    }

    async getAll(req, res) {
        const business_cycle_econ_menus = await Business_cycle_econ_menu.findAll()
        return res.json(business_cycle_econ_menus)
    }


}

module.exports = new Business_cycle_econController()