import React, { useState } from 'react';
import Counter from './components/Counter';
import Handle from './components/Handle';
import PostList from './components/PostList';
import './styles/App.css';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

// Обратите внимание, что мы можем переиспользовать компоненты по сколько угодно раз и в разных местах программы.
// При этом эти компоненты будут работать совершенно независимо друг от друга.

function App() {
  // Для возможности работать с большим количеством постов, создадим константу с использованием хука useState, а в качестве состояния передадим
  // массив постов и будем перебирать их с помощью функции map():

  const [posts, setPosts] = useState([
    { id: 1, title: 'first note', body: 'aaa' },
    { id: 2, title: 'second note', body: 'sss' },
    { id: 3, title: 'third note', body: 'ddd' },
  ]);

  // Можно добавить второй список постов:

  // const [posts1, setPosts1] = useState([
  //   { id: 1, title: 'another first note', body: 'description1' },
  //   { id: 2, title: 'another second note', body: 'description1' },
  //   { id: 3, title: 'another third note', body: 'description1' },
  // ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Реализуем функционал удаления постов. Так как мы не можем пробрасывать пропсы от дочернего компонента к родительскому,
  // то создаём функцию обратного вызова с аргументом, вызывающим пост:

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id != post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

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
      <PostForm create={createPost} />
      {/* Чтобы при удалении всех постов было сообщение об этом, создадим "условную отрисовку, используя тернарный оператор": */}
      <hr style={{ margin: '16px 0' }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultvalue="sort by"
          options={[
            { value: 'title', name: 'by name' },
            { value: 'body', name: 'by description' },
          ]}
        />
      </div>
      {posts.length != 0 ? (
        <PostList remove={removePost} posts={posts} title="Post's list 1" />
      ) : (
        <h2 style={{ textAlign: 'center' }}>No posts now</h2>
      )}
      {/* Второй список постов:  */}
      {/* <PostList posts1={posts1} title="Post's list 2" /> */}
    </div>
  );
}

export default App;
