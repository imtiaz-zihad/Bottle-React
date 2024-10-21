import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStorageCart, removeFromLS } from "../../utilites/localstoreage";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const[bottles,setBottles] = useState([]);
    const[cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // Load Cart From Local Storage 
    useEffect(()=> {
        if (bottles.length>0) {
            const storedCart = getStorageCart();
            const saveCart = [];
            console.log(storedCart);
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            console.log('save cart',saveCart);
            setCart(saveCart);
            
        }
    },[bottles])

    const handleAddToCart = bottle =>{
       const newCart= [...cart, bottle];
       setCart(newCart);
       addToLS(bottle.id)
        
    }
    const handleRemoveFromCart = id =>{
        //Remove from visual card
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        //Remove from LS
       removeFromLS(id)
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>

          
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            {
                bottles.map(bottle => <Bottle
                     key={bottle.id} 
                     bottle={bottle}
                     handleAddToCart={handleAddToCart}
                     ></Bottle>)
            }
        </div>
    );
};

export default Bottles;