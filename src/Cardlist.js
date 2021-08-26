import React from "react";
import Card from "./Card"
import "tachyons"

function Cardlist({Robots}){
    return(
        <div className="tc">
            {
                Robots.map((user,i)=>{
                    return(
                        <Card id={user.id} name={user.name} fullname={user.fullname} contactno={user.contactno} age={user.age} Birthday={user.Birthday} email={user.email} key={i} />
                    );
                }
                )
            }
    
    </div>
)
}

export default Cardlist;
