import React, { useState } from 'react';

// Данный компонент представляет собой реализацию самого обычного счётчика. Обратите внимание на то, как описана логика в функциях
// increment() и decrement(). В них я использовал предыдущее значение переменной count, к которому явно прибавил(удалил) единицу.
// (Обычно пишут setCounter(count + 1) и setCounter(count - 1)).
// Предложенная мною запись гарантирует корректное обновление состояния, даже если будет запущено несколько обработчиков. 

const Counter = () => {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;