import React, { useEffect, useState, Component } from 'react'
import * as $ from 'jquery'
import './index.sass'
import img1_1 from './1_1.png'
import img2_2 from './2_2.png'
import img3_3 from './3_3.png'
import img1 from './1.png'
import img2 from './2.png'
import img3 from './3.png'

class Services extends Component {

  componentDidMount() {
    $('.service').hover(
      function(e) {
        const id = $(e.target).attr('image-target');
        $('#' + id).fadeIn();
      }, 
      function() {
        $('.serBg').fadeOut(500)
      }
    );
  }

  render() {
    return (
      <div className="services">
        <img id="serBg1" className="serBg" src={img1} />
        <img id="serBg2" className="serBg" src={img2} />
        <img id="serBg3" className="serBg" src={img3} />
        <div href="#" image-target="serBg1" className="service">
          <img src={img1_1} />
          <div className="title">
            <h3>Commerical</h3>
            <p>Interior Design</p>
          </div>
        </div>
        <div href="#" image-target="serBg2" className="service">
          <img src={img2_2} />
          <div className="title">
            <h3>Residential</h3>
            <p>Interior Design</p>
          </div>
        </div>
        <div href="#" image-target="serBg3" className="service">
          <img src={img3_3} />
          <div className="title">
            <h3>Architecture</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Services