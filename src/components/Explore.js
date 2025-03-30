import React from 'react';
import './Explore.css';
import Search from './Search';
import Navigation from './Navigation';
import Suggested from './Suggested';

const Explore = () => {
    return(
    <div>
        <Navigation/>
        <Search/>
        <div className="explore-content">
            <h1><strong>Trending</strong></h1>
            <div className="trending">
                <img src={require('../images/auroraborealis.jpg')} alt="Icon 1" />
                <img src={require('../images/milkyway.jpg')} alt="Icon 2" />
                <img src={require('../images/greatpyramids.jpg')} alt="Icon 3" />
                <img src={require('../images/ncmountains.jpg')} alt="Icon 4" />
                <img src={require('../images/denverbroncos.jpg')} alt="Icon 5" />
                <img src={require('../images/ironman3.jpg')} alt="Icon 6" />
            </div>

            <h1><strong>Suggested</strong></h1>
            <div className="suggested">
                <Suggested/>
            </div>
        </div>
    </div>
    )
}

export default Explore;