import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle,handleAddToCart}) => {
   const{name,price,rating,stock,img} =bottle
    
    return (
        <div className="bottle-container">
            <img className='bottle-img' src={img} alt="" />
            <h3>Name:{name}</h3>
            <p>price:{price}</p>
            <p>Rating:{rating}</p>
            <p>Stock:{stock}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
            
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired
}

export default Bottle;