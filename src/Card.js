import react from "react"; 
import ReactCardFlip from 'react-card-flip';
import "tachyons" ;
import "./Card.css"; 



class Card extends react.Component{
    constructor(){
        super();
        this.state={
            isFlipped:false
        }
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    render(){
        const {id}=this.props
    return(
        <div className="dib fullcard">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
              <div className="shadow-5 w5 ma3  pb3 tc card">
                 <img src={`https://robohash.org/${id}`} style={{width:"200px", borderRadius:"5px"}} className="shadow-3 ma3 grow" alt="Robot"/>
                 <h3 className="ma0 pa2 fw4">{this.props.name}</h3>
                 <h4 className="ma0 pa2 fw4">{this.props.email}</h4>
                 <div className="tc pointer shadow-5 w3 mt1 grow pa1" onClick={this.handleClick} style={{margin:"auto" , width:"100px" , borderRadius:"10px" , border:"2px solid black"}}>Contact</div>
              </div>
  
          <div>
              <div className="shadow-5 w5 backcard  ma3">
                <div style={{margin:"10px", textAlign:"left" , paddingTop:"30px"}}>Name-:{this.props.fullname}</div>
                <div style={{margin:"10px", textAlign:"left" , paddingTop:"30px"}}>Contact-No-:{this.props.contactno}</div>
                <div style={{margin:"10px", textAlign:"left" , paddingTop:"30px",fontSize:"14px"}}>Email-:{this.props.email}</div>
                <div style={{margin:"10px", textAlign:"left" , paddingTop:"30px"}}>Age-:{this.props.age}</div>
                <div style={{margin:"10px", textAlign:"left" , paddingTop:"30px"}}>Birthday-:{this.props.Birthday}</div>
                 
                 <div className="tc pointer shadow-5 w3 mt1 grow pa1" onClick={this.handleClick} style={{margin:"auto" , width:"100px" , borderRadius:"10px" , border:"2px solid black"}}>Back</div>
              </div>
        </div>
        </ReactCardFlip>
        </div>
    )
    }
}

export default Card;