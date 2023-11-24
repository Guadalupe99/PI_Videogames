import {Link} from 'react-router-dom';
import React from 'react';
import styles from './Card.module.css';

const Card = ({ id, name, genres, image }) => {
    //no estoy accediendo a genres. Genres es un array de objetos y no un valor unico como id, name, image
    return (
        <Link to={`/detail/${id}`} className={ styles.a }>
            <div className={styles.card}>
                <div className={ styles.textBoxName }>
                <h1>{name}</h1>
                <h2>Genres: {genres}</h2>
                </div>
                <div className={styles.imagen}>
                    <img src={image} alt='Cargando...' className={ styles.image} />
                </div>
            </div>
        </Link>
    );
};

export default Card;