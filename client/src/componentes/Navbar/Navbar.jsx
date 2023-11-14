import { Link, useNavigate } from 'react-router-dom';
import { getAllGames, getGamesByName, getGenres } from '../../redux/Actions/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';

const Navbar = ({setPage}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getGenres());
    }, []);

    const onSearch = (name) => {
        dispatch(getGamesByName(name));
        navigate('/home');
        setPage(0);
    };

    const handleHomeButtonClick = () => {
        window.location.reload()
    }

    return (
        <div className={ styles.nav }>
            <h1> Game Zone </h1>
            <div className={ styles.botones }>
                <button onClick={handleHomeButtonClick} className={styles.Link}>
                    <Link to='/Form'>Create Videogame</Link>
                </button>
            </div>
            <div>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
};

export default Navbar;