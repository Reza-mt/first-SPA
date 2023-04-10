import React from 'react';

import styles from './Banner.module.css';
import banner from '../images/Banner.jpg';

const Banner = () => {
    return (
        <div className={styles.container} >
            <img  src={banner} alt='banner' />
            <div className={styles.textContainer}>
                <h1>First React</h1>
                <p>First Project with <span>React.js</span> </p>
            </div>
        </div>
    );
};

export default Banner;