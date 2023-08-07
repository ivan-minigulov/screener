import React, { useState, useEffect, useContext } from 'react'
import {observer} from "mobx-react-lite";
import { Context } from '../../index';
import { Form, InputGroup } from 'react-bootstrap';


const InputLastGrowthEps = observer(() => {
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
        stock.setSelectedLastGrowthEpsFrom(value1)
        stock.setSelectedLastGrowthEpsTo(value2)
    })

    return (
        <div>
            <InputGroup size='sm' className="inputGroup">
                <InputGroup.Text id="basic-addon1">Рост earnings за 3 года от</InputGroup.Text>
                <Form.Control onChange={onChange1} type='number' id='input-form-control37'
                aria-label="Средний рост EPS за последние 3 года от" aria-describedby="basic-addon1"/>
                <InputGroup.Text id="basic-addon2">до</InputGroup.Text>
                <Form.Control onChange={onChange2} type='number' id='input-form-control38'
                aria-label="Средний рост EPS за последние 3 года до" aria-describedby="basic-addon1"/>
                
            </InputGroup>
        </div>
    )
});

export default InputLastGrowthEps
