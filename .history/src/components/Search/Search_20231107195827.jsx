import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { selectSearchTerm, setSearchTerm, search } from '../../features/posts/postsSlice';

import './Search.scss';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const handleInputChange = ({ target }) => {
        dispatch(setSearchTerm(target.value));
    };

    const handleSearch = () => {
        dispatch(search());
    };

    // dispatch(search()) on 'Enter' keypress
    const handleKeyPress = ({ key }) => {
        if (key === 'Enter') {
            dispatch(search());
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
                onKeyPress={handleKeyPress}
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSearch}
                className="search-button"
                title="search"
            >
                <FontAwesomeIcon icon={faSearch} className="search-button-icon" />
            </motion.button>
        </div>
    );
};

export default Search;