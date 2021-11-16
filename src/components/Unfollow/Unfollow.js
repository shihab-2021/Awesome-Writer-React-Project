import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import './Unfollow.css';

const Unfollow = (props) => {
    const element = <FontAwesomeIcon icon={faHeartBroken} />
    return (
        <div className="shadow border-0 my-3 p-2">
            <div className="d-flex justify-content-between">
                <img src={props.author.image} alt="" className="rounded-circle border border-1" />
                <p className="align-self-center"><small>{props.author.name}</small></p>
                <button  onClick={() => props.RemoveFromCart(props.author)} type="button" className="align-self-center unfollow-btn btn btn-outline-danger"><small>{element} Unfollow</small></button>
            </div>
        </div>
    );
};

export default Unfollow;