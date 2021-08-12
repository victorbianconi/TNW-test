import React, { Component } from 'react';
import '../stylesheets/ticket-panel.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Ticket from './Ticket';
import Perks from './Perks';
import TNWLogo from '../images/tnw-logo.svg';


const TicketPanel = (props) => {
        const [tickets, setTickets] = useState()
        const [ticketPerks, setTicketPerks] = useState()
        const [error, setError] = useState()
        
        useEffect(() => {
            sendTicketsRequest()
        }, [])

        const sendTicketsRequest = async() => {
            let response;
            try {
                response = await fetch("https://next.tnw-staging.com/next-api/tickets.json")
                .then(res => res.json())
                .then(data => {
                    setTickets(data.data[0].tickets);
                    setTicketPerks(data.data[0].ticket_perks)
                });
            } catch(err) {
                setError(true);
                throw err;
            }
        }

        return (
            <div className="ticket_panel_container">
                <div className="ticket_panel_title_subtitle_block">
                    <img style={{maxWidth: '12rem'}} src={TNWLogo}></img>
                    <h1>Tickets</h1>
                    <h2>Please choose one of the following tickets - Developed by <a target="_blank" href="https://www.victorbianconi.dev">www.victorbianconi.dev</a></h2>
                    {error && ( <p style={{color:'red', fontSize:'2rem'}}>Please try again.</p> )}
                </div>
                <div className="tickets_grid">
                 <div className="tickets_container">
                    <Ticket 
                    isEmpty
                    ></Ticket>
                    {!tickets && (
                        <div className="tickets_loading_container">
                            <div className="ticket_loading"></div>
                            <div className="ticket_loading"></div>
                            <div className="ticket_loading"></div>
                            <div className="ticket_loading"></div>
                            <div className="ticket_loading"></div>
                        </div>
                    )}
                    {tickets && (
                            tickets.map((ticket) => {
                                return (
                                    <Ticket 
                                    highlighted={ticket.ticketHighlighted}
                                    title={ticket.ticketName} 
                                    description={ticket.ticketDescription} 
                                    strikeThroughPrice={ticket.strikethroughPrice}
                                    actualPrice={ticket.ticketActualPrice} 
                                    buttonLabel={ticket.ticketButtonLabel}
                                    buttonLink={ticket.ticketButtonLink}
                                    discount={ticket.ticketDiscount}
                                    ></Ticket>
                                )
                            })
                    )}
                 </div>
                    {ticketPerks && (
                                    <Perks ticketPerks={ticketPerks}></Perks>
                    )}
                 <div className="tickets_container">
                 <Ticket 
                    isEmpty
                  ></Ticket>
                 {tickets && (
                            tickets.map((ticket) => {
                                return (
                                    <Ticket
                                    bottomTicket 
                                    title={ticket.ticketName} 
                                    description={ticket.ticketDescription} 
                                    strikeThroughPrice={ticket.strikethroughPrice}
                                    actualPrice={ticket.ticketActualPrice} 
                                    buttonLabel={ticket.ticketButtonLabel}
                                    buttonLink={ticket.ticketButtonLink}
                                    ></Ticket>
                                )
                            })
                 )}
                 </div>
               </div>
            </div>
        )
}

export default TicketPanel;
