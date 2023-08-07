import React, { useState, useEffect, useContext } from 'react'
import {observer} from "mobx-react-lite";
import Select from 'react-select';
import { Context } from '../index';
import ButtonSort from './ButtonSort';


const SelectSingleSort = observer(({options}) => {
    const [currentChoses, setCurrentChoses] = useState(options[0].value)
    const { stock } = useContext(Context)

    const getValue = () => {
        return currentChoses
            ? options.find(c => c.value === currentChoses)
            : ''
    }
    const onChange = (newValue) => {
        setCurrentChoses(newValue.value)
    }
    useEffect(() => {
        stock.setSelectedSortName(currentChoses)
    })

    return (
        <div>
            <label className='react-select-label'>Сортировка по</label>
            <Select classNamePrefix='react-select' id='react-select-sort'
            className='react-select'
            onChange={onChange}
            value={getValue()}
            options={options}
            // menuIsOpen='true'
            />
            <ButtonSort />
        </div>
    )
});

export default SelectSingleSort
