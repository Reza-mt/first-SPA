import React, { Component } from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.container} >
                <p>
                    &copy; All rights reserved.
                </p>
            </div>
        );
    }
}

export default Footer;