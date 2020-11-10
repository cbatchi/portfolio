import React from 'react'

const Title = ({ mainTitle, color }) => <h2 
  style={{
    width: '100%',
    color: `${color ? color : '#121824'}`,
    fontSize: '1.5rem',
    position: 'relative',
    textTransform: 'uppercase'
  }}
>
  {mainTitle}
</h2>

export default Title
