import {makeAutoObservable} from "mobx";

export default class StockStore {
    constructor() {
        this._businessCycleComps = []
        this._businessCycleEcons = []
        this._stocks = []
        this._countrys = []
        this._industrys = []
        this._sectors = []

        // this._marketCapFrom = undefined
        // this._marketCapTo = undefined

        this._selectedBusinessCycleComps = []
        this._selectedBusinessCycleEcons = []
        this._selectedStocks = []
        this._selectedCountrys = []
        this._selectedIndustrys = []
        this._selectedSectors = []
        this._selectedSort = 'DESC'
        this._selectedSortName = 'Market_cap'

        this._selectedMarketCapFrom = undefined
        this._selectedMarketCapTo = undefined
        this._selectedPEFrom = undefined
        this._selectedPETo = undefined
        this._selectedFwdPE1From = undefined
        this._selectedFwdPE1To = undefined
        this._selectedFwdPE2From = undefined
        this._selectedFwdPE2To = undefined
        this._selectedFwdPE3From = undefined
        this._selectedFwdPE3To = undefined
        this._selectedFwdGrowthEpsFrom = undefined
        this._selectedFwdGrowthEpsTo = undefined
        this._selectedLastGrowthEpsFrom = undefined
        this._selectedLastGrowthEpsTo = undefined
        this._selectedPSFrom = undefined
        this._selectedPSTo = undefined
        this._selectedFwdPS1From = undefined
        this._selectedFwdPS1To = undefined
        this._selectedFwdPS2From = undefined
        this._selectedFwdPS2To = undefined
        this._selectedFwdPS3From = undefined
        this._selectedFwdPS3To = undefined
        this._selectedFwdGrowthRevFrom = undefined
        this._selectedFwdGrowthRevTo = undefined
        this._selectedLastGrowthRevFrom = undefined
        this._selectedLastGrowthRevTo = undefined
        this._selectedPegRatioFrom = undefined
        this._selectedPegRatioTo = undefined
        this._selectedEvEbitdaFrom = undefined
        this._selectedEvEbitdaTo = undefined
        this._selectedNetMarginFrom = undefined
        this._selectedNetMarginTo = undefined
        this._selectedROEFrom = undefined
        this._selectedROETo = undefined
        this._selectedROAFrom = undefined
        this._selectedROATo = undefined
        this._selectedCashDebtFrom = undefined
        this._selectedCashDebtTo = undefined
        this._selectedInterestCoverageFrom = undefined
        this._selectedInterestCoverageTo = undefined
        this._selectedCurrentRatioFrom = undefined
        this._selectedCurrentRatioTo = undefined
        this._selectedDebtToEquityFrom = undefined
        this._selectedDebtToEquityTo = undefined
        this._selectedDividendFrom = undefined
        this._selectedDividendTo = undefined
        this._selectedPayoutRatioFrom = undefined
        this._selectedPayoutRatioTo = undefined
        this._selectedPriceCFFrom = undefined
        this._selectedPriceCFTo = undefined
        this._selectedRSI14From = undefined
        this._selectedRSI14To = undefined
        this._selectedGrowthRFrom = undefined
        this._selectedGrowthRTo = undefined
        this._selectedProfitRFrom = undefined
        this._selectedProfitRTo = undefined
        this._selectedValueRFrom = undefined
        this._selectedValueRTo = undefined
        this._selectedDebtRFrom = undefined
        this._selectedDebtRTo = undefined
        this._selectedDividendRFrom = undefined
        this._selectedDividendRTo = undefined
        this._selectedFcfRFrom = undefined
        this._selectedFcfRTo = undefined
        this._selectedMomentumRFrom = undefined
        this._selectedMomentumRTo = undefined
        this._selectedTotalRFrom = undefined
        this._selectedTotalRTo = undefined

        this._selectedSearchTicker = ''
        this._oneStock = undefined
        this._listTickers = []
        this._dataOneStock = undefined
        this._dataOneStockScrinner = undefined
        this._resume = []
        this._conclusion = []
        this._macroTable = []


        this._page = 1
        this._totalCount = 0
        this._limit = undefined
        makeAutoObservable(this)
    }

    setBusinessCycleComps(businessCycleComps) {
        this._businessCycleComps = businessCycleComps
    }
    setBusinessCycleEcons(businessCycleEcons) {
        this._businessCycleEcons = businessCycleEcons
    }
    setStocks(stocks) {
        this._stocks = stocks
    }
    setCountrys(countrys) {
        this._countrys = countrys
    }
    setIndustrys(industrys) {
        this._industrys = industrys
    }
    setSectors(sectors) {
        this._sectors = sectors
    }
    

    setSelectedBusinessCycleComps(businessCycleComps) {
        this.setPage(1)
        this._selectedBusinessCycleComps = businessCycleComps
    }
    setSelectedBusinessCycleEcons(businessCycleEcons) {
        this.setPage(1)
        this._selectedBusinessCycleEcons = businessCycleEcons
    }
    setSelectedStocks(stocks) {
        this.setPage(1)
        this._selectedStocks = stocks
    }
    setSelectedCountrys(countrys) {
        this.setPage(1)
        this._selectedCountrys = countrys
    }
    setSelectedIndustrys(industrys) {
        this.setPage(1)
        this._selectedIndustrys = industrys
    }
    setSelectedSectors(sectors) {
        this.setPage(1)
        this._selectedSectors = sectors
    }
    setSelectedSort(sort) {
        this.setPage(1)
        this._selectedSort = sort
    }
    setSelectedSortName(sortName) {
        this.setPage(1)
        this._selectedSortName = sortName
    }

    setSelectedMarketCapFrom(marketCapFrom) {
        this.setPage(1)
        this._selectedMarketCapFrom = marketCapFrom
    }
    setSelectedMarketCapTo(marketCapTo) {
        this.setPage(1)
        this._selectedMarketCapTo = marketCapTo
    }
    setSelectedPEFrom(peFrom) {
        this.setPage(1)
        this._selectedPEFrom = peFrom
    }
    setSelectedPETo(peTo) {
        this.setPage(1)
        this._selectedPETo = peTo
    }
    setSelectedFwdPE1From(peFrom) {
        this.setPage(1)
        this._selectedFwdPE1From = peFrom
    }
    setSelectedFwdPE1To(peTo) {
        this.setPage(1)
        this._selectedFwdPE1To = peTo
    }
    setSelectedFwdPE2From(peFrom) {
        this.setPage(1)
        this._selectedFwdPE2From = peFrom
    }
    setSelectedFwdPE2To(peTo) {
        this.setPage(1)
        this._selectedFwdPE2To = peTo
    }
    setSelectedFwdPE3From(peFrom) {
        this.setPage(1)
        this._selectedFwdPE3From = peFrom
    }
    setSelectedFwdPE3To(peTo) {
        this.setPage(1)
        this._selectedFwdPE3To = peTo
    }
    setSelectedFwdGrowthEpsFrom(eps) {
        this.setPage(1)
        this._selectedFwdGrowthEpsFrom = eps
    }
    setSelectedFwdGrowthEpsTo(eps) {
        this.setPage(1)
        this._selectedFwdGrowthEpsTo = eps
    }
    setSelectedLastGrowthEpsFrom(eps) {
        this.setPage(1)
        this._selectedLastGrowthEpsFrom = eps
    }
    setSelectedLastGrowthEpsTo(eps) {
        this.setPage(1)
        this._selectedLastGrowthEpsTo = eps
    }
    setSelectedPSFrom(psFrom) {
        this.setPage(1)
        this._selectedPSFrom = psFrom
    }
    setSelectedPSTo(psTo) {
        this.setPage(1)
        this._selectedPSTo = psTo
    }
    setSelectedFwdPS1From(psFrom) {
        this.setPage(1)
        this._selectedFwdPS1From = psFrom
    }
    setSelectedFwdPS1To(psTo) {
        this.setPage(1)
        this._selectedFwdPS1To = psTo
    }
    setSelectedFwdPS2From(psFrom) {
        this.setPage(1)
        this._selectedFwdPS2From = psFrom
    }
    setSelectedFwdPS2To(psTo) {
        this.setPage(1)
        this._selectedFwdPS2To = psTo
    }
    setSelectedFwdPS3From(psFrom) {
        this.setPage(1)
        this._selectedFwdPS3From = psFrom
    }
    setSelectedFwdPS3To(psTo) {
        this.setPage(1)
        this._selectedFwdPS3To = psTo
    }
    setSelectedFwdGrowthRevFrom(rev) {
        this.setPage(1)
        this._selectedFwdGrowthRevFrom = rev
    }
    setSelectedFwdGrowthRevTo(rev) {
        this.setPage(1)
        this._selectedFwdGrowthRevTo = rev
    }
    setSelectedLastGrowthRevFrom(rev) {
        this.setPage(1)
        this._selectedLastGrowthRevFrom = rev
    }
    setSelectedLastGrowthRevTo(rev) {
        this.setPage(1)
        this._selectedLastGrowthRevTo = rev
    }
    setSelectedPegRatioFrom(peg) {
        this.setPage(1)
        this._selectedPegRatioFrom = peg
    }
    setSelectedPegRatioTo(peg) {
        this.setPage(1)
        this._selectedPegRatioTo = peg
    }
    setSelectedEvEbitdaFrom(e) {
        this.setPage(1)
        this._selectedEvEbitdaFrom = e
    }
    setSelectedEvEbitdaTo(e) {
        this.setPage(1)
        this._selectedEvEbitdaTo = e
    }
    setSelectedNetMarginFrom(netMargin) {
        this.setPage(1)
        this._selectedNetMarginFrom = netMargin
    }
    setSelectedNetMarginTo(netMargin) {
        this.setPage(1)
        this._selectedNetMarginTo = netMargin
    }
    setSelectedROEFrom(e) {
        this.setPage(1)
        this._selectedROEFrom = e
    }
    setSelectedROETo(e) {
        this.setPage(1)
        this._selectedROETo = e
    }
    setSelectedROAFrom(e) {
        this.setPage(1)
        this._selectedROAFrom = e
    }
    setSelectedROATo(e) {
        this.setPage(1)
        this._selectedROATo = e
    }
    setSelectedCashDebtFrom(e) {
        this.setPage(1)
        this._selectedCashDebtFrom = e
    }
    setSelectedCashDebtTo(e) {
        this.setPage(1)
        this._selectedCashDebtTo = e
    }
    setSelectedInterestCoverageFrom(e) {
        this.setPage(1)
        this._selectedInterestCoverageFrom = e
    }
    setSelectedInterestCoverageTo(e) {
        this.setPage(1)
        this._selectedInterestCoverageTo = e
    }
    setSelectedCurrentRatioFrom(e) {
        this.setPage(1)
        this._selectedCurrentRatioFrom = e
    }
    setSelectedCurrentRatioTo(e) {
        this.setPage(1)
        this._selectedCurrentRatioTo = e
    }
    setSelectedDebtToEquityFrom(e) {
        this.setPage(1)
        this._selectedDebtToEquityFrom = e
    }
    setSelectedDebtToEquityTo(e) {
        this.setPage(1)
        this._selectedDebtToEquityTo = e
    }
    setSelectedDividendFrom(dividend) {
        this.setPage(1)
        this._selectedDividendFrom = dividend
    }
    setSelectedDividendTo(dividend) {
        this.setPage(1)
        this._selectedDividendTo = dividend
    }
    setSelectedPayoutRatioFrom(e) {
        this.setPage(1)
        this._selectedPayoutRatioFrom = e
    }
    setSelectedPayoutRatioTo(e) {
        this.setPage(1)
        this._selectedPayoutRatioTo = e
    }
    setSelectedPriceCFFrom(e) {
        this.setPage(1)
        this._selectedPriceCFFrom = e
    }
    setSelectedPriceCFTo(e) {
        this.setPage(1)
        this._selectedPriceCFTo = e
    }
    setSelectedRSI14From(e) {
        this.setPage(1)
        this._selectedRSI14From = e
    }
    setSelectedRSI14To(e) {
        this.setPage(1)
        this._selectedRSI14To = e
    }
    setSelectedGrowthRFrom(e) {
        this.setPage(1)
        this._selectedGrowthRFrom = e
    }
    setSelectedGrowthRTo(e) {
        this.setPage(1)
        this._selectedGrowthRTo = e
    }
    setSelectedProfitRFrom(profitR) {
        this.setPage(1)
        this._selectedProfitRFrom = profitR
    }
    setSelectedProfitRTo(profitR) {
        this.setPage(1)
        this._selectedProfitRTo = profitR
    }
    setSelectedValueRFrom(valueR) {
        this.setPage(1)
        this._selectedValueRFrom = valueR
    }
    setSelectedValueRTo(valueR) {
        this.setPage(1)
        this._selectedValueRTo = valueR
    }
    setSelectedDebtRFrom(debtR) {
        this.setPage(1)
        this._selectedDebtRFrom = debtR
    }
    setSelectedDebtRTo(debtR) {
        this.setPage(1)
        this._selectedDebtRTo = debtR
    }
    setSelectedDividendRFrom(dividendR) {
        this.setPage(1)
        this._selectedDividendRFrom = dividendR
    }
    setSelectedDividendRTo(dividendR) {
        this.setPage(1)
        this._selectedDividendRTo = dividendR
    }
    setSelectedFcfRFrom(fcfR) {
        this.setPage(1)
        this._selectedFcfRFrom = fcfR
    }
    setSelectedFcfRTo(fcfR) {
        this.setPage(1)
        this._selectedFcfRTo = fcfR
    }
    setSelectedMomentumRFrom(momentumR) {
        this.setPage(1)
        this._selectedMomentumRFrom = momentumR
    }
    setSelectedMomentumRTo(momentumR) {
        this.setPage(1)
        this._selectedMomentumRTo = momentumR
    }
    setSelectedTotalRFrom(totalR) {
        this.setPage(1)
        this._selectedTotalRFrom = totalR
    }
    setSelectedTotalRTo(totalR) {
        this.setPage(1)
        this._selectedTotalRTo = totalR
    }

    setSelectedSearchTicker(e) {
        this.setPage(1)
        this._selectedSearchTicker = e
    }
    setOneStock(e) {
        this._oneStock = e
    }
    setListTickers(e) {
        this._listTickers = e
    }
    setDataOneStock(e) {
        this._dataOneStock = e
    }
    setDataOneStockScrinner(e) {
        this._dataOneStockScrinner = e
    }
    setResume(e) {
        this._resume = e
    }
    setConclusion(e) {
        this._conclusion = e
    }
    setMacroTable(e) {
        this._macroTable = e
    }


    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setLimit(limit) {
        this._limit = limit
    }

    get businessCycleComps() {
        return this._businessCycleComps
    }
    get businessCycleEcons() {
        return this._businessCycleEcons
    }
    get stocks() {
        return this._stocks
    }
    get countrys() {
        return this._countrys
    }
    get industrys() {
        return this._industrys
    }
    get sectors() {
        return this._sectors
    }

    

    get selectedBusinessCycleComps() {
        return this._selectedBusinessCycleComps
    }
    get selectedBusinessCycleEcons() {
        return this._selectedBusinessCycleEcons
    }
    get selectedStocks() {
        return this._selectedStocks
    }
    get selectedCountrys() {
        return this._selectedCountrys
    }
    get selectedIndustrys() {
        return this._selectedIndustrys
    }
    get selectedSectors() {
        return this._selectedSectors
    }
    get selectedSort() {
        return this._selectedSort
    }
    get selectedSortName() {
        return this._selectedSortName
    }

    get selectedMarketCapFrom() {
        return this._selectedMarketCapFrom
    }
    get selectedMarketCapTo() {
        return this._selectedMarketCapTo
    }
    get selectedPEFrom() {
        return this._selectedPEFrom
    }
    get selectedPETo() {
        return this._selectedPETo
    }
    get selectedFwdPE1From() {
        return this._selectedFwdPE1From
    }
    get selectedFwdPE1To() {
        return this._selectedFwdPE1To
    }
    get selectedFwdPE2From() {
        return this._selectedFwdPE2From
    }
    get selectedFwdPE2To() {
        return this._selectedFwdPE2To
    }
    get selectedFwdPE3From() {
        return this._selectedFwdPE3From
    }
    get selectedFwdPE3To() {
        return this._selectedFwdPE3To
    }
    get selectedFwdGrowthEpsFrom() {
        return this._selectedFwdGrowthEpsFrom
    }
    get selectedFwdGrowthEpsTo() {
        return this._selectedFwdGrowthEpsTo
    }
    get selectedLastGrowthEpsFrom() {
        return this._selectedLastGrowthEpsFrom
    }
    get selectedLastGrowthEpsTo() {
        return this._selectedLastGrowthEpsTo
    }
    get selectedPSFrom() {
        return this._selectedPSFrom
    }
    get selectedPSTo() {
        return this._selectedPSTo
    }
    get selectedFwdPS1From() {
        return this._selectedFwdPS1From
    }
    get selectedFwdPS1To() {
        return this._selectedFwdPS1To
    }
    get selectedFwdPS2From() {
        return this._selectedFwdPS2From
    }
    get selectedFwdPS2To() {
        return this._selectedFwdPS2To
    }
    get selectedFwdPS3From() {
        return this._selectedFwdPS3From
    }
    get selectedFwdPS3To() {
        return this._selectedFwdPS3To
    }
    get selectedFwdGrowthRevFrom() {
        return this._selectedFwdGrowthRevFrom
    }
    get selectedFwdGrowthRevTo() {
        return this._selectedFwdGrowthRevTo
    }
    get selectedLastGrowthRevFrom() {
        return this._selectedLastGrowthRevFrom
    }
    get selectedLastGrowthRevTo() {
        return this._selectedLastGrowthRevTo
    }
    get selectedPegRatioFrom() {
        return this._selectedPegRatioFrom
    }
    get selectedPegRatioTo() {
        return this._selectedPegRatioTo
    }
    get selectedEvEbitdaFrom() {
        return this._selectedEvEbitdaFrom
    }
    get selectedEvEbitdaTo() {
        return this._selectedEvEbitdaTo
    }
    get selectedNetMarginFrom() {
        return this._selectedNetMarginFrom
    }
    get selectedNetMarginTo() {
        return this._selectedNetMarginTo
    }
    get selectedROEFrom() {
        return this._selectedROEFrom
    }
    get selectedROETo() {
        return this._selectedROETo
    }
    get selectedROAFrom() {
        return this._selectedROAFrom
    }
    get selectedROATo() {
        return this._selectedROATo
    }
    get selectedCashDebtFrom() {
        return this._selectedCashDebtFrom
    }
    get selectedCashDebtTo() {
        return this._selectedCashDebtTo
    }
    get selectedInterestCoverageFrom() {
        return this._selectedInterestCoverageFrom
    }
    get selectedInterestCoverageTo() {
        return this._selectedInterestCoverageTo
    }
    get selectedCurrentRatioFrom() {
        return this._selectedCurrentRatioFrom
    }
    get selectedCurrentRatioTo() {
        return this._selectedCurrentRatioTo
    }
    get selectedDebtToEquityFrom() {
        return this._selectedDebtToEquityFrom
    }
    get selectedDebtToEquityTo() {
        return this._selectedDebtToEquityTo
    }
    get selectedDividendFrom() {
        return this._selectedDividendFrom
    }
    get selectedDividendTo() {
        return this._selectedDividendTo
    }
    get selectedPayoutRatioFrom() {
        return this._selectedPayoutRatioFrom
    }
    get selectedPayoutRatioTo() {
        return this._selectedPayoutRatioTo
    }
    get selectedPriceCFFrom() {
        return this._selectedPriceCFFrom
    }
    get selectedPriceCFTo() {
        return this._selectedPriceCFTo
    }
    get selectedRSI14From() {
        return this._selectedRSI14From
    }
    get selectedRSI14To() {
        return this._selectedRSI14To
    }
    get selectedGrowthRFrom() {
        return this._selectedGrowthRFrom
    }
    get selectedGrowthRTo() {
        return this._selectedGrowthRTo
    }
    get selectedProfitRFrom() {
        return this._selectedProfitRFrom
    }
    get selectedProfitRTo() {
        return this._selectedProfitRTo
    }
    get selectedValueRFrom() {
        return this._selectedValueRFrom
    }
    get selectedValueRTo() {
        return this._selectedValueRTo
    }
    get selectedDebtRFrom() {
        return this._selectedDebtRFrom
    }
    get selectedDebtRTo() {
        return this._selectedDebtRTo
    }
    get selectedDividendRFrom() {
        return this._selectedDividendRFrom
    }
    get selectedDividendRTo() {
        return this._selectedDividendRTo
    }
    get selectedFcfRFrom() {
        return this._selectedFcfRFrom
    }
    get selectedFcfRTo() {
        return this._selectedFcfRTo
    }
    get selectedMomentumRFrom() {
        return this._selectedMomentumRFrom
    }
    get selectedMomentumRTo() {
        return this._selectedMomentumRTo
    }
    get selectedTotalRFrom() {
        return this._selectedTotalRFrom
    }
    get selectedTotalRTo() {
        return this._selectedTotalRTo
    }

    get selectedSearchTicker() {
        return this._selectedSearchTicker
    }
    get oneStock() {
        return this._oneStock
    }
    get listTickers() {
        return this._listTickers
    }
    get dataOneStock() {
        return this._dataOneStock
    }
    get dataOneStockScrinner() {
        return this._dataOneStockScrinner
    }
    get resume() {
        return this._resume
    }
    get conclusion() {
        return this._conclusion
    }
    get macroTable() {
        return this._macroTable
    }
    

    
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}