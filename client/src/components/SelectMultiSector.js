import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import Select from 'react-select';
import { fetchSector } from '../http/stockAPI';


const isMulti = true

const SelectMultiSector = observer(React.forwardRef((props, ref) => {
    const [currentChoses, setCurrentChoses] = useState([])

    const { stock } = useContext(Context)

    useEffect(() => {
        fetchSector(stock.selectedBusinessCycleEcons).then(res => {
            res.sort((a, b) => a.id > b.id ? 1 : -1)
            const data = res.map(el => ({
                value: el.id,
                label: el.name
            }))
        stock.setSectors(data)
        })
    },[stock, stock.selectedBusinessCycleEcons])
    
    useEffect(() => {
        setCurrentChoses([])
    }, [stock.selectedBusinessCycleEcons])

    useEffect(() => {
        stock.setSelectedSectors(currentChoses)
    })

    const getValue = () => {
        return currentChoses
            ? stock.sectors.filter(c => currentChoses.indexOf(c.value) >= 0)
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
            options={stock.sectors}
            isMulti={isMulti}
            placeholder={"Сектор"}
            />
        </div>
    )
}));

export default SelectMultiSector
