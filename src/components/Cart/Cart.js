import React from 'react';
import './cart.css'

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    for(const teacher of cart){
        total = total + teacher.salary;               
    }
    
    
     
    return (
        <div>
            <h3>Lecturer Added : {cart.length}</h3>
            <p>Total Honorium : {total}</p>
            <span>
                {
                    cart.map(teacher => teacher.name)
                }
            </span>
        </div>
    );
};

export default Cart;