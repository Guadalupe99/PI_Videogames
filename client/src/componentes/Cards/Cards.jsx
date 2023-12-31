import React from "react";
import Card from '../Card/Card';
import styles from './Cards.module.css';

const Cards = ({ games }) => {
    console.log(games)
    return (
        <div className={styles.container}>
             { games.map((game, index) => (
                <Card
                    name={game.name}
                    image={game.image}
                    genre={game.genres}
                    key={index}
                    id={game.id}
                />
            ))}
        </div>
    );
};

export default Cards;


// const Cards = ({ videogames }) => {
//     return (
//         <div className={ styles.container }>
//             { videogames && videogames.map((videogame) => {
//                 return (
//                     <Card
//                     name={ videogame.name }
//                     image={ videogame.image }
//                     genre={ videogame.genre.join(' /' ) }
//                     key={ videogame.id }
//                     id={ videogame.id } />
//                 );
//             })}
//         </div>
//     );
// };

// export default Cards;