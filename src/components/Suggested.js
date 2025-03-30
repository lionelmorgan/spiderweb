import React, { useState, useEffect } from 'react';
import './Suggested.css';

const Suggested = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch posts from posts.json in the public folder
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/posts.json'); // Fetching the JSON data
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const postsData = await response.json();
                if (Array.isArray(postsData)) {
                    setPosts(postsData.reverse()); // Reverse 
                } else {
                    throw new Error('Posts data is not an array');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return( 
        <div className="post-container">
            {posts.map((post) => (
                <div className="post-form" key={post.id}>
                    <div className="user">
                        <span>
                            <img
                                className="user"
                                src={post.user.profile} 
                                alt="User Avatar"
                            />
                            
                        </span>
                        <p className="username">{post.user.username}</p>
                    </div>
                    <div className="row">
                        <div className="col s12 m7">
                            <div className="card post-item">
                                <div className="card-image">
                                    <img
                                        className="post-image"
                                        src={post.image} 
                                        alt={post.description} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Suggested;
