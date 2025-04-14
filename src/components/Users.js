import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.css'; 

const Users = () => {

  function navigateToProfile(){
    //function to navigate to user's profile by username
    //add onClick attribute and assign navigateToProfile
    //update the html to map user profile image and interpolate
  }

  return (
    <div className="image-icons-container">
      <div className="image-icon"><img src={require('../images/1.jpg')} alt="Icon 1" /></div>
      <div className="image-icon"><img src={require('../images/7.jpg')} alt="Icon 2" /></div>
      <div className="image-icon"><img src={require('../images/2.jpg')} alt="Icon 3" /></div>
      <div className="image-icon"><img src={require('../images/6.jpg')} alt="Icon 4" /></div>
      <div className="image-icon"><img src={require('../images/3.jpg')} alt="Icon 5" /></div>
      <div className="image-icon"><img src={require('../images/5.jpg')} alt="Icon 6" /></div>
      <div className="image-icon"><img src={require('../images/4.jpg')} alt="Icon 7" /></div>
    </div>
  );
};

export default Users;