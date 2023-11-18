import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { cleanDetail, getDetail } from '../../redux/Actions/actions';
import styles from './Detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const game = useSelector((state) => state.detail);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(id))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
        return () => dispatch (cleanDetail());
    }, [id, dispatch]);

    return (
        <div className={ styles.body }>
            <Link to='/home' className={ styles.link }>
                <button className={ styles.boton }>Home</button>
            </Link>
            <div className={ styles.container }>
                {loading ? (
                    <div className={ styles.detail }><h1>Loading</h1></div>
                ) : !game.id ? (
                    <div><h1>El videogame no existe</h1></div>
                ): (
                    <div>
                        <div>
                            <h1>{game.name}</h1>
                        </div>

                        <div className={ styles.detail }>
                            <div className={ styles.containerImg }>
                                <img src={ game.image } alt={ game.name } />
                            </div>
                        
                        <div>
                            <p>Id: { game.id }</p>
                            <p>Name: { game.name }</p>
                            <p>Genres: { game.genres.map(genre => genre.name).join(', ') }</p>
                            <p>Rating: { game.rating }</p>
                            {game.platforms && Array.isArray(game.plataforms) && game.platforms.length > 0 && (
                                <p>Platforms: {game.plataforms.map(plataform => plataform.name).join(', ')}</p>
                            )}
                            <p>Released: { game.released }</p>
                            <p>Description: {game.description }</p>
                            <img src={game.background_image } alt='Cargando...' />
                    </div>
            </div>
        </div>
    )
  }
 </div>
 </div>
)};

export default Detail;
