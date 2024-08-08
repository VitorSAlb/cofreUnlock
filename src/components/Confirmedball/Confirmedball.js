import "./Confirmedball.css";
import React from "react";

export default function Confirmedball({ isActive, qntBall }) {
    const [IsActive, setIsActive] = React.useState(false) 
    const balls = [];

    for (let i = 0; i < qntBall; i++) {
        balls.push(
            <div 
                key={i} 
                className={`${"ball"} ${isActive[i] ? "active" : ''}`}
            ></div>
        );
    }

    return <div className="flexContainerLine">{balls}</div>;
}
