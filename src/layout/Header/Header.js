import React from 'react';
import './Header.css';
import img from '../../assets/Images/logoTop.jpg';
import logo from '../../assets/logo_01_AI_png.png';

const Header = () => {
    return (
        <div className='headerMain'>
            <div className="subHeaderMain">
                <div className="headerContainer">
                    <div className="logoPart">
                        <div className="logo">
                            <img src={logo} alt="not found" />
                        </div>
                    </div>
                    <div className="searchPart">

                    </div>
                    <div className="activitiesPart">

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Header;