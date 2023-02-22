import React, {useState} from 'react';
import styles from '../styles/InputField.module.css';

const InputField = () => {
    return (
        <input className={styles.inputField} type="text" placeholder="I need to..." />
    );
};

export default InputField;