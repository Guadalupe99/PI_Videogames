import { useNavigate } from 'react-router-dom';
import style from './Landing.module.css';
import FondoL from './FondoL.jpg';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className={ style.principal }>
            <button className={ style.buttonContainer } onClick={ () => navigate('/home') }>INICIO</button>
            <div className={ style.imageContainer }>
                <img src={ FondoL } alt='imagen de fondo' />
            </div>
        </div>
    );
};

export default Landing;