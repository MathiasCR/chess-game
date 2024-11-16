import React from "react";

import "./Square.css";

type SquareProps = {
    x: number;
    y: number;
    image?: string;
    class: string;
}

export default function Square( props: SquareProps) {
    const x: number = props.x;
    const y: number = props.y;

    return (
        <div 
            className={props.class}>
                <img src={props.image} alt=""/>
        </div>
    );
}