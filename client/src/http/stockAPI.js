import {$host} from "./index";
// import jwt_decode from "jwt-decode";

export const fetchCountry = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}country`)
    return data
}
export const fetchBusCycleComp = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}businesscyclecomp`)
    return data
}
export const fetchBusCycleEcon = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}businesscycleecon`)
    return data
}
export const fetchSector = async (businessCycleEconMenuId) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}sector`, {params: {businessCycleEconMenuId}})
    return data
}
export const fetchIndustry = async (sectorMenuId) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}industry`, {params: {sectorMenuId}})
    return data
}

export const fetchStocks = async (sectorMenuId, businessCycleCompMenuId, industryMenuId, countryMenuId, 
    businessCycleEconMenuId, page, limit, sort, sortName, 
    marketCapFrom, marketCapTo, peFrom, peTo, fwdPE1From, fwdPE1To, fwdPE2From, fwdPE2To, fwdPE3From, fwdPE3To,
    fwdGrowthEpsFrom, fwdGrowthEpsTo, lastGrowthEpsFrom, lastGrowthEpsTo, psFrom, psTo, fwdPS1From, fwdPS1To, 
    fwdPS2From, fwdPS2To, fwdPS3From, fwdPS3To, fwdGrowthRevFrom, fwdGrowthRevTo, lastGrowthRevFrom, lastGrowthRevTo, 
    pegRatioFrom, pegRatioTo, evEbitdaFrom, evEbitdaTo, netMarginFrom, netMarginTo, roeFrom, roeTo, roaFrom, roaTo,
    cashDebtFrom, cashDebtTo, interestCoverageFrom, interestCoverageTo, currentRatioFrom, currentRatioTo, 
    debtToEquityFrom, debtToEquityTo, dividendFrom, dividendTo, payoutRatioFrom, payoutRatioTo, priceCFFrom, priceCFTo,
    rsi14From, rsi14To, growthRFrom, growthRTo, profitRFrom, profitRTo, valueRFrom, valueRTo, debtRFrom, debtRTo, 
    dividendRFrom, dividendRTo, fcfRFrom, fcfRTo, momentumRFrom, momentumRTo, totalRFrom, totalRTo, searchTicker) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}stock`, 
        {params: {sectorMenuId, businessCycleCompMenuId, industryMenuId, countryMenuId, businessCycleEconMenuId, 
        page, limit, sort, sortName,
        marketCapFrom, marketCapTo, peFrom, peTo, fwdPE1From, fwdPE1To, fwdPE2From, fwdPE2To, fwdPE3From, fwdPE3To,
        fwdGrowthEpsFrom, fwdGrowthEpsTo, lastGrowthEpsFrom, lastGrowthEpsTo, psFrom, psTo, fwdPS1From, fwdPS1To, 
        fwdPS2From, fwdPS2To, fwdPS3From, fwdPS3To, fwdGrowthRevFrom, fwdGrowthRevTo, lastGrowthRevFrom, lastGrowthRevTo, 
        pegRatioFrom, pegRatioTo, evEbitdaFrom, evEbitdaTo, netMarginFrom, netMarginTo, roeFrom, roeTo, roaFrom, roaTo,
        cashDebtFrom, cashDebtTo, interestCoverageFrom, interestCoverageTo, currentRatioFrom, currentRatioTo, 
        debtToEquityFrom, debtToEquityTo, dividendFrom, dividendTo, payoutRatioFrom, payoutRatioTo, priceCFFrom, priceCFTo,
        rsi14From, rsi14To, growthRFrom, growthRTo, profitRFrom, profitRTo, valueRFrom, valueRTo, debtRFrom, debtRTo, 
        dividendRFrom, dividendRTo, fcfRFrom, fcfRTo, momentumRFrom, momentumRTo, totalRFrom, totalRTo, searchTicker}})
    return data
}

export const fetchOneStock = async (ticker) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}stock/` + ticker, {params: {ticker}})
    return data
}

export const fetchMicroStock = async (ticker) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}micro`, {params: {ticker}})
    return data
}

export const fetchOneMicroStock = async (ticker) => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}micro/` + ticker, {params: {ticker}})
    return data
}

export const fetchResume = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}resume`)
    return data
}

export const fetchConclusion = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}conclusion`)
    return data
}

export const fetchMacrotable = async () => {
    const {data} = await $host.get(`${process.env.REACT_APP_HTTP_URL_API}macrotable`)
    return data
}