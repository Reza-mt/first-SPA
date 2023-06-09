import React, { Component } from 'react';

 import styles from './Cards.module.css';
 import Card from './Card'

import iphoneX from '../images/iphone10.jpg';
import iphone11 from '../images/iphone11.jpg';
import iphone12 from '../images/iphone12.jpg';
import s21 from '../images/s21.jpg';

class Cards extends Component {

    constructor(){
        super();
        this.state = {
            phoneData:[
                { id: 1 ,image:iphoneX ,name:'iphoneX' ,cost:'500$'},
                { id: 2 ,image:iphone11 ,name:'iphone11' ,cost:'600$'},
                { id: 3 ,image:iphone12 ,name:'iphone12' ,cost:'800$'},
                { id: 4 ,image:s21 ,name:'s21' ,cost:'650$'}
            ]
        }
    }

    render() {
        const {phoneData} = this.state;
        return (
            <div className={styles.container}>
                {phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost} />)}
            </div>
        );
    }
}

export default Cards;