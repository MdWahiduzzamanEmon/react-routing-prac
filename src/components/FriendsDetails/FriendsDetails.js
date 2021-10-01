import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendsDetails = () => {
  const { friendID } = useParams();
  
  const [friend, setFriend] = useState({});
  
  const history = useHistory();
  
    useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setFriend(data));
    }, [friendID]);
  
  const { name, email, phone, company } = friend;
  
    const handleToSeeAllFriends = () => {
        history.push('/friends');
  }
  
    return (
      <div>
        <h1>{friendID} No: id person Information:</h1>
        <h2>Name: {name}</h2>
        <h4>Mail: {email}</h4>
        <p>Phone: {phone}</p>
        <h5>Company: {company?.name}</h5>
            
        <button onClick={ handleToSeeAllFriends}>See all Friends</button>
      </div>
    );
};

export default FriendsDetails;