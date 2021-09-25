import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Teacher.css'

const Teacher = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const {img, name, age, position, nationality, salary} = props.teacher
    return (
        <div className = "single-teacher-container">            
            <img src={img} alt="" />
            <h4>Name : {name}</h4>
            <p>Age : {age}</p>
            <p>Position : {position}</p>
            <p>Naionality : {nationality}</p>
            <p>Honorium : {salary}</p>  
            <button onClick={()=>props.addToCart(props.teacher)}> {cartIcon} Add To Cart</button>          
        </div>
    );
};

export default Teacher;