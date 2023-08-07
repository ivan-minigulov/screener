const {MacroTable} = require('../models/models')
const ApiError = require('../error/ApiError');


class MacroTableController {
    async getAll(req, res) {
        const macroTable = await MacroTable.findAll()
        return res.json(macroTable)
    }

}

module.exports = new MacroTableController()


