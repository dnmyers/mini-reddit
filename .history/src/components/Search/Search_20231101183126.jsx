import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchTerm, setSearchTerm } from '../../features/search/searchSlice';

import './Search.scss';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleInputChange = ({ target }) => {
        if(!target.value && target.value !== searchTerm) {
            dispatch(setSearchTerm(event.target.value));
        }
    };

    const handleSearch = () => {
        console.log(`Searching for ${searchTerm}`);
        // Add your search logic here
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch} className="search-button">
                <FontAwesomeIcon icon={faSearch} className="search-button-icon" />
            </button>
        </div>
    );
};

export default Search;