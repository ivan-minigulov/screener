import About from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import Auth from "./pages/AuthPage";
import MacroPage from "./pages/MacroPage";
import Scrinner from "./pages/Scrinner";
import StockPage from "./pages/StockPage";
import {ABOUT_ROUTE, ACCOUNT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MACROPAGE_ROUTE, SCRINNER_ROUTE, STOCK_ROUTE, SUPPORT_ROUTE, PASSWORD_ROUTE, SENTLINKONEMAIL_ROUTE} from "./utils/consts";
import Support from "./pages/Support";
import RegistrationPage from "./pages/RegistrationPage";
import SubmitEmailInstructionUpdatePassword from "./pages/SubmitEmailInstructionUpdatePassword";
import UpdatePassword from "./pages/UpdatePasswordPage";

export const authRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: ABOUT_ROUTE + '/:id',
        Component: About
    },
    {
        path: ACCOUNT_ROUTE,
        Component: AccountPage
    },
]

export const subsRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: ABOUT_ROUTE + '/:id',
        Component: About
    },
    {
        path: ACCOUNT_ROUTE,
        Component: AccountPage
    },
    {
        path: MACROPAGE_ROUTE,
        Component: MacroPage
    },
    {
        path: SCRINNER_ROUTE,
        Component: Scrinner
    },
    {
        path: STOCK_ROUTE,
        Component: StockPage
    },
    {
        path: STOCK_ROUTE + '/:ticker',
        Component: StockPage
    },
    {
        path: MACROPAGE_ROUTE + '/:id',
        Component: MacroPage
    },
]

export const publicRoutes = [  
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: ABOUT_ROUTE + '/:id',
        Component: About
    },
    // {
    //     path: ACCOUNT_ROUTE,
    //     Component: AccountPage
    // },
    {
        path: MACROPAGE_ROUTE,
        Component: MacroPage
    },
    {
        path: SCRINNER_ROUTE,
        Component: Scrinner
    },
    {
        path: STOCK_ROUTE,
        Component: StockPage
    },
    {
        path: STOCK_ROUTE + '/:ticker',
        Component: StockPage
    },
    {
        path: MACROPAGE_ROUTE + '/:id',
        Component: MacroPage
    },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path: REGISTRATION_ROUTE,
    //     Component: RegistrationPage
    // },
    // {
    //     path: SUPPORT_ROUTE,
    //     Component: Support
    // },
    // {
    //     path: SENTLINKONEMAIL_ROUTE,
    //     Component: SubmitEmailInstructionUpdatePassword
    // },
    // {
    //     path: PASSWORD_ROUTE + '/:link',
    //     Component: UpdatePassword
    // },
]

export const authRoutesBan = [  
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: RegistrationPage
    },
    {
        path: SENTLINKONEMAIL_ROUTE,
        Component: SubmitEmailInstructionUpdatePassword
    },
    {
        path: PASSWORD_ROUTE + '/:link',
        Component: UpdatePassword
    },
]