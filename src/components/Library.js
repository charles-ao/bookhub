import React /*{useState, useEffect}*/ from "react";
import Navbar from "./Navbar";
import Book from "./Book";
import Footer from "./Footer"
import data from "../data"


function createBook(params) {
    return (
        <Book 
            key={params.id}
            img={params.img}
            title={params.title}
            author={params.author}
            about={params.about}
            file={params.file}
        />
    )
}


function Library() {

    return (
        <div className="library-back">
            <Navbar />
                    <div className="container">
                        <div className="row">
                            {data.map(createBook)}
                        </div>
                    </div>
            <Footer />
        </div>

    )
}

export default Library;