import React, { Component } from 'react';

import styles from './Card.module.css';
import up from '../images/up.png';
import down from '../images/down.png';

class Card extends Component {

    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }

    upHandler = () => {
        this.setState(prevState =>({
            counter: prevState.counter + 1,
        }))
    }

    downHandler = () => {
        if(this.state.counter >= 1){
                this.setState(prevState =>({
                
                counter: prevState.counter - 1,
            }))
        }
    }

    render() {
        const {image , name , cost}=this.props;
        const {counter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image}  alt='iphone '/>
                <h3> {name} </h3>
                <p> {cost} </p>

                    <div className={styles.counter}>
                        <img className={counter? '' : styles.deactivate } src={down} alt='down'onClick={this.downHandler} />
                        <span>{counter}</span>
                        <img  src={up} alt='up' onClick={this.upHandler} />
                    </div>
            </div>
        );
    }
}

export default Card;