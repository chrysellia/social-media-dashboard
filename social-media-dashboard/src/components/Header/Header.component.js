import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header-component">
            <div className="header-wrapper">
                <div className="header-content">
                    <div className="left-side">
                        <div className="header-title">Social Media Dashboard</div>
                        <div className="header-description">Total Followers : 23,004</div>
                    </div>
                    <div className="right-side">
                        <div classNamme="toggle-color">
                            <div className="toggle-text">
                                <h1 style={{color:'hsl(228, 34%, 66%)'}}>Dark mode</h1>
                            </div>
                            <div className="toggle-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
