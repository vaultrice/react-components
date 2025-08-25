import React, { useEffect, useState } from 'react'

import './Meter.css'

interface MeterProps {
  percentage?: number
  style?: React.CSSProperties
}

export function Meter ({ percentage = 0, style }: MeterProps) {
  const [usedPercentage, setUsedPercentage] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setUsedPercentage(percentage)
    }, 1300)
  }, [percentage])

  return (
    <div className='vaultrice-meter-container' style={style}>
      <div className={`vaultrice-meter-control ${usedPercentage > 100 ? 'vaultrice-meter-control-error' : usedPercentage > 90 ? 'vaultrice-meter-control-warning' : ''}`}>
        <div className='vaultrice-meter-track' style={{ width: usedPercentage < 100 ? '100%' : `${100 / (usedPercentage / 100)}%` }} />
        <div className='vaultrice-meter-state' style={{ width: `${usedPercentage}%`, borderRadius: usedPercentage >= 100 ? '14px' : '14px 0 0 14px', opacity: usedPercentage === 0 ? 0 : 1 }} />
      </div>
    </div>
  )
}
