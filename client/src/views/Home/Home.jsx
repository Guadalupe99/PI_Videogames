import Cards from '../../componentes/Cards/Cards';
import Paginacion from '../../componentes/Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames, getGenres } from '../../redux/Actions/actions';
import Fondo from './FondoFichines.jpg';
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const allGames = useSelector((state) => state.allGames);
    const games = useSelector((state) => state.games);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLast = 
    currentPage === 1 ? currentPage * perPage : currentPage * perPage - 1;

    const indexOfFirst = indexOfLast - perPage;

    const currentGames = games.length
    ? games.slice(indexOfFirst, indexOfLast)
    : allGames;

    useEffect(() => {
        dispatch(getAllGames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className={ styles.body}>

            {!games.length ? (
                <div className={ styles.espera }>
                    <h1>Espere un momento</h1>
                </div>
            ) : (
                <div>
                    <div>
                        <Cards games={currentGames} />
                        <Paginacion
                            games={games.length}
                            pagination={pagination}
                            perPAge={perPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage} />
                    </div>
                    <div className={ styles.img }>
                            <img src={Fondo} alt="Imagen de Home" />
                    </div>
                </div>
            )}
            </div>
    );
};

export default Home;

