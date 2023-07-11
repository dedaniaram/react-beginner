import React, { Component } from 'react';  
class Jungle extends React.Component {  
   constructor(props) {  
      super(props);  
      this.state = {  
         name: "Lion",
         action:"Roaring",
      }  
   }  
   render() {  
      return (  
         <div>  
            <h1>State & Props Example</h1>
            <Animal props = {this.state.name}/>
            <Action props = {this.state.action}/>
         </div>  
      );  
   }  
}  
class Animal extends React.Component {  
   render() {  
      return (  
          <div>  
              <h3>I am a {this.props.props}</h3>  
              <p>I am the king of the Jungle</p>  
         </div>    
      );  
   }  
}  
class Action extends React.Component {  
   render() {  
      return (  
          <div>  
              <h3>I am {this.props.props}</h3>  
         </div>    
      );  
   }  
}  
export default Jungle; 