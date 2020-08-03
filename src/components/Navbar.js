import React from "react";
import { Link } from "react-router-dom";
import Logo from "../bookhub.svg";



function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link to={'/'}>
                <span className="navbar-brand" href><img src={Logo} width="30" height="30" 
                className="d-inline-block align-top" alt="Logo" /><strong>The BookHub</strong></span>
            </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav  ">

                    <Link to={'/library'} style={{textDecoration: "none"}}>
                        <li className="nav-item" >
                            <span className="nav-label mx-4">Library</span>
                        </li>
                    </Link>
                    
                    <Link to={'/mybooks'} style={{textDecoration: "none"}}>
                        <li className="nav-item">
                            <span className="nav-label mx-2">My Books</span>
                        </li>
                    </Link>

                    </ul>
                </div>

                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="find books..." aria-label="Search" />
                    <button className="btn btn-sm btn-outline-dark ml-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
          
            </nav>
        </div>
    )

}

export default Navbar;



