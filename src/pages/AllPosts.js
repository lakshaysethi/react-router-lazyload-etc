import React, { useState, useEffect } from "react";
import {useNavigate} from  'react-router-dom';
function AllPosts() {
  const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);
  // userId, id, title, body

  return (
    <div>
      AllPosts
      {posts.length < 0 && <h3> no data</h3>}
      {posts.map((element, index) => {
        return (
          <div key={index} style={{border:'4px solid black',margin:'10px', width:'200px'}}>
            <div>ID = {element.userId}</div>
            <div>Title = {element.title}</div>
               <button onClick={()=>navigate('/post-detail',{state:element})}> View More </button> 
          </div>
        );
      })}
    </div>
  );
}

export default AllPosts;
