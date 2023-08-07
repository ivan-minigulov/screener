import React, { useContext } from 'react'
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';
import { observer } from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom'
import {STOCK_ROUTE} from "../utils/consts";

export default observer (function List({ list }) {
  const { stock } = useContext(Context)
  const navigate = useNavigate()

  const onClick = (event) => {
    stock.setOneStock(event.target.textContent)
    stock.setSelectedSearchTicker('')
    stock.setListTickers([])
    document.getElementById("mysearch").value = "";
    navigate(STOCK_ROUTE)
  }

  return (
    <div className='div-list'>
        {(Boolean(list) && list.length > 0) && (
            <ListGroup className={list.length > 4 ? 'list-scroll' : 'list'}>{Object.values(list).map((obj) => (
                Object.values(obj).map((value, index) => (
                    <ListGroup.Item className='list-item' key={index} action variant="light" onClick={onClick}>{value}</ListGroup.Item>
                ))
            ))}
            </ListGroup>
            /* <ul>{Object.values(list).map((obj) => (
                Object.values(obj).map((value, index) => (
                    <li key={index}>{value}</li>
                ))
            ))}
            </ul> */
        )}
    </div>
  )
})
