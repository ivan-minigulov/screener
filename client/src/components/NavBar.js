import React, {useContext} from 'react';
// import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {ABOUT_ROUTE, ACCOUNT_ROUTE, LOGIN_ROUTE, MACROPAGE_ROUTE, REGISTRATION_ROUTE, SCRINNER_ROUTE, STOCK_ROUTE, SUPPORT_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';

const NavBar = observer(() => {
    // const {user} = useContext(Context)
    // const { stock } = useContext(Context)

    const navigate = useNavigate()

    return (
        <Navbar bg="dark" variant="dark" className='navbar-app'>
            <Container>
                <Navbar.Brand as={Link} style={{color:'white'}} to={SCRINNER_ROUTE}>IM Screener</Navbar.Brand>

                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Nav.Link
                            variant={"outline-light"}
                            onClick={() => navigate(MACROPAGE_ROUTE + '/resume')}
                        >
                            Макроанализ
                            <span></span>
                        </Nav.Link>
                        
                        <Nav.Link
                            variant={"outline-light"}
                            onClick={() => {
                                navigate(STOCK_ROUTE)
                                // stock.setOneStock(undefined)
                                }}
                        >
                            Микроанализ
                        </Nav.Link>
                        <Nav.Link
                            variant={"outline-light"}
                            onClick={() => navigate(ABOUT_ROUTE + '/functional')}
                        >
                            О сайте
                        </Nav.Link>
                        
                    </Nav>
            </Container>
        </Navbar>

    );

    // return (
    //     <Navbar bg="dark" variant="dark" className='navbar-app'>
    //         <Container>
    //             <Navbar.Brand as={Link} style={{color:'white'}} to={SCRINNER_ROUTE}>IM Screener</Navbar.Brand>
    //             {(user.isAuth && (user.user.subs || user.user.role === 'ADMIN' || user.user.role === 'PARTNER')) ?
    //                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(MACROPAGE_ROUTE + '/resume')}
    //                     >
    //                         Макроанализ
    //                         <span></span>
    //                     </Nav.Link>
                        
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => {
    //                             navigate(STOCK_ROUTE)
    //                             // stock.setOneStock(undefined)
    //                             }}
    //                     >
    //                         Микроанализ
    //                     </Nav.Link>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(ABOUT_ROUTE + '/functional')}
    //                     >
    //                         О сайте
    //                     </Nav.Link>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(ACCOUNT_ROUTE)}
    //                     >
    //                         Личный кабинет
    //                     </Nav.Link>
                        
    //                 </Nav>
    //                 : (user.isAuth && (!user.user.subs && user.user.role !== 'ADMIN' && user.user.role !== 'PARTNER')) ?
    //                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(ABOUT_ROUTE + '/functional')}
    //                     >
    //                         О сайте
    //                     </Nav.Link>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(ACCOUNT_ROUTE)}
    //                     >
    //                         Личный кабинет
    //                     </Nav.Link>
                        
    //                 </Nav>
    //                 :
    //                 <Nav className="ml-auto" style={{color: 'white'}}>
    //                     <Nav.Link
    //                         variant={"outline-light"}
    //                         onClick={() => navigate(ABOUT_ROUTE + '/functional')}
    //                     >
    //                         О сайте
    //                     </Nav.Link>
    //                     <Nav.Link variant={"outline-light"} onClick={() => {
    //                         navigate(LOGIN_ROUTE)}}
    //                         >Авторизация</Nav.Link>
    //                     <Nav.Link variant={"outline-light"} onClick={() => {
    //                         navigate(REGISTRATION_ROUTE)}}
    //                         >Регистрация</Nav.Link>
    //                 </Nav>
    //             }
    //         </Container>
    //     </Navbar>

    // );
});

export default NavBar;