import React from "react";



function Book(props) {
    return (

        <div className="cardImg">
            <img  src={props.img} alt=""/>
            <div className="textCard">
                <h4>{props.title}</h4>
                <span style={{fontStyle: 'italic'}}>by </span>
                <span style={{fontWeight: 'bold'}}>{props.author}</span>                
                <p className="my-2">{props.about}</p>
                <a className="btn btn-outline-dark btn-sm my-2" href={props.file} download>Get Now!</a>
            </div>
        </div>
            
    )
}

export default Book;