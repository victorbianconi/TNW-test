import React, { Component } from 'react'
import '../stylesheets/mobile-perks.css';
import checkIcon from '../icons/checkIcon.svg'

const MobilePerks = props => {
        return (
            <div className="perks_grid_mobile">
                {props.ticketPerks.map((perk, index) => {
                    return(
                        <p key={index} className="perk_row_mobile">{perk.col1}{perk["col" + props.index] == "1" ? <img src={checkIcon}></img> : ""}</p>
                    )
                })}  
            </div>
        )
}

export default MobilePerks
