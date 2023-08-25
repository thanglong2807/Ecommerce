import { v4 as uuidv4 } from "uuid"
import Home from "../Pages/Home"
import AboutUs from "../Pages/AboutUs"
import BlogDetail from "../Pages/BlogDetail"
import BlogList from "../Pages/BlogList"
import CustomerSupport from "../Pages/CustomerSupport"
import Dasboard from "../Pages/Dasboard"
import DasboardBrowsingHistory from "../Pages/DasboardBrowsingHistory"
import DasboardCardsAddress from "../Pages/DasboardCardsAddress"
import DasboardCardsAddressEditCard from "../Pages/DasboardCardsAddressEditCard"
import DasboardOrderDetail from "../Pages/DasboardOrderDetail"
import DasboardOrderDetailLeaveaRating from "../Pages/DasboardOrderDetailLeaveaRating"
import DasboardOrderHistory from "../Pages/DasboardOrderHistory"
import DasboardSetting from "../Pages/DasboardSetting"



export const publicRoute = [
    {
        id: uuidv4(),
        path: '/',
        component: Home
    },
    {
        id: uuidv4(),
        path: '/AboutUs',
        component: AboutUs
    },
    {
        id: uuidv4(),
        path: '/BlogDetail',
        component: BlogDetail
    },
    {
        id: uuidv4(),
        path: '/BlogList',
        component: BlogList
    },
    {
        id: uuidv4(),
        path: '/CustomerSupport',
        component: CustomerSupport
    },
    {
        id: uuidv4(),
        path: '/Dasboard',
        component: Dasboard
    },
    {
        id: uuidv4(),
        path: '/DasboardBrowsingHistory',
        component: DasboardBrowsingHistory
    },
    {
        id: uuidv4(),
        path: '/DasboardCardsAddress',
        component: DasboardCardsAddress
    },
    {
        id: uuidv4(),
        path: '/DasboardCardsAddressEditCard',
        component: DasboardCardsAddressEditCard
    },
    {
        id: uuidv4(),
        path: '/DasboardOrderDetail',
        component: DasboardOrderDetail
    },
    {
        id: uuidv4(),
        path: '/DasboardOrderDetailLeaveaRating',
        component: DasboardOrderDetailLeaveaRating
    },
    {
        id: uuidv4(),
        path: '/DasboardOrderHistory',
        component: DasboardOrderHistory
    },
    {
        id: uuidv4(),
        path: '/DasboardSetting',
        component: DasboardSetting
    },



]