import React, { Component } from 'react';
import '../stylesheets/ticket-panel.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Ticket from './Ticket';
import TicketBenefits from './TicketBenefits';




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

        useEffect(() => {
            console.log(tickets, ticketPerks)
        }, [tickets, ticketPerks])
    
        return (
            <div className="ticket_panel_container">
                <div className="ticket_panel_title_subtitle_block">
                    <h1>TNW Tickets</h1>
                    <h2>Please choose one of the following tickets!</h2>
                    {error && ( <p>Please try again.</p> )}
                </div>
                <div className="tickets_grid">
                    {ticketPerks && ( <Ticket perks={ticketPerks}></Ticket> )}
                    {tickets && (
                        tickets.map((ticket) => {
                            return (
                                <Ticket 
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
            </div>
        )
}

export default TicketPanel;
