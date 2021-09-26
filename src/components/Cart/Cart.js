import React from 'react';
import './cart.css'

const Cart = (props) => {   
    const { cart } = props;    
    let total = 0;
    for(const teacher of cart){
        total = total + teacher.salary;               
    }      
     
    return (
        <div className="honorium">
            <h3>Lecturer Added : {cart.length}</h3>
            <p>Total Honorium : {total}</p>
            <p className="cart-list">
                {
                    cart.map(teacher => teacher.name)
                }
            </p>
        </div>
    );
};

export default Cart;