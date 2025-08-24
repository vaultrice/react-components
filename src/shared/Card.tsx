import React from 'react'

import './Card.css'

interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export function Card ({ style, children }: CardProps) {
  return (
    <div className='vaultrice-card' style={style}>
      {children}
    </div>
  )
}
