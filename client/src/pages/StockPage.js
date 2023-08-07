import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index';
import { useParams } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import { fetchMicroStock, fetchOneMicroStock, fetchOneStock } from '../http/stockAPI';
import List from '../components/List';
import TableOneStock from '../components/tables/TableOneStock';
import TableShortOneStock from '../components/tables/TableShortOneStock';
import ShortParamsStock from '../components/tables/ShortParamsStock';
import SalesAndEarnings from '../components/infographics/salesAndEarnings';
import Emission from '../components/infographics/emission';
import CashDebt from '../components/infographics/cashDebt';
import CashFlowAndEarningsMargin from '../components/infographics/cashFlowAndEarningMargin';
import RevenueFwd from '../components/infographics/revenueFwd';
import EpsFwd from '../components/infographics/epsFwd';
import RatingRadar from '../components/infographics/ratingRadar';
import PegEvEbitdaRoeRoaRsi from '../components/infographics/pegEvEbitdaRoeRoaRsi';
import MarketCapBusCycle from '../components/tables/marketCapBusCycle';
import Nav from 'react-bootstrap/Nav';
import TradingViewWidget from '../components/ChartTradingView';
import DescriptionStock from '../components/DescriptionStock';


export default observer(function StockPage() {
  const {ticker} = useParams()
  const { stock } = useContext(Context)
  const [ nav, setNav ] = useState('infographics')

  useEffect(() => {
    if (ticker) {
      stock.setOneStock(ticker)
    }
  })

  useEffect(() => {
    fetchMicroStock(stock.selectedSearchTicker).then(data => {
      stock.setListTickers(data.rows)
    })
  }, [stock, stock.selectedSearchTicker])


  useEffect(() => {
    fetchOneMicroStock(stock.oneStock).then(data => {
      stock.setDataOneStock(data)
    })
  }, [stock, stock.oneStock])

  useEffect(() => {
    fetchOneStock(stock.oneStock).then(data => {
      stock.setDataOneStockScrinner(data)
    })
  }, [stock, stock.oneStock])

  

  return (
    <div>
      <div className='div-micro'>
        <div className='div-micro-search'>
          <div className='div-micro-search-div'>
            <div className='div-search'>
              <SearchBox />
            </div>
            {(Boolean(stock.listTickers) && stock.listTickers.length > 0) && (
              <List list={stock.listTickers}/>
            )}
          </div>
        </div>
        
        <div className='div-micro-ticker'>
          <ShortParamsStock data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        </div>
        <div className='div-micro-market'>
          <MarketCapBusCycle data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        </div>
      </div>
              {Boolean(stock.dataOneStock) && Boolean(stock.dataOneStockScrinner) &&
                  <div className='mb-4'>
                  <Nav justify defaultActiveKey={0} variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey={0} onClick={() => setNav('infographics')}>Инфографика</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={1} onClick={() => setNav('description')}>О компании</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={2} onClick={() => setNav('tradingview')}>График TradingView</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey={3} onClick={() => setNav('tables')}>Табличные данные</Nav.Link>
                  </Nav.Item>
                  
                </Nav>
                </div>}
      {Boolean(nav === 'infographics') &&
      <>
        <RatingRadar data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <SalesAndEarnings data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <CashFlowAndEarningsMargin data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <RevenueFwd data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <EpsFwd data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <CashDebt data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <Emission data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <PegEvEbitdaRoeRoaRsi data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
      </>
      }
      {Boolean(nav === 'description') &&
      <>
        <DescriptionStock stockMicro={stock.dataOneStock}/>
      </>
      }
      {Boolean(nav === 'tables') &&
      <>
        <TableOneStock data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
        <TableShortOneStock data={stock.dataOneStock} dataScrinner={stock.dataOneStockScrinner}/>
      </>}
      {Boolean(nav === 'tradingview') &&
      <div className='TradingViewWidget'>
        <TradingViewWidget ticker={stock.oneStock}/>
      </div>}
      
    </div>
  )
})
