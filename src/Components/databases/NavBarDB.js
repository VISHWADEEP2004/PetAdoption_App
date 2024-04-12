import React from 'react';
const NavBarDB = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex">
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
};

export default NavBarDB;
