import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getAllGames } from '../../redux/Actions/actions';
import { order, filter, create } from '../../redux/Actions/actions';

const Navbar = ({ setCurrentPage }) => {
    const dispatch = useDispatch();
    const { genres } = useSelector(state => state);

    const filterGenre = (event) => {
        event.preventDefault();
        const genre = event.target.value;
        dispatch(filter(genre));
        setCurrentPage(1);
    };

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(order(event.target.value));
        setCurrentPage(1);
    };

    const createHandler = (event) => {
        event.preventDefault();
        dispatch(create(event.target.value));
        setCurrentPage(1);
    };

    const handleReset = (event) => {
        event.preventDefault();
        dispatch(getAllGames());
    };

    return (
        <nav className={styles.nav}>
            <Link to={"/home"}>
             <h1> Game Zone </h1>
            </Link>
            <select onChange={(event) => createHandler(event)} className={ styles.btns}>
                <option value='All'>All</option>
                <option value='Creado'>Creado</option>
                <option value='Api'>Api</option>
            </select>

            <select onChange={filterGenre} className={styles.btns}>
                <option value='All'>All genres</option>
                {genres?.map((genre) => {
                    return (
                        <option key={genre.id} name={genre.id} value={genre.name}>
                            {genre.name}
                        </option>
                    );
                })}
            </select>

            <select onChange={(event) => orderHandler(event)} className={ styles.btns }>
                <option value='none'>Order</option>
                <option value='A'>A-Z</option>
                <option value='D'>Z-A</option>
                <option value='L'>Less</option>
                <option value='H'>Higher</option>
            </select>


            <button className={ styles.btns}>
                <Link to={'/form'} className={ styles.links }>
                    Create Game
                </Link>
            </button>
            <button className={ styles.btns } onClick={ handleReset }>
                Reset
            </button>
            <SearchBar setCurrentPage={setCurrentPage} />
        </nav>
    );
};

export default Navbar;
















// import { Link, useNavigate } from 'react-router-dom';
// import { getAllGames, getGamesByName, getGenres } from '../../redux/Actions/actions';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import SearchBar from '../SearchBar/SearchBar';
// import styles from './Navbar.module.css';

// const Navbar = ({setPage}) => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     useEffect(() => {
//         dispatch(getAllGames());
//         dispatch(getGenres());
//     }, []);

//     const onSearch = (name) => {
//         dispatch(getGamesByName(name));
//         navigate('/home');
//         setPage(0);
//     };

//     const handleHomeButtonClick = () => {
//         window.location.reload()
//     }

//     return (
//         <div className={ styles.nav }>
//             <h1> Game Zone </h1>
//             <div className={ styles.botones }>
//                 <button onClick={handleHomeButtonClick} className={styles.Link}>
//                     <Link to='/Form'>Create Videogame</Link>
//                 </button>
//             </div>
//             <div>
//                 <SearchBar onSearch={onSearch} />
//             </div>
//         </div>
//     );
// };

// export default Navbar;



