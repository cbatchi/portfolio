import React from 'react'

const Img = ({ imageSrc, imageAlt }) => <div
  style={{
    minHeight: '200px',
    marginBottom: '1.2rem'
  }}
>
  <img
  src={imageSrc} 
  alt={imageAlt}
  style={{
      display: 'block',
      width: '100%',
      height: 'auto'
  }}
  />
</div> 

export default Img
