import React from 'react'
import './theme.css'
import './Button.css'

/**
 * Props for the Button component.
 *
 * @property style - Optional custom CSS styles for the button.
 * @property children - Optional React node(s) to display inside the button.
 * @property disabled - If true, disables the button.
 * @property onClick - Optional click event handler.
 */
interface ButtonProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * A styled button component for Vaultrice UI.
 *
 * @param props - ButtonProps
 * @returns A React button element.
 */
export function Button ({ onClick, disabled, style, children }: ButtonProps) {
  return (
    <button className='vaultrice-button' style={style} type='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
