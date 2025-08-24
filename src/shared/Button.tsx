import React from 'react'

import './Button.css'

interface ButtonProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button ({ onClick, disabled, style, children }: ButtonProps) {
  return (
    <button className='vaultrice-button' style={style} type='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
