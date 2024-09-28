import React from "react";

function Card() {
  return (

    <div className="card">
      <div className="pic"></div>
      <div className="name">Kyle</div>
      <div className="title"><h3>FullStack Deveoper</h3></div>
      <div className="bio">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos minima vitae architecto laudantium sed mollitia provident repellendus ducimus corporis expedita in molestiae incidunt esse, a assumenda facilis porro quidem?
        </p>
      </div>
      <button className="submitBtn">Explore More</button>
    </div>

  )
}

export default Card;