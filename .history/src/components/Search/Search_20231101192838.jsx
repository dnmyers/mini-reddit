import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchTerm, setSearchTerm } from '../../features/posts/postsSlice';

import './Search.scss';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleInputChange = ({ target }) => {
        dispatch(setSearchTerm(target.value));
    };

    const handleSearch = ({ target }) => {
        console.log(`Searching for ${searchTerm}`);

        if(!target.value && target.value !== searchTerm) {
            dispatch(setSearchTerm(target.value));

        }
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