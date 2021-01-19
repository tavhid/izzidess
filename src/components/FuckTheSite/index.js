import React, { useEffect, useState } from 'react'
import './index.sass'

const FuckTheSite = ({data, url}) => {
  
  const [isActive, setIsActive] = useState(data.IsWebsiteActive)

  const classes = isActive ? 'activated' : 'unactivated'

  function TurnOff(){
    setIsActive(!isActive)
    fetch(url)
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