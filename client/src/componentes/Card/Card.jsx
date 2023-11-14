import {Link} from 'react-router-dom';
import React from 'react';
import styles from './Card.module.css';

const Card = ({ game }) => {
    return (
        <Link to={`/detail/${game.id}`}>
            <div calssName={ styles.container }>
                <h1>{ game.name }</h1>
                <h2>Genres: {game.genres}</h2>
                <div className={ styles.imagen }>
                    <img src={game.backgroun_image} alt='Cargando...'/>
                </div>
            </div>
        </Link>
    )
}

export default Card;