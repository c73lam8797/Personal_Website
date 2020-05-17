import React from 'react'

export default function Card({header, body}) {
    console.log(body)
    return (

        <div className={`card ${header=="" ? "front" : "back"}`}>
            {header=="" ? null : <h3>{header}</h3>}
            {body.map((text, index) => {
                if (typeof(text) === 'string') {
                    return (<p key={index}>{text}</p>)
                }
                else {
                    return text;
                }
            })}
        </div>
    )
}