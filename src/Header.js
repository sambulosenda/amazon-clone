import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {
    const[ {basket}, dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon clone"/>
            </Link>

            {/* {Search } */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header_option">
                        <span class="header_optionLineOne">Hello,</span>
                        <span class="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header_option">
                        <span class="header_optionLineOne">Returns</span>
                        <span class="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header_option">
                        <span class="header_optionLineOne">Your</span>
                        <span class="header_optionLineTwo">Prime</span>
                    </div>
                </Link>


                {/*  */}
                <Link to="/checkout" className="header-link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
    <span className="header__optionLineTwo busketcount">
    {basket?.length} 
    </span>
                    </div>
                </Link>


            </div>


        </div>
    )
}

export default Header
