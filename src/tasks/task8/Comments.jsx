import React, { useState, useEffect } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} >
          <h3>{comment.name}</h3>
          <p><strong>Email: </strong>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}


export default Comments;
