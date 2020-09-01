import React from 'react'

export function Card({content, type}) {
    return (
      <div className={`card ${type}`}>
        {content}
      </div>
    )
}