import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import Select from 'react-select';
import { fetchCountry } from '../http/stockAPI';


const isMulti = true

const SelectMultiCountry = observer(React.forwardRef((props, ref) => {
    const [currentChoses, setCurrentChoses] = useState([])

    const { stock } = useContext(Context)

    useEffect(() => {
        fetchCountry().then(res => {
            res.sort((a, b) => a.id > b.id ? 1 : -1)
            const data = res.map(el => ({
                value: el.id,
                label: el.name
        }))
        stock.setCountrys(data)
        })
    },[stock])
    
    useEffect(() => {
        stock.setSelectedCountrys(currentChoses)
    })

    const getValue = () => {
        return currentChoses
            ? stock.countrys.filter(c => currentChoses.indexOf(c.value) >= 0)
            : []
    }
    
    const onChange = (newValue) => {
        setCurrentChoses(newValue.map(v => v.value)) 
    }

    return (
        <div>
            <Select classNamePrefix='react-select' ref={ref}
            className='react-select'
            onChange={onChange}
            value={getValue()}
            options={stock.countrys}
            isMulti={isMulti}
            placeholder={"Страна"}
            />
        </div>
    )
}));

export default SelectMultiCountry
