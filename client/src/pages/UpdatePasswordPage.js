import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Form, Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import { updatePassword } from '../http/userAPI';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LOGIN_ROUTE } from '../utils/consts';


const UpdatePassword = observer(() => {
    const [password, setPassword] = useState('')
    const [exceptionMessage, setExceptionMessage] = useState('')
    const [showIcon, setShowIcon] = useState(false)
    const params = useParams()
    const [resolution, setResolution]  = useState(false)
    const navigate = useNavigate()


    const click = async () => {
        try {
            const response = await updatePassword(password, params.link)
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
                >Введите новый пароль</p>
                <Form className="d-flex flex-column" onKeyDown={enterKey}>
                    <div className='form-password'>
                            <Form.Control
                                className="form-auth"
                                placeholder="Введите новый пароль"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type={showIcon ? "text" : "password"}
                            />
                            <Button className='button-show-hide' onClick={() => {showIcon ? setShowIcon(false) : setShowIcon(true)}}>
                                    {showIcon ? <VisibilityIcon color='secondary' fontSize='medium'/>
                                        : <VisibilityOffIcon color='secondary' fontSize='medium'/>}</Button>
                    </div>
    
                    <Form className="d-flex justify-content-center mt-3 pl-3 pr-3">
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >Подтвердить
                        </Button>
                    </Form>
                        
                    <Form className="d-flex flex-column">
                        <p className='exeption-text'>{exceptionMessage}</p>
                    </Form>
                </Form>
                </>
            }
            {resolution &&
                <>
                <p className="m-auto mb-3 fw-bold text-center w-75"
                >Ваш пароль успешно изменен!</p>
                <Form className="d-flex justify-content-center mt-3 pl-3 pr-3">
                    <Button
                        variant={"outline-success"}
                        onClick={() => {
                                navigate(LOGIN_ROUTE)}}
                    >Вернуться на страницу авторизации
                    </Button>
                </Form>
                </>
            }
            </Card>
        </Container>
  )
})
export default UpdatePassword;
