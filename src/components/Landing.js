import React, { Component } from 'react';

import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Paragraph from './Paragraph';

class Landing extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Cards />
                <Search />
                <Paragraph />
            </div>
        );
    }
}

export default Landing;