import React from "react";
import './Navigation.css'
function Navigation({onsearchchange}){
    return(
        <div>
        <div className="Heading">
            ROBOFREINDS
        </div>
        <div><input className="pa2 tc  searching" type="text" placeholder="Enter Name To Search" onChange={onsearchchange}/></div>
        </div>
    )
}

export default Navigation;