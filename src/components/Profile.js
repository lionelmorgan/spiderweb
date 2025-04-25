import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navigation from './Navigation';

const Profile = () => {
    const [userPosts, setUserPosts] = useState([]);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/user-posts/${currentUser.username}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserPosts(data);
            } catch (error) {
                console.error('Error fetching user posts:', error);
            }
        };

        if (currentUser?.username) {
            fetchUserPosts();
        }
    }, [currentUser]);

    return (
        <div>
            <Navigation />
            <div className="profile">
                <div id="user">
                    <img src={currentUser.profile} alt="Profile" />
                    <p><strong><i>{currentUser.username}</i></strong></p>
                </div>
                <div id="bio">
                    <p><strong><i>{currentUser.bio}</i></strong></p>
                </div>
                <div className="posts">
                    {userPosts.length > 0 ? (
                        userPosts.map((post, index) => (
                            <img
                                key={index}
                                src={post.image}
                                alt={`Post ${index + 1}`}
                            />
                        ))
                    ) : (
                        <p><i>No posts yet.</i></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
