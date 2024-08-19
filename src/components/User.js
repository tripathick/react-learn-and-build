import { useState } from "react";


const User = (props) => {
  const [count , setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>{count}</h1>
            <button onClick={() => setCount (count+1) }>Increase count</button>
            <h2>Name : {props.name} </h2>
            <h3>Location: {props.location}</h3>
            <h4>Contact : @CKt123456</h4>
        </div>
    )
}
export default User;