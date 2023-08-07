import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Form, Card} from "react-bootstrap";
import {Context} from "../index";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
import {ACCOUNT_ROUTE, PASSWORD_ROUTE, REGISTRATION_ROUTE, SCRINNER_ROUTE, SENTLINKONEMAIL_ROUTE} from "../utils/consts";
import { login } from '../http/userAPI';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const Auth = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [exceptionMessage, setExceptionMessage] = useState('')
    const navigate = useNavigate()
    const [showIcon, setShowIcon] = useState(false)

    const click = async () => {
        try {
            const userData = await login(email, password)
            if (userData) {
                user.setUser({...userData})
                user.setIsAuth(true)
                userData.subs
                ? navigate(SCRINNER_ROUTE)
                : navigate(ACCOUNT_ROUTE)
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
                <h2 className="m-auto mb-3">Авторизация</h2>
                <Form className="d-flex flex-column" onKeyDown={enterKey}>
                    <Form.Control
                        className="form-auth"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className='form-password'>
                        <Form.Control
                            className="form-auth"
                            placeholder="Введите ваш пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type={showIcon ? "text" : "password"}
                        />
                        <Button className='button-show-hide' onClick={() => {showIcon ? setShowIcon(false) : setShowIcon(true)}}>
                                {showIcon ? <VisibilityIcon color='secondary' fontSize='medium'/>
                                    : <VisibilityOffIcon color='secondary' fontSize='medium'/>}</Button>
                    </div>
                    
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <div>
                            <Button className='link-button-violet' onClick={() => {
                                navigate(REGISTRATION_ROUTE)}}
                                >Нет аккаунта? Зарегистрируйся!</Button>
                            <Button className='link-button-violet' onClick={() => {
                                navigate(SENTLINKONEMAIL_ROUTE)
                                }}
                                >Забыли пароль?</Button>
                        </div>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >Войти
                        </Button>
                    </Form>
                    
                    <Form className="d-flex flex-column">
                        <p className='exeption-text'>{exceptionMessage}</p>
                    </Form>

                </Form>
            </Card>
        </Container>
  )
})
export default Auth;

// import React, {useContext, useState} from 'react';
// import {Container, Form, Card} from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import {NavLink, useLocation, useNavigate} from "react-router-dom";
// import {ACCOUNT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SCRINNER_ROUTE} from "../utils/consts";
// import {login, registration} from "../http/userAPI";
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";

// const Auth = observer(() => {
//     const {user} = useContext(Context)
//     const location = useLocation()
//     const navigate = useNavigate()
//     const isLogin = location.pathname === LOGIN_ROUTE
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const click = async () => {
//         try {
//             let data;
//             if (isLogin) {
//                 data = await login(email, password);
//             } else {
//                 // eslint-disable-next-line no-unused-vars
//                 data = await registration(email, password);
//             }
//             user.setUser(user)
//             user.setIsAuth(true)
//             navigate.push(ACCOUNT_ROUTE)
//         } catch (e) {
//             alert(e.response.data.message)
//         }

//     }

//     return (
//         <Container
//             className="d-flex justify-content-center align-items-center"
//             style={{height: window.innerHeight - 54}}
//         >
//             <Card style={{width: 600}} className="p-5">
//                 <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
//                 <Form className="d-flex flex-column">
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш email..."
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш пароль..."
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         type="password"
//                     />
//                     <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
//                         {isLogin ?
//                             <div>
//                                 Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
//                             </div>
//                             :
//                             <div>
//                                 Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
//                             </div>
//                         }
//                         <Button
//                             variant={"outline-success"}
//                             onClick={click}
//                         >
//                             {isLogin ? 'Войти' : 'Регистрация'}
//                         </Button>
//                     </Form>

//                 </Form>
//             </Card>
//         </Container>
//     );
// });

// export default Auth;
