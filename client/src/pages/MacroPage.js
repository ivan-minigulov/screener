import { observer } from 'mobx-react-lite';
import React, { useState, useContext, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from '..';
import Gdp from '../components/macro/GdpMacro';
import LaborMarket from '../components/macro/LaborMarketMacro';
import Production from '../components/macro/ProductionMacro';
import Resume from '../components/macro/ResumeMacro';
import Credit from '../components/macro/CreditMacro';
import { fetchConclusion, fetchMacrotable, fetchResume } from '../http/stockAPI';
import Income from '../components/macro/IncomeMacro';
import Regulation from '../components/macro/RegulationMacro';
import StocksAndSales from '../components/macro/StocksAndSalesMacro';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { MACROPAGE_ROUTE } from '../utils/consts';

export default observer (function MacroPage() {
  const { stock } = useContext(Context)
  const params = useParams()

  useEffect(() => {
    fetchResume().then(data => stock.setResume(data))
  }, [stock]);

  useEffect(() => {
    fetchConclusion().then(data => stock.setConclusion(data))
  }, [stock]);

  useEffect(() => {
    fetchMacrotable().then(data => stock.setMacroTable(data))
  }, [stock]);

  return (
    <div>
      <Navbar className='navbar-macro' variant="dark">
        <Container>
          <Nav className='me-auto'>
            <Nav.Link defaultChecked='true' as={Link} to={MACROPAGE_ROUTE + '/resume'}>Резюме</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/gdp'}>ВВП</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/labor-market'}>Рынок труда</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/production'}>Производство</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/credit'}>Кредит</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/income'}>Корпоративные прибыли</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/regulation'}>Регулирование</Nav.Link>
            <Nav.Link as={Link} to={MACROPAGE_ROUTE + '/stocks-and-sales'}>Запасы и продажи</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {(params.id === 'resume') && 
      <Resume dataResume={stock.resume} conclusion={stock.conclusion} macroTable={stock.macroTable}/>}
      {(params.id === 'gdp') && 
      <Gdp />}
      {(params.id === 'labor-market') && 
      <LaborMarket />}
      {(params.id === 'production') && 
      <Production />}
      {(params.id === 'credit') && 
      <Credit />}
      {(params.id === 'income') && 
      <Income />}
      {(params.id === 'regulation') && 
      <Regulation />}
      {(params.id === 'stocks-and-sales') && 
      <StocksAndSales />}
      
    </div>
  )

  // return (
  //   <div>
  //     <Navbar bg="dark" variant="dark">
  //       <Container>
  //         <Nav className="me-auto">
  //           <Nav onClick={() => macroPage = 'Resume'}>Резюме</Nav>
  //           <Nav onClick={() => macroPage = 'GDP'}>ВВП</Nav>
  //           <Nav onClick={() => macroPage = 'Labor market'}>Рынок труда</Nav>
  //           <Nav onClick={() => macroPage = 'Production'}>Производство</Nav>
  //           <Nav onClick={() => macroPage = 'Credit'}>Кредит</Nav>
  //           <Nav onClick={() => macroPage = 'Income'}>Корпоративные прибыли</Nav>
  //           <Nav onClick={() => macroPage = 'Regulation'}>Регулирование</Nav>
  //           <Nav onClick={() => macroPage = 'Stocks and sales'}>Запасы и продажи</Nav>
  //         </Nav>
  //       </Container>
  //     </Navbar>
  //     {(macroPage === 'Resume') && 
  //     <Resume dataResume={stock.resume} conclusion={stock.conclusion} macroTable={stock.macroTable}/>}
  //     {(macroPage === 'GDP') && 
  //     <Gdp />}
  //     {(macroPage === 'Labor market') && 
  //     <LaborMarket />}
  //     {(macroPage === 'Production') && 
  //     <Production />}
  //     {(macroPage === 'Credit') && 
  //     <Credit />}
  //     {(macroPage === 'Income') && 
  //     <Income />}
  //     {(macroPage === 'Regulation') && 
  //     <Regulation />}
  //     {(macroPage === 'Stocks and sales') && 
  //     <StocksAndSales />}
  //   </div>
  // )
})
