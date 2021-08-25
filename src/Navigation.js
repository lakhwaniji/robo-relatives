import React from "react";
import './Navigation.css'
function Navigation({onsearchchange}){
    return(
        <div>
        <div className="Heading tc">
            ROBOFREINDS
        </div>
        <div className="tc"><input className="pa2 tc  searching" type="text" placeholder="Enter Name To Search" onChange={onsearchchange}/></div>
        </div>
    )
}

export default Navigation;