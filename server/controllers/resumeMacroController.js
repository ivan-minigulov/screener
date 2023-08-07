const {ResumeMacro} = require('../models/models')
const ApiError = require('../error/ApiError');


class ResumeMacroController {
    async getAll(req, res) {
        const resume = await ResumeMacro.findAll()
        return res.json(resume)
    }

}

module.exports = new ResumeMacroController()


