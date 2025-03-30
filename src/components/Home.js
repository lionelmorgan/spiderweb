import React from 'react';
import Navigation from './Navigation';
import Users from './Users';
import Posts from './Posts';
import './Home.css';
import Suggested from './Suggested';

const Home = () => {

    return (
        <div>
            <Navigation />
            <Users />
            <></>
            <Posts/>
            <Suggested/>
        </div>
    );
};

export default Home;
