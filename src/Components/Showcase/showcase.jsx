import React from 'react'

import cokebottle from "./coke-bottle.png"
import heniken from "./heniken.png"
import CrushedWaterBottle from "./crushed-water-bottle.jpeg"
import Jerican from "./jerican.png"
import Bisleri from "./bisleri.png"
import Stick from "./stick.png"

import "./showcase.js"
import "./showcase.css"

const showcase = () => {    
  return (
    <div className="showCaseBottlesOtrBx">
        <div className="showCaseBottlesOtrBx">
            <img src={cokebottle} className="App-logo switch" alt="Coke Bottle" />
            <img src={heniken} className="Heniken-App-logo switch" alt="Heniken Bottle" />
            <img src={Bisleri} className="Heniken-App-logo switch" alt="Heniken Bottle" />       
            <img src={Jerican} className="Heniken-App-logo switch" alt="Jerican" />  
            <img src={Stick} className="Heniken-App-logo switch" alt="Stick" />    
        </div> 
    </div>
  )
}

export default showcase