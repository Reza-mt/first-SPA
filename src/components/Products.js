import React, { Component } from 'react';

import axios from 'axios';
import Card from './Card';
import styles from './Products.module.css'

class Products extends Component {

    constructor(props) {
        super(props);
        this.state={
            Products: []
        }
    }

    componentDidMount() {
        axios.get("https://api.escuelajs.co/api/v1/products")
        .then((response) => this.setState({
            Products: response.data
        }))
    }

    render() {
        const { Products } = this.state;
        return (
            <div className={styles.Search}>
                    <input placeholder='Search ...' />  
                <div className={styles.container}>
                    {Products.map(Product => <Card key={Product.id} image={Product.images} name={Product.title} cost={`${Product.price} $` } />)}
                </div>
            </div>
        );
    }
}

export default Products;