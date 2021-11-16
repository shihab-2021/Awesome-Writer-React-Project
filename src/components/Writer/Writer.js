import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Writer.css';

const Writer = (props) => {
    const {name, image, age, field, books} = props.author;
    const element = <FontAwesomeIcon icon={faHeart} />
    return (
        <div className="col-lg-4 col-md-6 col-12 text-center">
            <div className="card shadow border-0 rounded-3">
                <div className="card-body">
                    <div className="mb-3">
                      <img src={image} alt="" className="update-img rounded-circle border border-1"/>
                    </div>
                    <div>
                        <h5 className="text-secondary">{name}</h5>
                        <h6 className="text-primary">{field}</h6>
                        <h6 className="text-secondary"><small>{age} years old</small></h6>
                        <h6 className="text-warning">Number of Book: <span className="text-success">{books}+</span></h6>
                        <h3 className="d-flex justify-content-evenly">
                            <a href="/facebook"><i className="fa fa-facebook" aria-hidden="true"></i> </a>
                            <a href="/instagram"><i className="text-danger fa fa-instagram" aria-hidden="true"></i> </a> 
                            <a href="/twitter"><i className="text-info fa fa-twitter" aria-hidden="true"></i> </a>
                        </h3>
                        <button onClick={() => props.handleAddToCart(props.author)} type="button" className="btn btn-outline-danger">{element} Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Writer;