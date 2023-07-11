import { React, useState } from "react";
import styles from '@/styles/counter.module.css'
const Counter = () => {

    const [counter, setCounter] = useState(0);

    //increase counter
    const increase = () => {
        setCounter(count => count + 1);
    };

    //decrease counter
    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1);
          }
    };

    //reset counter 
    const reset = () => {
        setCounter(0)
    }

    return <div className={styles.counter}>
        <h1>React Counter</h1>
        <span className={styles.counter__output}>{counter}</span>
        <div className={styles.btn__container}>
            <button className={styles.control__btn} onClick={increase}>+</button>
            <button className={styles.control__btn} onClick={decrease}>-</button>
            <button className={styles.reset} onClick={reset}>Reset</button>
        </div>
    </div>
};

export default Counter;