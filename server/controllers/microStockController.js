const {StockMicro} = require('../models/models')
const ApiError = require('../error/ApiError');
const { where, Model, Op } = require('sequelize');
const { model } = require('../db');

class MicroStockController {
    async getAll(req, res) {
        let {ticker} = req.query
        // page = page || 1
        // let limit = 5
        // let offset = page * limit - limit
        let stocks

        if (ticker) {
            stocks = await StockMicro.findAndCountAll(
                { attributes: ['Tickers'], where: {Tickers: {[Op.like]: ticker+'%'}}, order: [['Tickers', 'ASC']]})
        }
        return res.json(stocks)
    }

    async getOne(req, res) {
        const {ticker} = req.params
        const stock = await StockMicro.findOne({where: {Tickers: ticker}})
        return res.json(stock)
    }
}

module.exports = new MicroStockController()


