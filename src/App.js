import React from 'react';
import Counter from './components/Counter';
import Handle from './components/Handle';
import Post from './components/Post';
import './styles/App.css'

// Обратите внимание, что мы можем переиспользовать компоненты по сколько угодно раз и в разных местах программы.
// При этом эти компоненты будут работать совершенно независимо друг от друга.

function App() {
  return (
    <div className='App'>
      <Counter />
      <Counter />
      <Handle />
      <Post />
    </div>
  );
}

export default App;
