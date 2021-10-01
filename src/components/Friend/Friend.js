import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { id, name, email, website, address } = props.friend;
  
  const divStyle = {
    border: '3px solid brown',
    borderRadius: "5px",
    padding:"10px"
  };

  const url = `/friend/${id}`;

    return (
      <div style={divStyle}>
        <h2>My name is : {name} id: { id}</h2>
        <h3>Mail me: {email}</h3>
        <p>Visit my site: {website}</p>
        <p>Location: {address.city}</p>
        <Link to={url}>Visit me</Link>
      </div>
    );
};

export default Friend;