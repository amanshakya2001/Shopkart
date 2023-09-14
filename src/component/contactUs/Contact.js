import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section id="contactUs">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h4>Newslleter</h4>
                    <p>Get news about articles and updates</p>
                    <p>in your inbox.</p>
                </div>
                <div className="col-6">
                    <form action="#">
                        <input type="text" placeholder='NAME' />
                        <input type="text" placeholder='EMAIL' />
                        <input type="text" placeholder='MESSAGE' />
                    </form>
                </div>
            </div>
            <h1>GET</h1>
            <h1>IN TOUCH</h1>
            <div className="btn-orange">
                SEND
            </div>
        </div>
    </section>
  )
}
