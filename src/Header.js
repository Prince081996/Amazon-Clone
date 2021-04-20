import React from "react";
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import "./Header.css";
import { useStateValue } from "./StateProvider";

function Header() {

  const [ { basket } ] = useStateValue()

  return (
    <nav className="header">
      {/* logo on left */}
      <Link to='/'>
        <img
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
        />
        </Link>
        {/* search box */}
        <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>
        {/* 3 links on right */}
        <div className="header__nav">
            <Link to='/login' className="header__link">
                <div className="header__option">
                <span className="header__optionLineOne">Hello Prince</span>
                <span  className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>
            <Link to='/' className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>    
            </Link>
            <Link to='/' className="header__link">
            <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>    
            </Link>
           <Link to='/checkout' className="header__link">
           <div className="header__optionBasket">
                {/* Basket Icon */}
                <ShoppingBasketIcon />
                {/* Number */}
                <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
           </div>
           </Link> 
        </div>
        {/* Basket */}
    </nav>
  );
}

export default Header;
