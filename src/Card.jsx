import React from "react";
import images from './images/youlogo.jpeg';


function Card()
{
    return(
        <>
         <h1 className="heading_style">
            List Of All New Movies
        </h1>
            <div className="cards">
                <div className="card">
                    <img src={images} alt="..." className="youtube"/>
                    <img src={images} alt="..." className="youtube"/>
                    <div className="class_info">
                        <span className="span">Click Here TO GO TO Youtube</span>
                        <h1 className="head">Youtube</h1>
                        <a href="https://www.youtube.com/">
                            <button className="btn">Watch</button>
                        </a>
                    </div>
                </div>
            </div>
           
        </>
    );
}

export default Card;