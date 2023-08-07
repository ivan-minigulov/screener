import React, { useState, useEffect, useContext } from 'react'
import {observer} from "mobx-react-lite";
import { Context } from '../../index';
import { Form, InputGroup } from 'react-bootstrap';


const InputProfitR = observer(() => {
    const [value1, setValue1] = useState()
    const [value2, setValue2] = useState()
    const { stock } = useContext(Context)

    const onChange1 = (event) => {
        setValue1(event.target.value)
    }
    const onChange2 = (event) => {
        setValue2(event.target.value)
    }
    useEffect(() => {
        stock.setSelectedProfitRFrom(value1)
        stock.setSelectedProfitRTo(value2)
    })

    return (
        <div>
            <InputGroup size='sm' className="inputGroup">
                <InputGroup.Text id="basic-addon1">Profit Rating от</InputGroup.Text>
                <Form.Control onChange={onChange1} type='number' id='input-form-control55'
                aria-label="Profit Rating от" aria-describedby="basic-addon1"/>
                <InputGroup.Text id="basic-addon2">до</InputGroup.Text>
                <Form.Control onChange={onChange2} type='number' id='input-form-control56'
                aria-label="Profit Rating до" aria-describedby="basic-addon1"/>
                
            </InputGroup>
        </div>
    )
});

export default InputProfitR
