import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teacher from '../Teacher/Teacher';
import './Main.css'

const Main = () => {
    const [teachers, setTeachers] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( () => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    const addToCart = (teacher) => {
        const newCart = [...cart, teacher];
        setCart(newCart);
    }
    
    return (
        <div className = "main-container">
            <div className="teacher-container">                
                {
                    teachers.map(teacher => <Teacher 
                        key = {teacher.key}
                        teacher ={teacher}
                        addToCart = {addToCart}
                        ></Teacher>)
                }
            </div>
            <div className="honorium-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Main;