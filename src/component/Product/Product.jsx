import React from 'react';
import './product.css';
import Line from './line.png';

export default function Product() {
  return (
    <section id="product">
        <div className="container">
            <div className="row">
                 <h1>New products</h1>
                 <div className="slider-btn">
                    <svg width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z" fill="#161615"/>
                    </svg>
                    <svg width="56" height="6" viewBox="0 0 56 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z" fill="#161615"/>
                    </svg>
                 </div>
            </div>
            <img src={Line} alt="line" />
        </div>
    </section>
  )
}
