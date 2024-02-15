import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo_01_AI_png.png';
import { LiaSearchSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { BiSolidUserCircle } from "react-icons/bi";

const Header = () => {
    // const [inputClicked, setInputClicked] = useState(false);
    const [searchText, setSearchText] = useState('')
    const searchHandler = (e) => {
        setSearchText(e.target.value);
        console.log('hh');
        // setInputClicked(true);
    }
    const clearHandle = () => {
        setSearchText('')

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
                    <form action="">
                        <div className="searchPart">
                            <div className="searchField">
                                <input
                                    type="text"
                                    className='searchBar'
                                    id='searchBar'
                                    name='search'
                                    placeholder='Search Product...' autoComplete='off'
                                    onChange={searchHandler}
                                    value={searchText}
                                />
                                {
                                    searchText && (
                                        <button className='crossBtn' onClick={clearHandle}><RxCross2 size={20} color='black' /></button>

                                    )
                                }



                            </div>
                            <div className="searchBtn">
                                <button className='btnSearchHeader'><LiaSearchSolid size={20} color='white' /></button>
                            </div>
                        </div>
                    </form>
                    <div className="activitiesPart">
                        <div className="wishlistHeader">
                            <a href="/wishlist">
                                <div className="wishIconSec">
                                    <FaHeart color='green' size={24} />
                                    <span className='wishlistItem'>0</span>
                                </div>
                                <p className='wishlistHeaderTitle'>Wishlist</p>
                            </a>
                        </div>
                        <div className="cartHeader">
                            <a href="/cart">
                                <div className="wishlistHeader">
                                    <div className="wishIconSec">
                                        <IoCart color='green' size={24} />
                                        <span className='wishlistItem'>0</span>
                                    </div>
                                    <p className='cartHeaderTitle'>Cart</p>
                                </div>
                            </a>

                        </div>
                        <div className="profileHeader">
                            {/* <div className="wishlistHeader">
                                <div className="wishIconSec">
                                    <BiSolidUserCircle color='green' size={45} />
                                    <span className='wishlistItem'>0</span>
                                </div>
                                <p className='profileHeaderTitle'>Profile</p>
                            </div> */}
                            <div class="dropdown">
                                <div className="wishlistHeader">
                                    <a href="/profile">
                                    <div className="wishIconSec">
                                        <BiSolidUserCircle color='green' size={24} />
                                        <span className='wishlistItem'>0</span>
                                    </div>
                                    <p className='profileHeaderTitle'>Profile</p>
                                    </a>
                                </div>
                                <div class="dropdown-content">
                                    <a href="/login">
                                        <p className='loginHeader'>Login</p>
                                    </a>
                                    <a href="/register">
                                        <p className='loginHeader'>Register</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Header;