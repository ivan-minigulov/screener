import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, authRoutesBan, publicRoutes, subsRoutes} from "../routes";
import {ACCOUNT_ROUTE, LOGIN_ROUTE, SCRINNER_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)

    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={
                <Navigate to={SCRINNER_ROUTE}/>
            }
            />
            
        </Routes>
    );

    // return (
    //     <Routes>
    //         {user.isAuth && (!user.user.subs) && authRoutes.map(({path, Component}) =>
    //             <Route key={path} path={path} element={<Component/>} exact/>
    //         )}
    //         {(user.isAuth && (user.user.subs || user.user.role === 'ADMIN' || user.user.role === 'PARTNER')) 
    //         && subsRoutes.map(({path, Component}) =>
    //             <Route key={path} path={path} element={<Component/>} exact/>
    //         )}
    //         {user.isAuth && authRoutesBan.map(({path, Component}) => 
    //             <Route key={path} path={path} element={
    //                 <Navigate to={ACCOUNT_ROUTE}/>
    //             }/>
    //         )}
    //         {publicRoutes.map(({path, Component}) =>
    //             <Route key={path} path={path} element={<Component/>} exact/>
    //         )}
            
    //         <Route path='*' element={
    //             <Navigate to={(user.isAuth && (user.user.subs || user.user.role === 'ADMIN' || user.user.role === 'PARTNER')) 
    //                             ? SCRINNER_ROUTE
    //                             : (user.isAuth && (!user.user.subs)) 
    //                             ? ACCOUNT_ROUTE 
    //                             : LOGIN_ROUTE}/>
    //         }
    //         />
            
    //     </Routes>
    // );
});

export default AppRouter;