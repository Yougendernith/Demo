import React from "react";
import Avatar from "../components/Avatar";
import Details from "../components/Details";


// we have defined this props in App.jsx file
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>

        {/* using the custom Avatar component */}
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
      <Details tel={props.tel} email={props.email}/>
      </div>
    </div>
  );
}

export default Card;