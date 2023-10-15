import './Search.scss';

import { useState } from 'react';
import './Search.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
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
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>
                <i className="fa fa-search"></i>
            </button>
        </div>
    );
};

export default Search;