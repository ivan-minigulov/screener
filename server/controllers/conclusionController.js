const {Conclusion} = require('../models/models')
const ApiError = require('../error/ApiError');


class ConclusionController {
    async getAll(req, res) {
        const conclusion = await Conclusion.findOne({attributes: ['conclusions']})
        return res.json(conclusion)
    }

}

module.exports = new ConclusionController()


