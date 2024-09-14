import React, { useState } from 'react';

function SearchCommentById() {
  const [commentId, setCommentId] = useState('');
  const [comment, setComment] = useState(null);

  const handleSearch = () => {
    if (commentId) {
      fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(response => response.json())
        .then(data => setComment(data))
        .catch(error => console.error('Error fetching comment:', error));
    } else {
      setComment(null);
    }
  };

  return (
    <div>
      <input
        type="number"
        value={commentId}
        onChange={(e) => setCommentId(e.target.value)}
        placeholder="Enter Comment ID"
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {comment ? (
          <div>
            <h3>{comment.name}</h3>
            <p><strong>Email: </strong>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ) : (
          <p>No comment found for this ID</p>
        )}
      </div>
    </div>
  );
}

export default SearchCommentById;
