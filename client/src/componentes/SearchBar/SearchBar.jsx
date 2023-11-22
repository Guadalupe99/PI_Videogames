import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getGamesByName } from '../../redux/Actions/actions';
import style from './SearchBar.module.css';

const SearchBar = ({ setCurrentPage }) => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    };

    const submit = (event) => {
        event.preventDefault();
        if (search.length > 0) {
            dispatch(getGamesByName(search.toLowerCase()))
                .then(() => {
                    setSearch('');
                    setCurrentPage(1);
                })
                .catch((error) => {
                    alert('Videogames not found');
                });
        }
    };
  

    return( 
        <div>
            <form onSubmit={submit}>
                <div className={style.container}>
                    <input
                      type='search'
                      onChange={handleChange}
                      value={search}
                      placeholder="Search your videogame..."
                      className={style.inputs}
                      />
                      <button disabled={isLoading}>SearchBar</button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
