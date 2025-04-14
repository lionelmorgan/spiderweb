import React, { useState, useEffect } from 'react';
import Login from './Login';
import './Posts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [newComment, setNewComment] = useState('');
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
                    setPosts(postsData.reverse()); // Reverse the array for most recent posts first
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

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleAddComment = async (postId) => {
        if (!newComment.trim()) return; // Don't add empty comments
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // Construct comment data
        const commentData = {
            postId,
            comment: newComment,
            username: currentUser.username,  // Replace with actual username from your app
            profile: currentUser.profile  // Replace with actual profile image URL from your app
        };

        try {
            // Send POST request to Express server add-comment endpoint
            const response = await fetch('http://localhost:5000/add-comment', {  // Use full URL for development
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });

            const data = await response.json();

            if (response.ok) {
                // After successfully adding the comment, update the posts state
                setPosts((prevPosts) => {
                    return prevPosts.map((post) => {
                        if (post.id === postId) {
                            return { ...post, comments: data.post.comments };
                        }
                        return post;
                    });
                });

                // Clear the comment input
                setNewComment('');
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Error adding comment:', error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
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
                                <div className="card-comment-like">
                                    <FontAwesomeIcon id="comment" icon={faComment} /> Comments
                                    <FontAwesomeIcon id="like" icon={faThumbsUp} /> {post.likes}
                                </div>
                                <div className="card-content">
                                    <h5 className="post-description">{post.description}</h5>
                                    <p className="post-created">{post.created}</p>
                                </div>
                                {/* Add comment input and button */}
                                <div className="add-comment">
                                    <input
                                        type="text"
                                        value={newComment}
                                        onChange={handleCommentChange}
                                        placeholder="Add a comment"
                                    />
                                    <button onClick={() => handleAddComment(post.id)}>
                                        Add Comment
                                    </button>
                                </div>

                                {/* Display comments */}
                                <div className="comments-section">
                                    {post.comments && post.comments.map((comment) => (
                                        <div key={comment.id} className="comment">
                                            <p><img src={comment.user.profile}/><strong>{comment.user.username}</strong>: {comment.comment}</p>
                                            <small>{comment.created}</small>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Posts;
