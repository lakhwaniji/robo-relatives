import React from "react";
import Cardlist from "./Cardlist";
import Navigation from "./Navigation";
import "./App.css";
import Errorboundary from "./Errorboundry";
import { Robots } from "./Robots";
import Footer from "./Footer.js"
 class App extends React.Component{
   constructor(){
     super()
     this.state={
       robots:Robots,
       searchbox:""
     }
   }

  onsearchchange=(event)=>{
    this.setState({searchbox:event.target.value})
  }
   render(){
     const filter=this.state.robots.filter((robots)=>{
       return robots.name
       .toLowerCase()
       .includes(this.state.searchbox.toLowerCase());
     })
  return (
    <div className="page">
      <Navigation onsearchchange={this.onsearchchange}/>
      <Errorboundary>
      <Cardlist Robots={filter}/>
      <Footer/>
      </Errorboundary>
      
      
    </div>
  );
}
 }

export default App;
