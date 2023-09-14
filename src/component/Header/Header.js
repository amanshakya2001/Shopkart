import React from 'react';
import './header.css';
import HeaderLine from './header_line.png';

export default function Header() {
  return (
    <header>
        <div className="container">
            <div className="row">
                <h2>ShopKart</h2>
                <ul className="menu-right">
                    <li>WISHLIST (0)</li>
                    <li>BAG (0)</li>
                </ul>
            </div>
            <img src={HeaderLine} alt="line" />
            <ul className='menu-left'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>OUR PRODUCTS</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    </header>
  )
}
