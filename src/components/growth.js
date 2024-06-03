import React from "react";
import './growth.css';

const Growth = () => {
    return (
        <div className="growth-container">
            <div className="expert-container">Experts growth</div>
            <div className="company-container">Our Company Growth</div>
            <div className="tile-container satisfy-container">
                <div className="heart"></div>
                <div className="val1">199 +</div>
                <div className="sc">Satisfied Customers</div>
            </div>      
            <div className="tile-container op-container">
                <div className="clock"></div>
                <div className="val2">1591+</div>
                <div className="do">Days Of Operation</div>
            </div>
            <div className="tile-container proj-container">
                <div className="tick"></div>
                <div className="val3">283+</div>
                <div className="pro">Complete Projects</div>
            </div>
            <div className="tile-container win-container">
                <div className="winimage"></div>
                <div className="val4">75+</div>
                <div className="wina">Win Awards</div>
            </div>
        </div>
    );
};

export default Growth;
