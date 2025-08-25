import React, { useEffect, useState } from 'react'

import './Meter.css'

/**
 * Props for the Meter component.
 *
 * @property percentage - The percentage value to display in the meter (0-100). If above 100, shows error styling.
 * @property style - Optional custom CSS styles for the meter container.
 */
interface MeterProps {
  percentage?: number
  style?: React.CSSProperties
}

/**
 * A visual meter bar for displaying percentage values.
 * Animates to the given percentage after mount/update.
 *
 * @param props - MeterProps
 * @returns A React element representing the meter bar.
 */
export function Meter ({ percentage = 0, style }: MeterProps) {
  const [usedPercentage, setUsedPercentage] = useState(0)

  useEffect(() => {
    // Animate meter fill after a delay
    setTimeout(() => {
      setUsedPercentage(percentage)
    }, 1300)
  }, [percentage])

  return (
    <div className='vaultrice-meter-container' style={style}>
      <div
        className={`vaultrice-meter-control ${
          usedPercentage > 100
            ? 'vaultrice-meter-control-error'
            : usedPercentage > 90
            ? 'vaultrice-meter-control-warning'
            : ''
        }`}
      >
        <div
          className='vaultrice-meter-track'
          style={{
            width:
              usedPercentage < 100
                ? '100%'
                : `${100 / (usedPercentage / 100)}%`
          }}
        />
        <div
          className='vaultrice-meter-state'
          style={{
            width: `${usedPercentage}%`,
            borderRadius:
              usedPercentage >= 100
                ? '14px'
                : '14px 0 0 14px',
            opacity: usedPercentage === 0 ? 0 : 1
          }}
        />
      </div>
    </div>
  )
}
