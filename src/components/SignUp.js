import React, {useState} from "react";
import './SignUp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [bio, setBio] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(!username || !password || !profileImage){
            alert("One or more fields are missing");
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('profileImage', profileImage);
        formData.append('bio', bio);

        try{
            const response = await fetch('http://localhost:5000/signup', {
                method:'POST',
                body: formData,
            });

            if(!response.ok){
                throw new Error("Signup unsuccessful");
            }

            const data = await response.json();
            console.log("Signup successful", data);

            //reset signup form
            setUserName('');
            setPassword('');
            setProfileImage(null);
            setBio('');
        }catch(error){
            console.log("Error:", error);
        }
}

//Render HTML Sign up form
    return(
        <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">
            <h2><FontAwesomeIcon icon={faSpider}/> <b>SPIDER</b>WEB</h2>
                <div>
                    <input 
                    type="text" 
                    id="username"
                    placeholder="Username" 
                    required 
                    onChange={(e) => setUserName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input 
                    type="password" 
                    id="password"
                    placeholder="Password" 
                    required 
                    onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor="profile-image">Profile Image</label>
                    <input 
                    type="file" 
                    placeholder="Upload Profile Image" 
                    required 
                    accept="profileImage/*"
                    onChange={(e) => setProfileImage(e.target.value)}>
                    </input>
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Bio" 
                    onChange={(e) => setBio(e.target.value)}>
                    </input>
                </div>
                <p>Already have an account? <a href="/">Login</a></p>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;