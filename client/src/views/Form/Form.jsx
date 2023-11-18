import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getGenres, postGame} from '../../redux/Actions/actions';
import validation from './validationForm.js';
import styles from './Form.module.css';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { gamesGenres } = useSelector((state) => state);

    useEffect(() => {
        if (gamesGenres.length === 0) {
            dispatch(getGenres());
        }
    }, [dispatch]);

    const [form, setForm] = useState({
        name: '',
        description: '',
        platforms: '',
        image: '',
        released: '',
        rating: '',
        genres: [],
    });

    const [errorMessage, setErrorMessage] = useState({});

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({ ...form, [property]: value });

        const errors = validation({ ...form, [property]: value });
        setErrorMessage(errors);
    };

    const handleSelect = (event) => {
        const newGenre = event.target.value;
        if (form.genres.includes(newGenre)) {
            alert('ese genero ya esta seleccionado');
            return;
        }

        setForm({ ...form, genres: [...form.genres, newGenre] });
        event.target.value= '';
    };

    const handleClearGenres = () => {
        setForm({ ...form, genress: [] });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.genres.length === 0) {
            setForm({
                name: '',
                description: '',
                platforms: '',
                image: '',
                released: '',
                rating: '',
                genres: [],
            });

            return;
        }

        dispatch(postGame(form));
        alert('Videogame agregado exitosamente');

        setForm({
            name: '',
            description: '',
            platforms: '',
            image: '',
            released: '',
            rating: '',
            genres: [],
        });

        navigate('/home');
    };

    const disableSubmit = () => {
        if (
            !form.name ||
            !form.description ||
            !form.platforms ||
            !form.image ||
            !form.released ||
            !form.rating ||
            !form.genres.length === 0
        )

        return false;
        if (
            errorMessage.name ||
            errorMessage.description ||
            errorMessage.platforms ||
            errorMessage.image ||
            errorMessage.released ||
            errorMessage.rating ||
            errorMessage.genres
        )
        
        return false;
        return true;
    };

    return (
        <div className={ styles.body }>
            <div>
                <Link to='/home' className={ styles.link }>
                    <button className={ styles.boton }>Home</button>
                </Link>
                <form onSubmit={ handleSubmit } className={ styles.form }>
                    <div>
                        <label htmlFor='name' className={ styles.label }>Name</label>
                        <input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='name'
                        autoComplete='off'
                        value={ form.name }
                        onChange={ changeHandler }
                        className={ styles.inputs }/>{' '}
                        {errorMessage.name && (
                            <p style={{ color: 'blue' }}>{errorMessage.name}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='description' className={ styles.label }>Description</label>
                        <input
                        type='text'
                        name='description'
                        id='description'
                        placeholder='description'
                        autoComplete='off'
                        value={ form.description }
                        onChange={ changeHandler }
                        className={ styles.inputs } />
                        {errorMessage.description && (
                            <p style={{ color: 'blue'}}>{errorMessage.description}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='platforms' className={ styles.label }>Platforms</label>
                        <input
                        type='text'
                        name='platforms'
                        id='platforms'
                        placeholder='platforms'
                        autoComplete='off'
                        value={ form.platforms }
                        onChange={ changeHandler }
                        className={ styles.inputs} />
                        { errorMessage.platforms && (
                            <p styles={{ color:'blue '}}>{errorMessage.platforms}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='released' className={ styles.label }>Released</label>
                        <input
                        type='text'
                        name='released'
                        id='released'
                        placeholder='released'
                        autoComplete='off'
                        value={ form.released }
                        onChange={ changeHandler }
                        className={ styles.inputs } />
                        {errorMessage.released && (
                            <p style={{ color: 'blue' }}>{errorMessage.released}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='rating' className={ styles.label }>Rating</label>
                        <input
                        type='number'
                        name='rating'
                        id='rating'
                        placeholder='rating'
                        autoComplete='off'
                        value={ form.rating }
                        onChange={ changeHandler }
                        className={ styles.inputs } />
                        {errorMessage.rating && (
                            <p style={{ color: 'blue'}}>{errorMessage.rating}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor='image' className={ styles.label }>Image</label>
                        <input 
                        type='text'
                        name='image'
                        id='image'
                        placeholder='url de la imagen'
                        size='30'
                        autoComplete='off'
                        value={ form.image }
                        onChange={ changeHandler }
                        className={ styles.inputs } />
                        {errorMessage.image && (
                            <p style={{ color: 'blue' }}>{errorMessage.image}</p>
                        )}
                    </div>

                    <div>
                        <label className={ styles.label }>Genres</label>
                        <select onChange={ handleSelect } className={ styles.select }>
                            <option value={ form.genres } className={ styles.option }>{' '} Select genres </option>
                            {gamesGenres?.map((genre) => {
                                return (
                                    <option key={ genre.id } name={ genre.id } value={ genre.id }>{ genre.name }</option>
                                );
                            })}
                        </select>
                        <button onClick={ handleClearGenres } className={ styles.create }>Clear Genres</button>
                        {errorMessage.genres && (
                            <p style={{ color:'blue' }}>{errorMessage.genres}</p>
                        )}
                        <ul>
                            {gamesGenres?.map((genre) => {
                                if (form.genres.includes(genre.id.toString())) {
                                    return <li key={genre.id}>{genre.name}</li>
                                }
                            })}
                        </ul>
                    </div>

                    <button
                    type='submit'
                    className={ styles.create }
                    disabled={ !disableSubmit()}>Crear Videogame</button>
                </form>
            </div>
        </div>
    );
};

export default Form;