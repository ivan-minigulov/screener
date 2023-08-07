const {Industry_menu} = require('../models/models')
const ApiError = require('../error/ApiError')

class IndustryController {
    async create(req, res) {
        const {name, sectorMenuId} = req.body
        const industry_menu = await Industry_menu.create({name, sectorMenuId})
        return res.json(industry_menu)
    }

    async getAll(req, res) {
        const {sectorMenuId} = req.query
        let industry_menus;
        if (!sectorMenuId) {
            industry_menus = await Industry_menu.findAll()
        }
        if (sectorMenuId) {
            industry_menus = await Industry_menu.findAll({where:{sectorMenuId}})
        }
        return res.json(industry_menus)
    }

}

module.exports = new IndustryController()