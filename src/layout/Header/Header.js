import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo_01_AI_png.png';
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [inputClicked, setInputClicked] = useState(false);
    const searchHandler = () =>{
        console.log('hh');
        setInputClicked(true);
    }
    return (
        <div className='headerMain'>
            <div className="subHeaderMain">
                <div className="headerContainer">
                    <div className="logoPart">
                        <div className="logo">
                            <a href="/online-bd-shopping">
                                <img src={logo} alt="not found" />
                            </a>
                        </div>
                    </div>
                    <div className="searchPart">
                        <div className="searchField">
                            <input
                                type="text"
                                className='searchBar'
                                id='searchBar'
                                name='search'
                                placeholder='Search Product...' autoComplete='off'
                                onClick={searchHandler}
                            />
                            {
                                inputClicked && (
                                    <button className='crossBtn'><RxCross2 size={20} /></button>

                                )
                            }
                           


                        </div>
                        <div className="searchBtn">
                            <button className='btnSearchHeader'><LiaSearchSolid size={40} color='white' /></button>


                        </div>
                    </div>
                    <div className="activitiesPart">

                    </div>
                </div>

            </div>


        </div>
    );
};

export default Header;