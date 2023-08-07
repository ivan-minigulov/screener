import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Form, Card} from "react-bootstrap";
import {Context} from "../index";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import { submitEmailInstruction } from '../http/userAPI';



const SubmitEmailInstructionUpdatePassword = observer(() => {
    const [email, setEmail] = useState('')
    const [resolution, setResolution] = useState(false)
    const [exceptionMessage, setExceptionMessage] = useState('')

    const click = async () => {
        try {
            const response = await submitEmailInstruction(email)
            if (response) {
                setResolution(true)
            }
        } catch(e) {
            setExceptionMessage(e.response.data.message)
            // console.log(e.response.data.message)
            // console.log(e)

        }
        
    }
    const enterKey = (event) => {
        if (event.key === 'Enter' && event.target.value) {
          click()
        }
      }

    return (
    <Container
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 210}}
        >
            <Card style={{width: 600}} className="p-5">
            {!resolution &&
            <>
                <p className="m-auto mb-3 fw-bold text-center w-75"
                >На Ваш email будет отправлена ссылка для восстановления пароля</p>
                <Form className="d-flex flex-column" onKeyDown={enterKey}>
                    <Form.Control
                        className="form-auth"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    
                    <Form className="d-flex justify-content-center mt-3 pl-3 pr-3">
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >Отправить
                        </Button>
                    </Form>
                    
                    <Form className="d-flex flex-column">
                        <p className='exeption-text'>{exceptionMessage}</p>
                    </Form>

                </Form>
            </> }
            {resolution &&
            <>
                <p className="m-auto mb-3 fw-bold text-center w-75"
                    >На Ваш email отправлена ссылка для восстановления пароля. Проверьте почту.</p>
                <Form className="d-flex flex-column">
                            <p className='exeption-text'>{exceptionMessage}</p>
                </Form>
            </>}
            </Card>
        </Container>
  )
})
export default SubmitEmailInstructionUpdatePassword;
