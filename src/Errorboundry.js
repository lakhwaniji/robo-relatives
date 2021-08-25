import React,{Component} from 'react';
class Errorboundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }
    render(){
        if(this.state.hasError){
            return(<h1>OOps Something Went wrong</h1>);
        }
        return(this.props.children);
    }

    //New Function to Catch Error

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }
} 

export default Errorboundary