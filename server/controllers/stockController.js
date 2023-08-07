const {Stock, Business_cycle_econ_menu} = require('../models/models')
const ApiError = require('../error/ApiError');
const { where, Model, Op } = require('sequelize');
const { model } = require('../db');

class StockController {
    async getAll(req, res) {
        let {sectorMenuId, businessCycleCompMenuId, industryMenuId, countryMenuId, 
            businessCycleEconMenuId, page, limit, sort, sortName, 
            marketCapFrom, marketCapTo, peFrom, peTo, fwdPE1From, fwdPE1To, fwdPE2From, fwdPE2To, fwdPE3From, fwdPE3To,
            fwdGrowthEpsFrom, fwdGrowthEpsTo, lastGrowthEpsFrom, lastGrowthEpsTo, psFrom, psTo, fwdPS1From, fwdPS1To, 
            fwdPS2From, fwdPS2To, fwdPS3From, fwdPS3To, fwdGrowthRevFrom, fwdGrowthRevTo, lastGrowthRevFrom, lastGrowthRevTo, 
            pegRatioFrom, pegRatioTo, evEbitdaFrom, evEbitdaTo, netMarginFrom, netMarginTo, roeFrom, roeTo, roaFrom, roaTo,
            cashDebtFrom, cashDebtTo, interestCoverageFrom, interestCoverageTo, currentRatioFrom, currentRatioTo, 
            debtToEquityFrom, debtToEquityTo, dividendFrom, dividendTo, payoutRatioFrom, payoutRatioTo, priceCFFrom, priceCFTo,
            rsi14From, rsi14To, growthRFrom, growthRTo, profitRFrom, profitRTo, valueRFrom, valueRTo, debtRFrom, debtRTo, 
            dividendRFrom, dividendRTo, fcfRFrom, fcfRTo, momentumRFrom, momentumRTo, totalRFrom, totalRTo, searchTicker} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let stocks
        let menuObj = {sectorMenuId, businessCycleCompMenuId, industryMenuId, countryMenuId}

        const sorting = (!sort) ? 'DESC' : sort
        const sortingName = (!sortName) ? 'Market_cap' : sortName

        if (!(searchTicker === undefined || searchTicker === '')) {
            menuObj['Tickers'] = {[Op.like]: searchTicker+'%'}
        }

        if (!((marketCapFrom === undefined || marketCapFrom === '') 
            && (marketCapTo === undefined || marketCapTo === '')) || sortingName === 'Market_cap') {
            const marketCapFromC = (marketCapFrom === undefined || marketCapFrom === '') ? -Infinity : Number(marketCapFrom)
            const marketCapToC = (marketCapTo=== undefined || marketCapTo === '') ? Infinity : Number(marketCapTo)
            menuObj['Market_cap'] = {[Op.between]: [marketCapFromC, marketCapToC]}
        }
        if (!((peFrom === undefined || peFrom === '') 
            && (peTo === undefined || peTo === '')) || sortingName === 'PE') {
            const peFromC = (peFrom === undefined || peFrom === '') ? -Infinity : Number(peFrom)
            const peToC = (peTo=== undefined || peTo === '') ? Infinity : Number(peTo)
            menuObj['PE'] = {[Op.between]: [peFromC, peToC]}
        }
        if (!((fwdPE1From === undefined || fwdPE1From === '') 
            && (fwdPE1To === undefined || fwdPE1To === '')) || sortingName === 'Fwd_PE_1') {
            const fwdPE1FromC = (fwdPE1From === undefined || fwdPE1From === '') ? -Infinity : Number(fwdPE1From)
            const fwdPE1ToC = (fwdPE1To=== undefined || fwdPE1To === '') ? Infinity : Number(fwdPE1To)
            menuObj['Fwd_PE_1'] = {[Op.between]: [fwdPE1FromC, fwdPE1ToC]}
        }
        if (!((fwdPE2From === undefined || fwdPE2From === '') 
            && (fwdPE2To === undefined || fwdPE2To === '')) || sortingName === 'Fwd_PE_2') {
            const fwdPE2FromC = (fwdPE2From === undefined || fwdPE2From === '') ? -Infinity : Number(fwdPE2From)
            const fwdPE2ToC = (fwdPE2To=== undefined || fwdPE2To === '') ? Infinity : Number(fwdPE2To)
            menuObj['Fwd_PE_2'] = {[Op.between]: [fwdPE2FromC, fwdPE2ToC]}
        }
        if (!((fwdPE3From === undefined || fwdPE3From === '') 
            && (fwdPE3To === undefined || fwdPE3To === '')) || sortingName === 'Fwd_PE_3') {
            const fwdPE3FromC = (fwdPE3From === undefined || fwdPE3From === '') ? -Infinity : Number(fwdPE3From)
            const fwdPE3ToC = (fwdPE3To=== undefined || fwdPE3To === '') ? Infinity : Number(fwdPE3To)
            menuObj['Fwd_PE_3'] = {[Op.between]: [fwdPE3FromC, fwdPE3ToC]}
        }
        if (!((fwdGrowthEpsFrom === undefined || fwdGrowthEpsFrom === '') 
            && (fwdGrowthEpsTo === undefined || fwdGrowthEpsTo === '')) || sortingName === 'Fwd_avg_EPS_growth') {
            const fwdGrowthEpsFromC = (fwdGrowthEpsFrom === undefined || fwdGrowthEpsFrom === '') ? -Infinity : Number(fwdGrowthEpsFrom)
            const fwdGrowthEpsToC = (fwdGrowthEpsTo === undefined || fwdGrowthEpsTo === '') ? Infinity : Number(fwdGrowthEpsTo)
            menuObj['Fwd_avg_EPS_growth'] = {[Op.between]: [fwdGrowthEpsFromC, fwdGrowthEpsToC]}
        }
        if (!((lastGrowthEpsFrom === undefined || lastGrowthEpsFrom === '') 
            && (lastGrowthEpsTo === undefined || lastGrowthEpsTo === '')) || sortingName === 'Last_eps_growth3') {
            const lastGrowthEpsFromC = (lastGrowthEpsFrom === undefined || lastGrowthEpsFrom === '') ? -Infinity : Number(lastGrowthEpsFrom)
            const lastGrowthEpsToC = (lastGrowthEpsTo === undefined || lastGrowthEpsTo === '') ? Infinity : Number(lastGrowthEpsTo)
            menuObj['Last_eps_growth3'] = {[Op.between]: [lastGrowthEpsFromC, lastGrowthEpsToC]}
        }

        if (!((psFrom === undefined || psFrom === '') 
            && (psTo === undefined || psTo === '')) || sortingName === 'PS') {
            const psFromC = (psFrom === undefined || psFrom === '') ? -Infinity : Number(psFrom)
            const psToC = (psTo=== undefined || psTo === '') ? Infinity : Number(psTo)
            menuObj['PS'] = {[Op.between]: [psFromC, psToC]}
        }
        if (!((fwdPS1From === undefined || fwdPS1From === '') 
            && (fwdPS1To === undefined || fwdPS1To === '')) || sortingName === 'Fwd_PS_1') {
            const fwdPS1FromC = (fwdPS1From === undefined || fwdPS1From === '') ? -Infinity : Number(fwdPS1From)
            const fwdPS1ToC = (fwdPS1To=== undefined || fwdPS1To === '') ? Infinity : Number(fwdPS1To)
            menuObj['Fwd_PS_1'] = {[Op.between]: [fwdPS1FromC, fwdPS1ToC]}
        }
        if (!((fwdPS2From === undefined || fwdPS2From === '') 
            && (fwdPS2To === undefined || fwdPS2To === '')) || sortingName === 'Fwd_PS_2') {
            const fwdPS2FromC = (fwdPS2From === undefined || fwdPS2From === '') ? -Infinity : Number(fwdPS2From)
            const fwdPS2ToC = (fwdPS2To=== undefined || fwdPS2To === '') ? Infinity : Number(fwdPS2To)
            menuObj['Fwd_PS_2'] = {[Op.between]: [fwdPS2FromC, fwdPS2ToC]}
        }
        if (!((fwdPS3From === undefined || fwdPS3From === '') 
            && (fwdPS3To === undefined || fwdPS3To === '')) || sortingName === 'Fwd_PS_3') {
            const fwdPS3FromC = (fwdPS3From === undefined || fwdPS3From === '') ? -Infinity : Number(fwdPS3From)
            const fwdPS3ToC = (fwdPS3To=== undefined || fwdPS3To === '') ? Infinity : Number(fwdPS3To)
            menuObj['Fwd_PS_3'] = {[Op.between]: [fwdPS3FromC, fwdPS3ToC]}
        }
        if (!((fwdGrowthRevFrom === undefined || fwdGrowthRevFrom === '') 
            && (fwdGrowthRevTo === undefined || fwdGrowthRevTo === '')) || sortingName === 'Fwd_avg_sales_growth') {
            const fwdGrowthRevFromC = (fwdGrowthRevFrom === undefined || fwdGrowthRevFrom === '') ? -Infinity : Number(fwdGrowthRevFrom)
            const fwdGrowthRevToC = (fwdGrowthRevTo === undefined || fwdGrowthRevTo === '') ? Infinity : Number(fwdGrowthRevTo)
            menuObj['Fwd_avg_sales_growth'] = {[Op.between]: [fwdGrowthRevFromC, fwdGrowthRevToC]}
        }
        if (!((lastGrowthRevFrom === undefined || lastGrowthRevFrom === '') 
            && (lastGrowthRevTo === undefined || lastGrowthRevTo === '')) || sortingName === 'Last_rev_growth3') {
            const lastGrowthRevFromC = (lastGrowthRevFrom === undefined || lastGrowthRevFrom === '') ? -Infinity : Number(lastGrowthRevFrom)
            const lastGrowthRevToC = (lastGrowthRevTo === undefined || lastGrowthRevTo === '') ? Infinity : Number(lastGrowthRevTo)
            menuObj['Last_rev_growth3'] = {[Op.between]: [lastGrowthRevFromC, lastGrowthRevToC]}
        }
        if (!((pegRatioFrom === undefined || pegRatioFrom === '') 
            && (pegRatioTo === undefined || pegRatioTo === '')) || sortingName === 'Peg_ratio') {
            const pegRatioFromC = (pegRatioFrom === undefined || pegRatioFrom === '') ? -Infinity : Number(pegRatioFrom)
            const pegRatioToC = (pegRatioTo === undefined || pegRatioTo === '') ? Infinity : Number(pegRatioTo)
            menuObj['Peg_ratio'] = {[Op.between]: [pegRatioFromC, pegRatioToC]}
        }
        if (!((evEbitdaFrom === undefined || evEbitdaFrom === '') 
            && (evEbitdaTo === undefined || evEbitdaTo === '')) || sortingName === 'EvEbitda') {
            const evEbitdaFromC = (evEbitdaFrom === undefined || evEbitdaFrom === '') ? -Infinity : Number(evEbitdaFrom)
            const evEbitdaToC = (evEbitdaTo === undefined || evEbitdaTo === '') ? Infinity : Number(evEbitdaTo)
            menuObj['EvEbitda'] = {[Op.between]: [evEbitdaFromC, evEbitdaToC]}
        }
        if (!((netMarginFrom === undefined || netMarginFrom === '') 
            && (netMarginTo === undefined || netMarginTo === '')) || sortingName === 'Net_margin') {
            const netMarginFromC = (netMarginFrom === undefined || netMarginFrom === '') ? -Infinity : Number(netMarginFrom)
            const netMarginToC = (netMarginTo === undefined || netMarginTo === '') ? Infinity : Number(netMarginTo)
            menuObj['Net_margin'] = {[Op.between]: [netMarginFromC, netMarginToC]}
        }
        if (!((roeFrom === undefined || roeFrom === '') 
            && (roeTo === undefined || roeTo === '')) || sortingName === 'ROE') {
            const roeFromC = (roeFrom === undefined || roeFrom === '') ? -Infinity : Number(roeFrom)
            const roeToC = (roeTo === undefined || roeTo === '') ? Infinity : Number(roeTo)
            menuObj['ROE'] = {[Op.between]: [roeFromC, roeToC]}
        }
        if (!((roaFrom === undefined || roaFrom === '') 
            && (roaTo === undefined || roaTo === '')) || sortingName === 'ROA') {
            const roaFromC = (roaFrom === undefined || roaFrom === '') ? -Infinity : Number(roaFrom)
            const roaToC = (roaTo === undefined || roaTo === '') ? Infinity : Number(roaTo)
            menuObj['ROA'] = {[Op.between]: [roaFromC, roaToC]}
        }
        if (!((cashDebtFrom === undefined || cashDebtFrom === '') 
            && (cashDebtTo === undefined || cashDebtTo === '')) || sortingName === 'Cash_Debt') {
            const cashDebtFromC = (cashDebtFrom === undefined || cashDebtFrom === '') ? -Infinity : Number(cashDebtFrom)
            const cashDebtToC = (cashDebtTo === undefined || cashDebtTo === '') ? Infinity : Number(cashDebtTo)
            menuObj['Cash_Debt'] = {[Op.between]: [cashDebtFromC, cashDebtToC]}
        }
        if (!((interestCoverageFrom === undefined || interestCoverageFrom === '') 
            && (interestCoverageTo === undefined || interestCoverageTo === '')) || sortingName === 'Interest_coverage') {
            const interestCoverageFromC = (interestCoverageFrom === undefined || interestCoverageFrom === '') ? -Infinity : Number(interestCoverageFrom)
            const interestCoverageToC = (interestCoverageTo === undefined || interestCoverageTo === '') ? Infinity : Number(interestCoverageTo)
            menuObj['Interest_coverage'] = {[Op.between]: [interestCoverageFromC, interestCoverageToC]}
        }
        if (!((currentRatioFrom === undefined || currentRatioFrom === '') 
            && (currentRatioTo === undefined || currentRatioTo === '')) || sortingName === 'Current_ratio') {
            const currentRatioFromC = (currentRatioFrom === undefined || currentRatioFrom === '') ? -Infinity : Number(currentRatioFrom)
            const currentRatioToC = (currentRatioTo === undefined || currentRatioTo === '') ? Infinity : Number(currentRatioTo)
            menuObj['Current_ratio'] = {[Op.between]: [currentRatioFromC, currentRatioToC]}
        }
        if (!((debtToEquityFrom === undefined || debtToEquityFrom === '') 
            && (debtToEquityTo === undefined || debtToEquityTo === '')) || sortingName === 'DebtToEquity') {
            const debtToEquityFromC = (debtToEquityFrom === undefined || debtToEquityFrom === '') ? -Infinity : Number(debtToEquityFrom)
            const debtToEquityToC = (debtToEquityTo === undefined || debtToEquityTo === '') ? Infinity : Number(debtToEquityTo)
            menuObj['DebtToEquity'] = {[Op.between]: [debtToEquityFromC, debtToEquityToC]}
        }
        if (!((dividendFrom === undefined || dividendFrom === '') 
            && (dividendTo === undefined || dividendTo === '')) || sortingName === 'Div_yield') {
            const dividendFromC = (dividendFrom === undefined || dividendFrom === '') ? -Infinity : Number(dividendFrom)
            const dividendToC = (dividendTo === undefined || dividendTo === '') ? Infinity : Number(dividendTo)
            menuObj['Div_yield'] = {[Op.between]: [dividendFromC, dividendToC]}
        }
        if (!((payoutRatioFrom === undefined || payoutRatioFrom === '') 
            && (payoutRatioTo === undefined || payoutRatioTo === '')) || sortingName === 'Payout_ratio') {
            const payoutRatioFromC = (payoutRatioFrom === undefined || payoutRatioFrom === '') ? -Infinity : Number(payoutRatioFrom)
            const payoutRatioToC = (payoutRatioTo === undefined || payoutRatioTo === '') ? Infinity : Number(payoutRatioTo)
            menuObj['Payout_ratio'] = {[Op.between]: [payoutRatioFromC, payoutRatioToC]}
        }
        if (!((priceCFFrom === undefined || priceCFFrom === '') 
            && (priceCFTo === undefined || priceCFTo === '')) || sortingName === 'priceCF') {
            const priceCFFromC = (priceCFFrom === undefined || priceCFFrom === '') ? -Infinity : Number(priceCFFrom)
            const priceCFToC = (priceCFTo === undefined || priceCFTo === '') ? Infinity : Number(priceCFTo)
            menuObj['priceCF'] = {[Op.between]: [priceCFFromC, priceCFToC]}
        }
        if (!((rsi14From === undefined || rsi14From === '') 
            && (rsi14To === undefined || rsi14To === '')) || sortingName === 'RSI14') {
            const rsi14FromC = (rsi14From === undefined || rsi14From === '') ? -Infinity : Number(rsi14From)
            const rsi14ToC = (rsi14To === undefined || rsi14To === '') ? Infinity : Number(rsi14To)
            menuObj['RSI14'] = {[Op.between]: [rsi14FromC, rsi14ToC]}
        }
        if (!((growthRFrom === undefined || growthRFrom === '') 
            && (growthRTo === undefined || growthRTo === '')) || sortingName === 'Growth_Rating') {
            const growthRFromC = (growthRFrom === undefined || growthRFrom === '') ? -Infinity : Number(growthRFrom)
            const growthRToC = (growthRTo === undefined || growthRTo === '') ? Infinity : Number(growthRTo)
            menuObj['Growth_Rating'] = {[Op.between]: [growthRFromC, growthRToC]}
        }
        if (!((profitRFrom === undefined || profitRFrom === '') 
            && (profitRTo === undefined || profitRTo === '')) || sortingName === 'Profit_Rating') {
            const profitRFromC = (profitRFrom === undefined || profitRFrom === '') ? -Infinity : Number(profitRFrom)
            const profitRToC = (profitRTo === undefined || profitRTo === '') ? Infinity : Number(profitRTo)
            menuObj['Profit_Rating'] = {[Op.between]: [profitRFromC, profitRToC]}
        }
        if (!((valueRFrom === undefined || valueRFrom === '') 
            && (valueRTo === undefined || valueRTo === '')) || sortingName === 'Value_Rating') {
            const valueRFromC = (valueRFrom === undefined || valueRFrom === '') ? -Infinity : Number(valueRFrom)
            const valueRToC = (valueRTo === undefined || valueRTo === '') ? Infinity : Number(valueRTo)
            menuObj['Value_Rating'] = {[Op.between]: [valueRFromC, valueRToC]}
        }
        if (!((debtRFrom === undefined || debtRFrom === '') 
            && (debtRTo === undefined || debtRTo === '')) || sortingName === 'Debt_Rating') {
            const debtRFromC = (debtRFrom === undefined || debtRFrom === '') ? -Infinity : Number(debtRFrom)
            const debtRToC = (debtRTo === undefined || debtRTo === '') ? Infinity : Number(debtRTo)
            menuObj['Debt_Rating'] = {[Op.between]: [debtRFromC, debtRToC]}
        }
        if (!((dividendRFrom === undefined || dividendRFrom === '') 
            && (dividendRTo === undefined || dividendRTo === '')) || sortingName === 'Divident_Rating') {
            const dividendRFromC = (dividendRFrom === undefined || dividendRFrom === '') ? -Infinity : Number(dividendRFrom)
            const dividendRToC = (dividendRTo === undefined || dividendRTo === '') ? Infinity : Number(dividendRTo)
            menuObj['Divident_Rating'] = {[Op.between]: [dividendRFromC, dividendRToC]}
        }
        if (!((fcfRFrom === undefined || fcfRFrom === '') 
            && (fcfRTo === undefined || fcfRTo === '')) || sortingName === 'FCF_Rating') {
            const fcfRFromC = (fcfRFrom === undefined || fcfRFrom === '') ? -Infinity : Number(fcfRFrom)
            const fcfRToC = (fcfRTo === undefined || fcfRTo === '') ? Infinity : Number(fcfRTo)
            menuObj['FCF_Rating'] = {[Op.between]: [fcfRFromC, fcfRToC]}
        }
        if (!((momentumRFrom === undefined || momentumRFrom === '') 
            && (momentumRTo === undefined || momentumRTo === '')) || sortingName === 'Momentum_Rating') {
            const momentumRFromC = (momentumRFrom === undefined || momentumRFrom === '') ? -Infinity : Number(momentumRFrom)
            const momentumRToC = (momentumRTo === undefined || momentumRTo === '') ? Infinity : Number(momentumRTo)
            menuObj['Momentum_Rating'] = {[Op.between]: [momentumRFromC, momentumRToC]}
        }
        if (!((totalRFrom === undefined || totalRFrom === '') 
            && (totalRTo === undefined || totalRTo === '')) || sortingName === 'Total_Rating') {
            const totalRFromC = (totalRFrom === undefined || totalRFrom === '') ? -Infinity : Number(totalRFrom)
            const totalRToC = (totalRTo === undefined || totalRTo === '') ? Infinity : Number(totalRTo)
            menuObj['Total_Rating'] = {[Op.between]: [totalRFromC, totalRToC]}
        }
        


        let include = {businessCycleEconMenuId}
        for (const el in menuObj) {
            if (menuObj[el] === undefined) {
                delete menuObj[el]
            }
        }
        for (const el in include) {
            if (include[el] === undefined) {
                delete include[el]
            }
        }

        if ((Object.keys(menuObj).length === 0) && (Object.keys(include).length === 0)) {
            stocks = await Stock.findAndCountAll({ order: [[sortingName, sorting]], limit, offset})
        
        } else if ((Object.keys(menuObj).length != 0) && (Object.keys(include).length === 0)){
            stocks = await Stock.findAndCountAll({where: menuObj, 
                order: [[sortingName, sorting]], limit, offset})
            
        }
        else if ((Object.keys(menuObj).length === 0) && (Object.keys(include).length != 0)){
            stocks = await Stock.findAndCountAll({include: [{ model: Business_cycle_econ_menu, where: {id: businessCycleEconMenuId} }],
                                                    distinct: true, 
                                                    order: [[sortingName, sorting]], limit, offset})
            
        }
        else {
            stocks = await Stock.findAndCountAll({where: menuObj, 
                include: [{ model: Business_cycle_econ_menu, where: {id: businessCycleEconMenuId} }], 
                distinct: true,
                order: [[sortingName, sorting]], limit, offset})
            
        }
        
        return res.json(stocks)
    }


    async getOne(req, res) {
        const {ticker} = req.params
        const stock = await Stock.findOne({where: {Tickers: ticker}})
        return res.json(stock)
    }

}

module.exports = new StockController()


