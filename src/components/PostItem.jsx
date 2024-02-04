import React from 'react';

// Как видно, если данный компонент использовать многократно, то весь его контент статичен и один пост не отличается от других.
// Исправить это можно с помощью передаваемых в аргумент функции Post входных данных(props). Эти пропсы можно передавать в корневой
// компонент (см. соответствующий пример в компоненте App.js). И обращаемся к соответствующим полям через запись в фигурных скобках:

const PostItem = (props) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{props.number} {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
            <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
