import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../index';
import {observer} from "mobx-react-lite";
import { Button } from 'react-bootstrap';

const ButtonSort = observer(() => {
    const { stock } = useContext(Context)
    const [checked, setChecked] = useState('DESC')
    const [className1, setClassName1] = useState('passiveLabel')
    const [className2, setClassName2] = useState('activeLabel')
    const onClick1 = () => {
        setChecked('ASC')
        setClassName1('activeLabel')
        setClassName2('passiveLabel')
    };
    const onClick2 = () => {
        setChecked('DESC')
        setClassName2('activeLabel')
        setClassName1('passiveLabel')
    };
    useEffect(() => {
        stock.setSelectedSort(checked)
    })

    return (
        <div className='buttonSort'>
            <Button
            onClick={onClick1}
            className={className1}
            >по возростанию</Button>
            <Button
            onClick={onClick2}
            className={className2}
            >по убыванию</Button>
        </div>
    )
});

export default ButtonSort;