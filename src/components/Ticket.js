import React, { Component } from 'react'
import '../stylesheets/ticket.css'

const Ticket = (props) => {
        if(props.perks)
         return (
                <div className="ticket_perks">
                <div className="ticket_details">
                </div>
                <div className="ticket_perks_container">
                    <div id="ticket_perk_grey" className="ticket_perk">
                        <p>{props.perks[0].perk}</p>
                    </div>
                    <div className="ticket_perk">
                        <p>{props.perks[1].perk}</p>
                    </div>
                    <div id="ticket_perk_grey" className="ticket_perk">
                        <p>{props.perks[2].perk}</p>
                    </div>                  
                    <div className="ticket_perk">
                        <p>{props.perks[3].perk}</p>
                    </div>
                    <div id="ticket_perk_grey" className="ticket_perk">
                        <p>{props.perks[4].perk}</p>
                    </div>           
                    <div className="ticket_perk"></div>
                </div>
               </div>
         )
         else {
             return (
                <div className="ticket">
                    <div className="ticket_details">
                        <h1>{props.title}</h1>
                        <h2>{props.description}</h2>
                        <div className="ticket_prices_container">
                            {props.strikeThroughPrice && (<p id="ticket_strikethrough_price">€ {props.strikeThroughPrice}</p>)}
                            <p className="ticket_price" id={props.strikeThroughPrice ? "ticket_price_offer" : ""}>€ {props.actualPrice}</p>
                        </div>
                        <p id="ticket_vat">ex. 21% VAT</p>
                        <a href={props.buttonLink} className="register_now_btn">{props.buttonLabel}</a>
                    </div>
                    <div className="ticket_perks_container">
                    <div id="ticket_perk_grey" className="ticket_perk">
                    <p></p>
                    </div>
                    <div className="ticket_perk"></div>
                    <div id="ticket_perk_grey" className="ticket_perk">
                    <p></p>
                    </div>                  
                    <div className="ticket_perk"></div>
                    <div id="ticket_perk_grey" className="ticket_perk">
                        <p></p>
                    </div>           
                    <div className="ticket_perk"></div>
                </div>
                </div>
             )
         }
}

export default Ticket;
