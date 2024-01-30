import React, { useState } from 'react';

// Данный компонент отвечает за дублирование записи из input в заголовок h1. Это называется двустороннее связывание (связывание состояния
// со значением, которые вводится в input).

const Handle = () => {

    const [value, setValue] = useState('Start text')

    return (
        <div>
            <h1>{value}</h1>
            <input type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            />
        </div>
    );
};

export default Handle;