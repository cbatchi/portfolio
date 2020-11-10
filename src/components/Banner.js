import React from 'react'
import { Button } from '../store'
import { Link } from 'react-router-dom'

const Banner = ({ infos, buttonInfos }) => {
  return (
    <section className="banner">
      <h1 className="banner-title">
        {infos.map((info, index) =><><span key={index}>{info.title}</span><br /></>)}
      </h1>
      <div className="banner-panel">
        {buttonInfos.map((btninfo, index) => <Button 
            key={index} 
            className="btn btn-primary btn-action"
          >
            <Link to={"#!"}>
              {btninfo.icon}
              {btninfo.title}
            </Link>
          </Button>)}
      </div>
    </section>
  )
}

export default Banner
