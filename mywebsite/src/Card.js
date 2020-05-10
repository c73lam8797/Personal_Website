import React from 'react'

export default function Card({header, body}) {
    return (
        <div className="column">
        <div className="card">
            <h3>{header}</h3>
            {body.map((text, index) => {
                return (<p key={index}>{text}</p>)
            })}
        </div>
    </div>
    )
}