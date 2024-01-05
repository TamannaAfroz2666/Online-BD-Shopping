import React from 'react';
import './TopHeader.css';
import { FiPhone } from "react-icons/fi";

const TopHeader = () => {
    return (
        <div className='topHeader'>
            <div className="subTopHeader">
                <div className="topHeaderContent">
                    <div className="phoneInfo">
                        <a href="tel:01323467590">
                            <p className='phoneStatus'><FiPhone color='gray' size={20} /> Phone: 01323467590</p>
                        </a>

                    </div>
                    <div className="contactInfo">
                        <a href="facebook.com">
                            <p className='groupTitle'>FB group <span className='breakPoint'>
                                |
                            </span></p>
                        </a>
                        <a href="facebook.com">
                            <p className='groupTitle'>FB page <span className='breakPoint'>
                                |
                            </span></p>
                        </a>
                        <a href="playNow">
                            <p className='groupTitle'>play now </p>
                        </a>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default TopHeader;