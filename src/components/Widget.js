import React from 'react'
import { Link } from 'react-router-dom'

const Widget = props => {
  return (
    <section 
      className="widget"
      style={{ color: "#139c85" }}
    >
      <p>
        {props.icon}
        <a 
          href={props.text.charAt(0) == 'c' ? 
          `mailto:${props.text}` : 
          '/'
          }
          title={props.title}
          target='_blank'
        >
          {props.text}
        </a>
      </p>
    </section>
  )
}

export default Widget
