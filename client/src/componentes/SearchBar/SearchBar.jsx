import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        if (!/\d/.test(value)){
            setName(value);
            onSearch(value);
            
        }
    };

    return (
        <div className={ styles.container }>
            <input type='search' value={name} onChange={handleChange} placeholder='Ingrese un juego' />
            <button onClick={() => onSearch(name)}>Buesqueda</button>
        </div>
    );
};

export default SearchBar;