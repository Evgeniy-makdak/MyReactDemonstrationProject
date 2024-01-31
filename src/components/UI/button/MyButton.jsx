import React from 'react';
import classes from './MuButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        // Очень полезный способ передачи пропсов из корневого файла (где прописана кнопка) через указание {...props}. Теперь, всё что мы
        // укажем в App.js в свойствах кнопки <MyButton (любое свойство, например desabled для проверки), будет корректро отрабатывать.
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;