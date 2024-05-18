import React from "react";
import ReactDOM from "react-dom/client"



// const heading = React.createElement("h1" , {} , "Hello World from React!!...");
// Here createElement method takes 3 argument i.e (element  , object -> for providing attribute for
// given tag/element , content inside given element)

// We can also  create html DOM using createElement method as like
//    <div>
//       <div>
//         <div>
//             <h1>I am an h1 tag </h1>
//                <h2>I am an h2 tag</h2>
//         </div>
//         <div>
//             <h1>I am an h1 tag </h1>
//                 <h2>I am an h2 tag</h2>
//         </div>
//       </div>
//    </div>

// How can we create this ?
// We can create this using createElement() method/
  const parent = React.createElement("div" , {id : "parent"} , [
      React.createElement("div" , {id: "c1"} , [
        React.createElement("h1" , {} , "I am h1 tag"),
      React.createElement("h2" , {} , "I am an h2 tag"),
      ]),
      React.createElement("div" , {id: "c2"} , [
        React.createElement("h1" , {} , "I am h1 tag"),
      React.createElement("h2" , {} , "I am an h2 tag"),
      ]),
])  

const root = ReactDOM. createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
