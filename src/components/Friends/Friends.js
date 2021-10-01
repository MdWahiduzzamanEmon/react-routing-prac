import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
     const [firends, setFriens] = useState([]);

     useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setFriens(data));
     }, []);
    return (
      <div>
        <h2>I have {firends.length} friends</h2>

        <div className='friendsStyle'>
          {firends.map((friend) => (
            <Friend key={friend.id} friend={friend}></Friend>
          ))}
        </div>
      </div>
    );
};

export default Friends;