import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
             <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <h1 className="logo"><span className="text-danger">Awesome</span> <span className="text-success">writer</span></h1>
                <form className="d-flex">
                  <button className="mx-3 btn btn-outline-primary" type="submit">Login</button>
                  <button className="btn btn-outline-success" type="submit">Signup</button>
                </form>
              </div>
            </nav>
            <h1><span className="text-danger">Awesome</span> <span className="text-success">writer</span></h1>
            <h4>Best writers of Bangladesh</h4>
            <h2>Writers live twice</h2>
        </div>
    );
};

export default Header;