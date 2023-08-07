import React, { useState, useEffect, useContext } from 'react'
import {observer} from "mobx-react-lite";
import { Context } from '../../index';
import { Form, InputGroup } from 'react-bootstrap';


const InputValueR = observer(() => {
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
        stock.setSelectedValueRFrom(value1)
        stock.setSelectedValueRTo(value2)
    })

    return (
        <div>
            <InputGroup size='sm' className="inputGroup">
                <InputGroup.Text id="basic-addon1">Value Rating от</InputGroup.Text>
                <Form.Control onChange={onChange1} type='number' id='input-form-control67'
                aria-label="Value Rating от" aria-describedby="basic-addon1"/>
                <InputGroup.Text id="basic-addon2">до</InputGroup.Text>
                <Form.Control onChange={onChange2} type='number' id='input-form-control68'
                aria-label="Value Rating до" aria-describedby="basic-addon1"/>
                
            </InputGroup>
        </div>
    )
});

export default InputValueR
