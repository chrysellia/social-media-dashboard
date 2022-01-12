import React from 'react'
import Header from '../Header/Header.component'
import Dashboard from '../Dashboard/Dashboard.component'
import Overview from '../Overview/Overview.component'
import './Page.style.scss'

const Page = () => {
    return (
        <div className="page-wrapper">
            <Header/>
            <Dashboard/>
            <Overview/>
        </div>
    )
}

export default Page
