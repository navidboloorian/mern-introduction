import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './styles/App.module.css';
import InputField from './components/InputField';

const App = () => {
    return (
        <div className={styles.mainWrapper}>
            <InputField />
        </div>
    );
};

export default App;