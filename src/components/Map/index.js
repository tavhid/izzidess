import React from 'react'
import './index.sass'

const Map = () => {
  return (
    <div className="map" style={{WebkitFilter: 'grayscale(100%)', filter: 'grayscale(100%)'}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d779.7351040287281!2d68.78359256056865!3d38.581219908477685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d170e0e679bd%3A0x58c2ea03fc5860bf!2z0KjQvtGF0LfQvtC00LDQuCDQpNC-0YDRgQ!5e0!3m2!1sru!2s!4v1605546407937!5m2!1sru!2s" width="100%" height={500} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
    </div>
  )
}

export default Map