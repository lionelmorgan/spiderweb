import React from 'react';
import './Search.css';

const Search = () => {
    //function displaySearch() to display a search icon that transform into a search field

    return(
        <div className="search">
            <input type="text" placeholder='Search...'></input>
        </div>
    )
}
export default Search;