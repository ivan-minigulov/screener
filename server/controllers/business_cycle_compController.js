const {Business_cycle_comp_menu} = require('../models/models')
const ApiError = require('../error/ApiError')

class Business_cycle_compController {
    async create(req, res) {
        const {name} = req.body
        const business_cycle_comp_menu = await Business_cycle_comp_menu.create({name})
        return res.json(business_cycle_comp_menu)
    }

    async getAll(req, res) {
        const business_cycle_comp_menus = await Business_cycle_comp_menu.findAll()
        return res.json(business_cycle_comp_menus)
    }
}

module.exports = new Business_cycle_compController()