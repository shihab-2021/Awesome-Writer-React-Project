import React from 'react';
import Unfollow from '../Unfollow/Unfollow';
import './Cart.css';

const Cart = (props) => {
    let totalBook = 0;
    for(const book of props.cart) {
        totalBook = totalBook + parseInt(book.books);
    }
    const RemoveFromCart = (author) => {
        props.handleRemoveFromCart(author);
    }
    return (
        <div>
            <h4 className="text-center text-success pt-2">Follow Number : {props.cart.length}</h4>
            <div className="py-4">
                {
                    props.cart.map(author => <Unfollow
                            key = {author.key}
                            author = {author}
                            RemoveFromCart = {RemoveFromCart}></Unfollow>)
                }
            </div>
            <h5 title="Total book number of your favorite writer." className="text-center pb-3"><span className="text-warning">Total Book Number:</span> <span className="text-danger">{totalBook}</span></h5>
        </div>
    );
};

export default Cart;