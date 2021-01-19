import React, { useEffect, useState } from 'react'
import './index.sass'

const FuckTheSite = ({data}) => {
  
  const [isActive, setIsActive] = useState(data.IsWebsiteActive)

  const classes = isActive ? 'active' : 'unactive'

  function TurnOff(){
    setIsActive(!isActive)
    fetch('http://192.168.0.101:5000/api/turnoff')
      .then(res => res.json())
      .then(json => console.log(json))
  }

  return (
    <div className="fuck-the-site">
      <button className={classes} onClick={() => TurnOff()}>
        Fuck The Page!
      </button>
    </div>
  )
}

export default FuckTheSite 