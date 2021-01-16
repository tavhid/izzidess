import React from 'react'
import './index.sass'

const SetionTitle = ({title, subTitle, id}) => {
  return (
    <div id={id} className="section-title">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
} 

export default SetionTitle