import React from 'react';
import './Profile.css';
import Navigation from './Navigation';

const Profile = () => {
    return(
        <div>
            <Navigation/>
            <div className="profile">
                <div id="user">
                    <img src={require('../images/8.jpg')} />
                    <p><strong><i>lionelmorgan</i></strong></p>
                </div>
                <div id="bio">
                    <p><strong><i>Denver Broncos fan 🐎. Nature adventures ⛰️</i></strong></p>
                </div>
                <div className="posts">
                    <img src={require('../images/auroraborealis.jpg')} alt="Icon 1" />
                    <img src={require('../images/milkyway.jpg')} alt="Icon 2" />
                    <img src={require('../images/greatpyramids.jpg')} alt="Icon 3" />
                    <img src={require('../images/ncmountains.jpg')} alt="Icon 4" />
                    <img src={require('../images/denverbroncos.jpg')} alt="Icon 5" />
                    <img src={require('../images/ironman3.jpg')} alt="Icon 6" />
                </div>
            </div>
        </div>
    )
}

export default Profile;