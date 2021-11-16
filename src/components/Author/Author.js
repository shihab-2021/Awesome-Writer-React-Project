import React, { useState,useEffect } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Author.css';

const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAuthors(data));
    },[])
    const handleAddToCart = (author) => {
        let flag = 0;
        for(const writer of cart) {
            if(writer.key === author.key) {
                flag++;
                break;
            }
        }
        if(flag===0){
            const newCart = [...cart, author];
            setCart(newCart);
        }
    }
    const handleRemoveFromCart = (author) => {
        let i = 0;
        for(const writer of cart) {
            if(writer.key === author.key) {
                cart.splice(i, 1);
                const newCart = [...cart];
                setCart(newCart);
                break;
            }
            i++;
        }
    }
    return (
        <div className="author my-5 py-5">
                <div className="author-container">
                    <h4 className="text-success">Honorable Writers</h4>
                    <div className="row py-5 gy-3">
                        {
                            authors.map(author => <Writer 
                                key = {author.key}
                                author = {author}
                                handleAddToCart = {handleAddToCart}></Writer>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <div className="cart-design shadow border-0 rounded-3">
                        <Cart cart={cart}
                            handleRemoveFromCart = {handleRemoveFromCart}></Cart>
                    </div>
                </div>
        </div>
    );
};

export default Author;