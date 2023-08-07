import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import Select from 'react-select';
import { fetchIndustry } from '../http/stockAPI';


const isMulti = true

const SelectMultiIndustry = observer(React.forwardRef((props, ref) => {
    const [currentChoses, setCurrentChoses] = useState([])

    const { stock } = useContext(Context)

    useEffect(() => {
        fetchIndustry(stock.selectedSectors).then(res => {
            res.sort((a, b) => a.id > b.id ? 1 : -1)
            const data = res.map(el => ({
                value: el.id,
                label: el.name
            }))
        stock.setIndustrys(data)
        })
    },[stock, stock.selectedSectors])

    useEffect(() => {
        setCurrentChoses([])
    }, [stock.selectedSectors])
    
    useEffect(() => {
        stock.setSelectedIndustrys(currentChoses)
    })

    const getValue = () => {
        return currentChoses
            ? stock.industrys.filter(c => currentChoses.indexOf(c.value) >= 0)
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
            options={stock.industrys}
            isMulti={isMulti}
            placeholder={"Индустрия"}
            />
        </div>
    )
}));

export default SelectMultiIndustry
