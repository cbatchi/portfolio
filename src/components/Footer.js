import React from 'react'
import { Grid, Row, Paragraph } from '../store'

const Footer = () => {
  return (
    <footer className="footer">
      <Grid>
        <Row>
          <Paragraph Paragraph="&copy; Claude Batchi Portfolio - Tous droits réservés." />
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer
