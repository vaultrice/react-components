import React from 'react'
import './theme.css'
import './Card.css'

/**
 * Props for the Card component.
 *
 * @property style - Optional custom CSS styles for the card container.
 * @property children - Optional React node(s) to display inside the card.
 */
interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * A styled card container for Vaultrice UI.
 *
 * @param props - CardProps
 * @returns A React div element styled as a card.
 */
export function Card ({ style, children }: CardProps) {
  return (
    <div className='vaultrice-card' style={style}>
      {children}
    </div>
  )
}
