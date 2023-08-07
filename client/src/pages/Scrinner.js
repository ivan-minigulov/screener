import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import SelectMultiCountry from '../components/SelectMultiCountry';
import SelectSingleSort from '../components/SelectSingleSort';

import { COL_NAMES, COL_NAMES_DB } from '../components/tables/colNamesScrinner';
import TableScrinner from '../components/tables/TableScrinner';
import { fetchStocks } from '../http/stockAPI';
import Pages from '../components/Pages';
import SelectMultiSector from '../components/SelectMultiSector';
import SelectMultiIndustry from '../components/SelectMultiIndustry';
import SelectMultiBusCycleComp from '../components/SelectMultiBusCycleComp';
import SelectMultiBusCycleEcon from '../components/SelectMultiBusCycleEcon';
import { optionsSort } from '../components/tables/colNamesScrinner';
import InputMarketCap from '../components/inputs/InputMarketCap';
import InputPE from '../components/inputs/InputPE';
import SearchBox from '../components/SearchBox';
import InputCashDebt from '../components/inputs/InputCashDebt';
import InputDebtR from '../components/inputs/InputDebtR';
import InputDividend from '../components/inputs/InputDividend';
import InputDividendR from '../components/inputs/InputDividendR';
import InputEvEbitda from '../components/inputs/InputEvEbitda';
import InputFcfR from '../components/inputs/InputFcfR';
import InputFwdGrowthEps from '../components/inputs/InputFwdGrowthEps';
import InputFwdGrowthRev from '../components/inputs/InputFwdGrowthRev';
import InputFwdPE1 from '../components/inputs/InputFwdPE1';
import InputFwdPE2 from '../components/inputs/InputFwdPE2';
import InputFwdPE3 from '../components/inputs/InputFwdPE3';
import InputFwdPS1 from '../components/inputs/InputFwdPS1';
import InputFwdPS2 from '../components/inputs/InputFwdPS2';
import InputFwdPS3 from '../components/inputs/InputFwdPS3';
import InputGrowthR from '../components/inputs/InputGrowthR';
import InputInterestCoverage from '../components/inputs/InputInterestCoverage';
import InputLastGrowthEps from '../components/inputs/InputLastGrowthEps';
import InputLastGrowthRev from '../components/inputs/InputLastGrowthRev';
import InputMomentumR from '../components/inputs/InputMomentumR';
import InputNetMargin from '../components/inputs/InputNetMargin';
import InputPriceCF from '../components/inputs/InputPriceCF';
import InputProfitR from '../components/inputs/InputProfitR';
import InputPS from '../components/inputs/InputPS';
import InputROE from '../components/inputs/InputROE';
import InputROA from '../components/inputs/InputROA';
import InputRSI14 from '../components/inputs/InputRSI14';
import InputTotalR from '../components/inputs/InputTotalR';
import InputValueR from '../components/inputs/InputValueR';
import InputDebtToEquity from '../components/inputs/InputDebtToEq';
import InputCurrentRatio from '../components/inputs/InputCurrent';
import InputPayoutRatio from '../components/inputs/InputPayout';
import InputPegRatio from '../components/inputs/InputPeg';
import { Button } from 'react-bootstrap';


export default observer (function Scrinner() {
  const { stock } = useContext(Context)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    fetchStocks(stock.selectedSectors, stock.selectedBusinessCycleComps, stock.selectedIndustrys, stock.selectedCountrys, 
      stock.selectedBusinessCycleEcons, stock.page, 20, stock.selectedSort, stock.selectedSortName, 
      stock.selectedMarketCapFrom, stock.selectedMarketCapTo, stock.selectedPEFrom, stock.selectedPETo, stock.selectedFwdPE1From,
      stock.selectedFwdPE1To, stock.selectedFwdPE2From, stock.selectedFwdPE2To, stock.selectedFwdPE3From, stock.selectedFwdPE3To,
      stock.selectedFwdGrowthEpsFrom, stock.selectedFwdGrowthEpsTo, stock.selectedLastGrowthEpsFrom, stock.selectedLastGrowthEpsTo,
      stock.selectedPSFrom, stock.selectedPSTo, stock.selectedFwdPS1From, stock.selectedFwdPS1To, stock.selectedFwdPS2From,
      stock.selectedFwdPS2To, stock.selectedFwdPS3From, stock.selectedFwdPS3To, stock.selectedFwdGrowthRevFrom,
      stock.selectedFwdGrowthRevTo, stock.selectedLastGrowthRevFrom, stock.selectedLastGrowthRevTo, stock.selectedPegRatioFrom,
      stock.selectedPegRatioTo, stock.selectedEvEbitdaFrom, stock.selectedEvEbitdaTo, stock.selectedNetMarginFrom,
      stock.selectedNetMarginTo, stock.selectedROEFrom, stock.selectedROETo, stock.selectedROAFrom, stock.selectedROATo,
      stock.selectedCashDebtFrom, stock.selectedCashDebtTo, stock.selectedInterestCoverageFrom, stock.selectedInterestCoverageTo,
      stock.selectedCurrentRatioFrom, stock.selectedCurrentRatioTo, stock.selectedDebtToEquityFrom, stock.selectedDebtToEquityTo,
      stock.selectedDividendFrom, stock.selectedDividendTo, stock.selectedPayoutRatioFrom, stock.selectedPayoutRatioTo,
      stock.selectedPriceCFFrom, stock.selectedPriceCFTo, stock.selectedRSI14From, stock.selectedRSI14To, stock.selectedGrowthRFrom,
      stock.selectedGrowthRTo, stock.selectedProfitRFrom, stock.selectedProfitRTo, stock.selectedValueRFrom, stock.selectedValueRTo,
      stock.selectedDebtRFrom, stock.selectedDebtRTo, stock.selectedDividendRFrom, stock.selectedDividendRTo, stock.selectedFcfRFrom,
      stock.selectedFcfRTo, stock.selectedMomentumRFrom, stock.selectedMomentumRTo, stock.selectedTotalRFrom, stock.selectedTotalRTo,
      stock.selectedSearchTicker,
      ).then(data => {
        stock.setStocks(data.rows)
        setTotalCount(data.count)
      })
  }, [stock, stock.selectedSectors, stock.selectedBusinessCycleComps, stock.selectedIndustrys, stock.selectedCountrys, 
    stock.selectedBusinessCycleEcons, stock.page, stock.selectedSort, stock.selectedSortName, 
    stock.selectedMarketCapFrom, stock.selectedMarketCapTo, stock.selectedPEFrom, stock.selectedPETo, stock.selectedFwdPE1From,
    stock.selectedFwdPE1To, stock.selectedFwdPE2From, stock.selectedFwdPE2To, stock.selectedFwdPE3From, stock.selectedFwdPE3To,
    stock.selectedFwdGrowthEpsFrom, stock.selectedFwdGrowthEpsTo, stock.selectedLastGrowthEpsFrom, stock.selectedLastGrowthEpsTo,
    stock.selectedPSFrom, stock.selectedPSTo, stock.selectedFwdPS1From, stock.selectedFwdPS1To, stock.selectedFwdPS2From,
    stock.selectedFwdPS2To, stock.selectedFwdPS3From, stock.selectedFwdPS3To, stock.selectedFwdGrowthRevFrom,
    stock.selectedFwdGrowthRevTo, stock.selectedLastGrowthRevFrom, stock.selectedLastGrowthRevTo, stock.selectedPegRatioFrom,
    stock.selectedPegRatioTo, stock.selectedEvEbitdaFrom, stock.selectedEvEbitdaTo, stock.selectedNetMarginFrom,
    stock.selectedNetMarginTo, stock.selectedROEFrom, stock.selectedROETo, stock.selectedROAFrom, stock.selectedROATo,
    stock.selectedCashDebtFrom, stock.selectedCashDebtTo, stock.selectedInterestCoverageFrom, stock.selectedInterestCoverageTo,
    stock.selectedCurrentRatioFrom, stock.selectedCurrentRatioTo, stock.selectedDebtToEquityFrom, stock.selectedDebtToEquityTo,
    stock.selectedDividendFrom, stock.selectedDividendTo, stock.selectedPayoutRatioFrom, stock.selectedPayoutRatioTo,
    stock.selectedPriceCFFrom, stock.selectedPriceCFTo, stock.selectedRSI14From, stock.selectedRSI14To, stock.selectedGrowthRFrom,
    stock.selectedGrowthRTo, stock.selectedProfitRFrom, stock.selectedProfitRTo, stock.selectedValueRFrom, stock.selectedValueRTo,
    stock.selectedDebtRFrom, stock.selectedDebtRTo, stock.selectedDividendRFrom, stock.selectedDividendRTo, stock.selectedFcfRFrom,
    stock.selectedFcfRTo, stock.selectedMomentumRFrom, stock.selectedMomentumRTo, stock.selectedTotalRFrom, stock.selectedTotalRTo,
    stock.selectedSearchTicker,
    ])
  
  const selectEconRef = React.useRef()
  const selectCompRef = React.useRef()
  const selectSectorRef = React.useRef()
  const selectIndustryRef = React.useRef()
  const selectCountryRef = React.useRef()
  
  const clearForms = () => {
    stock.setSelectedSectors([]) 
    stock.setSelectedBusinessCycleComps([])
    stock.setSelectedIndustrys([])
    stock.setSelectedCountrys([])
    stock.setSelectedBusinessCycleEcons([])
    stock.setSelectedMarketCapFrom(undefined)
    stock.setSelectedMarketCapTo(undefined)
    stock.setSelectedPEFrom(undefined)
    stock.setSelectedPETo(undefined)
    stock.setSelectedFwdPE1From(undefined)
    stock.setSelectedFwdPE1To(undefined)
    stock.setSelectedFwdPE2From(undefined)
    stock.setSelectedFwdPE2To(undefined)
    stock.setSelectedFwdPE3From(undefined)
    stock.setSelectedFwdPE3To(undefined)
    stock.setSelectedFwdGrowthEpsFrom(undefined)
    stock.setSelectedFwdGrowthEpsTo(undefined)
    stock.setSelectedLastGrowthEpsFrom(undefined)
    stock.setSelectedLastGrowthEpsTo(undefined)
    stock.setSelectedPSFrom(undefined)
    stock.setSelectedPSTo(undefined)
    stock.setSelectedFwdPS1From(undefined)
    stock.setSelectedFwdPS1To(undefined)
    stock.setSelectedFwdPS2From(undefined)
    stock.setSelectedFwdPS2To(undefined)
    stock.setSelectedFwdPS3From(undefined)
    stock.setSelectedFwdPS3To(undefined)
    stock.setSelectedFwdGrowthRevFrom(undefined)
    stock.setSelectedFwdGrowthRevTo(undefined)
    stock.setSelectedLastGrowthRevFrom(undefined)
    stock.setSelectedLastGrowthRevTo(undefined)
    stock.setSelectedPegRatioFrom(undefined)
    stock.setSelectedPegRatioTo(undefined)
    stock.setSelectedEvEbitdaFrom(undefined)
    stock.setSelectedEvEbitdaTo(undefined)
    stock.setSelectedNetMarginFrom(undefined)
    stock.setSelectedNetMarginTo(undefined)
    stock.setSelectedROEFrom(undefined)
    stock.setSelectedROETo(undefined)
    stock.setSelectedROAFrom(undefined)
    stock.setSelectedROATo(undefined)
    stock.setSelectedCashDebtFrom(undefined)
    stock.setSelectedCashDebtTo(undefined)
    stock.setSelectedInterestCoverageFrom(undefined)
    stock.setSelectedInterestCoverageTo(undefined)
    stock.setSelectedCurrentRatioFrom(undefined)
    stock.setSelectedCurrentRatioTo(undefined)
    stock.setSelectedDebtToEquityFrom(undefined)
    stock.setSelectedDebtToEquityTo(undefined)
    stock.setSelectedDividendFrom(undefined)
    stock.setSelectedDividendTo(undefined)
    stock.setSelectedPayoutRatioFrom(undefined)
    stock.setSelectedPayoutRatioTo(undefined)
    stock.setSelectedPriceCFFrom(undefined)
    stock.setSelectedPriceCFTo(undefined)
    stock.setSelectedRSI14From(undefined)
    stock.setSelectedRSI14To(undefined)
    stock.setSelectedGrowthRFrom(undefined)
    stock.setSelectedGrowthRTo(undefined)
    stock.setSelectedProfitRFrom(undefined)
    stock.setSelectedProfitRTo(undefined)
    stock.setSelectedValueRFrom(undefined)
    stock.setSelectedValueRTo(undefined)
    stock.setSelectedDebtRFrom(undefined)
    stock.setSelectedDebtRTo(undefined)
    stock.setSelectedDividendRFrom(undefined)
    stock.setSelectedDividendRTo(undefined)
    stock.setSelectedFcfRFrom(undefined)
    stock.setSelectedFcfRTo(undefined)
    stock.setSelectedMomentumRFrom(undefined)
    stock.setSelectedMomentumRTo(undefined)
    stock.setSelectedTotalRFrom(undefined)
    stock.setSelectedTotalRTo(undefined)
    document.getElementById('input-form-control1').value=''
    document.getElementById('input-form-control2').value=''
    document.getElementById('input-form-control3').value=''
    document.getElementById('input-form-control4').value=''
    document.getElementById('input-form-control5').value=''
    document.getElementById('input-form-control6').value=''
    document.getElementById('input-form-control7').value=''
    document.getElementById('input-form-control8').value=''
    document.getElementById('input-form-control9').value=''
    document.getElementById('input-form-control10').value=''
    document.getElementById('input-form-control11').value=''
    document.getElementById('input-form-control12').value=''
    document.getElementById('input-form-control13').value=''
    document.getElementById('input-form-control14').value=''
    document.getElementById('input-form-control15').value=''
    document.getElementById('input-form-control16').value=''
    document.getElementById('input-form-control17').value=''
    document.getElementById('input-form-control18').value=''
    document.getElementById('input-form-control19').value=''
    document.getElementById('input-form-control20').value=''
    document.getElementById('input-form-control21').value=''
    document.getElementById('input-form-control22').value=''
    document.getElementById('input-form-control23').value=''
    document.getElementById('input-form-control24').value=''
    document.getElementById('input-form-control25').value=''
    document.getElementById('input-form-control26').value=''
    document.getElementById('input-form-control27').value=''
    document.getElementById('input-form-control28').value=''
    document.getElementById('input-form-control29').value=''
    document.getElementById('input-form-control30').value=''
    document.getElementById('input-form-control31').value=''
    document.getElementById('input-form-control32').value=''
    document.getElementById('input-form-control33').value=''
    document.getElementById('input-form-control34').value=''
    document.getElementById('input-form-control35').value=''
    document.getElementById('input-form-control36').value=''
    document.getElementById('input-form-control37').value=''
    document.getElementById('input-form-control38').value=''
    document.getElementById('input-form-control39').value=''
    document.getElementById('input-form-control40').value=''
    document.getElementById('input-form-control41').value=''
    document.getElementById('input-form-control42').value=''
    document.getElementById('input-form-control43').value=''
    document.getElementById('input-form-control44').value=''
    document.getElementById('input-form-control45').value=''
    document.getElementById('input-form-control46').value=''
    document.getElementById('input-form-control47').value=''
    document.getElementById('input-form-control48').value=''
    document.getElementById('input-form-control49').value=''
    document.getElementById('input-form-control50').value=''
    document.getElementById('input-form-control51').value=''
    document.getElementById('input-form-control52').value=''
    document.getElementById('input-form-control53').value=''
    document.getElementById('input-form-control54').value=''
    document.getElementById('input-form-control55').value=''
    document.getElementById('input-form-control56').value=''
    document.getElementById('input-form-control57').value=''
    document.getElementById('input-form-control58').value=''
    document.getElementById('input-form-control59').value=''
    document.getElementById('input-form-control60').value=''
    document.getElementById('input-form-control61').value=''
    document.getElementById('input-form-control62').value=''
    document.getElementById('input-form-control63').value=''
    document.getElementById('input-form-control64').value=''
    document.getElementById('input-form-control65').value=''
    document.getElementById('input-form-control66').value=''
    document.getElementById('input-form-control67').value=''
    document.getElementById('input-form-control68').value=''
    selectEconRef.current.clearValue()
    selectCompRef.current.clearValue()
    selectSectorRef.current.clearValue()
    selectIndustryRef.current.clearValue()
    selectCountryRef.current.clearValue()


  }

  return (
    <div>
      <div className='div-options-1'>
        <div className='div-options-2'>
          <SelectMultiBusCycleEcon ref={selectEconRef}/>
          <SelectMultiBusCycleComp ref={selectCompRef}/>
          <SelectMultiSector ref={selectSectorRef}/>
          <SelectMultiIndustry ref={selectIndustryRef}/>
          <SelectMultiCountry ref={selectCountryRef}/>
          <InputGrowthR />
          <InputProfitR />
          <InputValueR />
          <InputDebtR />
          <InputDividendR />
          <InputFcfR />
          <InputMomentumR />
          <InputTotalR />
        </div>
        <div className='div-options-3'>
          <InputMarketCap/>
          <InputPE/>
          <InputFwdPE1 />
          <InputFwdPE2 />
          <InputFwdPE3 />
          <InputPS />
          <InputFwdPS1 />
          <InputFwdPS2 />
          <InputFwdPS3 />
          <InputFwdGrowthEps />
          <InputFwdGrowthRev />
          <InputLastGrowthEps />
          <InputLastGrowthRev />
        </div>
        <div className='div-options-4'>
          <InputPegRatio />
          <InputEvEbitda />
          <InputNetMargin />
          <InputROE />
          <InputROA />
          <InputCashDebt />
          <InputInterestCoverage />
          <InputCurrentRatio />
          <InputDebtToEquity />
          <InputDividend />
          <InputPayoutRatio />
          <InputPriceCF />
          <InputRSI14 />
        </div>
      </div>
      <div className='div-options-5'>
        <div className='div-options-7'>
          <SearchBox />
        </div>
        <div className='div-options-6'>
          <SelectSingleSort options={optionsSort}/>
        </div>
        <div className='div-options-8'>
          <Button className='button-style' id='button-clear' onClick={clearForms}>Очистить формы</Button>
        </div>
      </div>
      <TableScrinner listScrinner={stock.stocks} colNamesScrinner={COL_NAMES} colNamesDB={COL_NAMES_DB}/>
      <Pages totalCount={totalCount} limit={20}/>
    </div>  
  )
})
