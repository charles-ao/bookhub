import React /*{ useState }*/ from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Link } from "react-router-dom";


function Home() {

    return (   
        <div className="container-fluid home-back">
            <Navbar />
                <div className="container home-text">
                    <h1>"To acquire the habit of 
                        reading is to construct for yourself a refuge from almost all the 
                        miseries of life."  -W. Somerset Maugham
                    </h1>
                </div>
                <div className="container home-text">
                    <h1>Get over 10,000+ free books, available in Epub format.
                    </h1>
                    <Link to={"/library"}>
                        <button className="btn btn-outline-dark btn-md">Library</button>
                    </Link>
                </div>
            <Footer />
        </div>           
    )
}

export default Home;
