import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navigation from './Navigation';
import Users from './Users';
import Posts from './Posts';
import './Home.css';
import Suggested from './Suggested';

const Home = () => {

  const navigate = useNavigate(); // Hook to programmatically navigate to another route

  const handleAddPostClick = () => {
      navigate('/add-post'); // Navigate to the AddPost page
  };

    return (
        <div>
            <Navigation />
            <Users />
            {/* Button to navigate to AddPost */}
            <button id="add-post-btn" onClick={handleAddPostClick} className="add-post-btn">
                +
            </button>
            <Posts />
            {/* <Suggested/> */}
             
             
        </div>
    );
};

export default Home;
