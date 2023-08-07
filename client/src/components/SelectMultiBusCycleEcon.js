import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import Select from 'react-select';
import { fetchBusCycleEcon } from '../http/stockAPI';


const isMulti = true

const SelectMultiBusCycleEcon = observer(React.forwardRef((props, ref) => {
    const [currentChoses, setCurrentChoses] = useState([])

    const { stock } = useContext(Context)

    useEffect(() => {
        fetchBusCycleEcon().then(res => {
            res.sort((a, b) => a.id > b.id ? 1 : -1)
            const data = res.map(el => ({
                value: el.id,
                label: el.name
            }))
        stock.setBusinessCycleEcons(data)
        })
    },[stock])
    
    useEffect(() => {
        stock.setSelectedBusinessCycleEcons(currentChoses)
    })

    const getValue = () => {
        return currentChoses
            ? stock.businessCycleEcons.filter(c => currentChoses.indexOf(c.value) >= 0)
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
            options={stock.businessCycleEcons}
            isMulti={isMulti}
            placeholder={"Бизнес-цикл экономики"}
            />
        </div>
    )
}));

export default SelectMultiBusCycleEcon
