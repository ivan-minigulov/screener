import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index';
import {useNavigate} from 'react-router-dom'
import {STOCK_ROUTE} from "../utils/consts";

export default observer(function SearchBox() {
    const [search, setSearch] = useState('')
    const { stock } = useContext(Context)
    const navigate = useNavigate()

    const onChange = (e) => {
      setSearch(e.target.value.toUpperCase())
    }
    useEffect(() => {
        stock.setSelectedSearchTicker(search)
    }, [stock, search])

    const clear = () => {
      document.getElementById('mysearch').value=''
      setSearch('')
      stock.setListTickers([])
    }

    const enterKey = (event) => {
      if (event.key === 'Enter' && event.target.value) {
        stock.setOneStock(search)
        clear()
        navigate(STOCK_ROUTE)
      }
    }
  
    return (
      <div className='search-box'>
        <div className='search'>
          <div className='icon'></div>
          <div className='input'>
            <input id='mysearch'
              type='text'
              placeholder='Введите тикер'
              className='search__input'
              onChange={onChange}
              onKeyDown={enterKey}
              autocomplete="off"
            />
          </div>
          <span className='clear' onClick={clear}></span>
        </div>
      </div>
    )
})
