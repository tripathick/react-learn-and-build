import React from "react";
import { Link } from "react-router-dom";


class UserClass extends React.Component{
    constructor(props){
       super(props);

       this.state = {
         userInfo: {
            name: "dummy",
            location: "default",
         },
      };
    }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/tripathick");
    const json = await data.json();
    

    this.setState({
        userInfo:json,
    });
    console.log(json);
  }
  componentDidUpdate(){
    console.log("Component Did Update ")
  }
   
  componentWillUnmount(){
    console.log("Component will Unmount from the ui")
  }

   render(){
       const {name , location , avatar_url ,blog} = this.state.userInfo;
    //    debugger;f
       return (
        <div className="user-card">
            {/* <h2>Name : {this.props.name}</h2>
            <h3>Location : {this.props.location}</h3>
             */}
             {/* <h1>{this.state.count}</h1>
             <h1>{this.state.count2}</h1> */}
              <img src={avatar_url} alt="" />
             <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
 
        </div>
       )
   }
}
export default UserClass;