import React, { useEffect, useState, Component } from 'react'
import * as $ from 'jquery'
import './index.sass'

class Services extends Component {
  constructor(props) {
    super(props);
  }

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
    const data = this.props.data

    return (
      <div className="services">
        <img id="serBg1" className="serBg" src={data._1} />
        <img id="serBg2" className="serBg" src={data._2} />
        <img id="serBg3" className="serBg" src={data._3} />
        <div href="#" image-target="serBg1" className="service">
          <img src={data.mini_1} />
          <div className="title">
            <h3>Commerical</h3>
            <p>Interior Design</p>
          </div>
        </div>
        <div href="#" image-target="serBg2" className="service">
          <img src={data.mini_2} />
          <div className="title">
            <h3>Residential</h3>
            <p>Interior Design</p>
          </div>
        </div>
        <div href="#" image-target="serBg3" className="service">
          <img src={data.mini_3} />
          <div className="title">
            <h3>Architecture</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Services