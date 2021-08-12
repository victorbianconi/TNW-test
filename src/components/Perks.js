import React, { Component } from 'react'
import '../stylesheets/perks.css';
import checkIcon from '../icons/checkIcon.svg';

const Perks = props => {
       const alternateGrey = [1, 0, 1, 0, 1, 0, 1, 0]
       return (
            <div className="perks_grid">
            {props.ticketPerks.map((perk, index) => {
                if(alternateGrey[index]){
                    return (
                    <div key={index} className="perk_row grey_row">
                        <div className="perk_column_title"><p>{perk.col1}</p></div>
                        <div className="perk_column"><p>{(perk.col2 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col3 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col4 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col5 == 1 && <img src={checkIcon}></img>)}</p></div>
                    </div>
                    )
                }
               return (
                     <div key={index} className="perk_row">
                        <div className="perk_column_title"><p>{perk.col1}</p></div>
                        <div className="perk_column"><p>{(perk.col2 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col3 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col4 == 1 && <img src={checkIcon}></img>)}</p></div>
                        <div className="perk_column"><p>{(perk.col5 == 1 && <img src={checkIcon}></img>)}</p></div>
                     </div>
               )
            })}  
            </div>
        )
}

export default Perks;
