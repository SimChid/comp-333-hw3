
import React, { useState, useEffect } from "react";
import axios from "axios";

function Enumerate() {
  const [myData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/comp-333-hw3/index.php/song/enumerate")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <tr><th>User</th><th>Song</th><th>Artist</th><th>Rating</th><th>Actions</th></tr>
        {myData.map((item) => (<tr key={item.id}><td>{item.username}</td> <td>{item.song}</td> <td>{item.artist}</td> <td>{item.rating}</td></tr>))}
      </table><br />
      
    </div>
    
    
  );
}


export default Enumerate;

