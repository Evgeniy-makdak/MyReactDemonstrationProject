import React from 'react';

const Post = () => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. first note</strong>
          <div>This is the first description.</div>
        </div>
        <div className="post__btns">
            <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
