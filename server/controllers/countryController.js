const {Country_menu} = require('../models/models')
const ApiError = require('../error/ApiError')

class CountryController {
    async create(req, res) {
        const {name} = req.body
        const country_menu = await Country_menu.create({name})
        return res.json(country_menu)
    }

    async getAll(req, res) {
        const country_menus = await Country_menu.findAll()
        return res.json(country_menus)
    }


}

module.exports = new CountryController()