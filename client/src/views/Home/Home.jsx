import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Cards from '../../componentes/Cards/Cards';
import styles from './Home.module.css';
import Fondo from './FondoFichines.jpg';

const Home = ({page , setPage}) => {
    const allGames = useSelector((state) => state.allGames);
    const gamesByName = useSelector((state) => state.gamesByname);

    const [games, setGames] = useState([]);

    useEffect(() => {
        if (gamesByName.length) {
            setGames(gamesByName);
        }else if (allGames.length) {
            setGames(allGames);
        }
    }, [allGames, gamesByName]);

    return (
        <div className={ styles.container}>
            <Cards games={games} page={page} setPage={setPage} />
            <div className={ styles.imageContainer }>
              <img src={Fondo} alt="Imagen de Home" />
            </div>
        </div>
    );
};

export default Home;