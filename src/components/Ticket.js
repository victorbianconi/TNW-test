import React, { Component } from 'react'
import '../stylesheets/ticket.css'

const Ticket = (props) => {
             if(!props.isEmpty){
                 return (
                <div id={props.highlighted ? "ticket_highlighted" : ""} className="ticket">
                {props.highlighted && (
                <div className="ticket_popular_choice">
                   <p>POPULAR CHOICE</p>
                </div>
                )}
                    <div className="ticket_details">
                        <h1 id={props.bottomTicket ? "invisible" : ""}>{props.title}</h1>
                        <h2 id={props.bottomTicket ? "invisible" : ""}>{props.description}</h2>
                        <div className="ticket_prices_container">
                            {props.strikeThroughPrice && (<p id="ticket_strikethrough_price">€ {props.strikeThroughPrice}</p>)}
                            <p className="ticket_price" id={props.strikeThroughPrice ? "ticket_price_offer" : ""}>€ {props.actualPrice}</p>
                        </div>
                        <p id="ticket_vat">ex. 21% VAT</p>
                        <a href={props.buttonLink} className="register_now_btn">{props.buttonLabel}</a>
                    </div>   
                </div>
             )} else {
                 return(
                    <div className="ticket">
                        <div className="ticket_details">   
                        </div>   
                    </div>
                 )
             }
         
}

export default Ticket;
