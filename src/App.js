import React, { useState } from 'react';
import Counter from './components/Counter';
import Handle from './components/Handle';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/button/input/MyInput';

// Обратите внимание, что мы можем переиспользовать компоненты по сколько угодно раз и в разных местах программы.
// При этом эти компоненты будут работать совершенно независимо друг от друга.

function App() {
  // Для возможности работать с большим количеством постов, создадим константу с использованием хука useState, а в качестве состояния передадим
  // массив постов и будем перебирать их с помощью функции map():

  const [posts, setPosts] = useState([
    { id: 1, title: 'first note', body: 'description' },
    { id: 2, title: 'second note', body: 'description' },
    { id: 3, title: 'third note', body: 'description' },
  ]);

  // Можно добавить второй список постов:

  // const [posts1, setPosts1] = useState([
  //   { id: 1, title: 'another first note', body: 'description1' },
  //   { id: 2, title: 'another second note', body: 'description1' },
  //   { id: 3, title: 'another third note', body: 'description1' },
  // ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      *************************************************
      <h2>Стандартные независимые счётчики:</h2>
      <Counter />
      <Counter />
      *************************************************
      <h2>Пример управляемого двустороннего связывания input и заголовка:</h2>
      <Handle />
      *************************************************
      <div className="postsCreate">
        <form>
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="post's name"
          />
          <MyInput
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            type="text"
            placeholder="post's description"
          />
          <MyButton onClick={addNewPost}>create new post</MyButton>
        </form>
      </div>
      <PostList posts={posts} title="Post's list 1" />
      {/* Второй список постов:  */}
      {/* <PostList posts1={posts1} title="Post's list 2" /> */}
    </div>
  );
}

export default App;
