import React from 'react'
import { 
  Grid, 
  Row, 
  Title,
  Datas as data,
  Card,
  Cards,
  Widget,
  Img 
} from '../store'
import Button from './Button'

const About = () => {

  const { datas, datasButtons } = data.widgets

  return (
    <section className="about">
      <Grid>
        <Row><Title mainTitle="moi en quelque mots" /></Row>
        <Row>
          <Cards>
            <Card>
              <Img 
                imageSrc={require('../img/avatar.jpg')}
                imageAlt={'Photo de profil'}
              />
              { }
              {datas.map((data, index) => {
                return <Widget
                  key={index}
                  text={data.text}
                  icon={data.icon}
                 />
              })}
            </Card>
            <Card 
              style={{
                lineHeight: '1.4rem',
                width: "100%",
                textAlign: "justify"
              }}>
              <p className="blue">Hello, moi cest claude</p>
              <p style={{ padding: '1.2rem' }}>Je suis un passionné d’informatique et de technologies depuis mon plus jeune âge.</p>
              <p style={{ padding: '1.2rem' }}>Après avoir apris sur internet et acquise quelques compétences diverses dans le web et autres, j'ai decider, il y a un an, de me former au sein de la webacademie By epitech au metier de developpeur web fullstack, car cette dernière est axé sur l'apprentissage par projet et permets dêtre autonôme assez tôt.</p>

              <p style={{padding:'1.2rem'}}>
              Ce qui me fait aimer ce metier, c'est que tous les jours est un apprentissage permanent et que grâce à celui ci, on est constamment emmener à innover et se remettre en question.
              </p>

              <div className="button">
                {datasButtons.map((data, index) => <Button key={index}>{data}</Button>)}
              </div>
            </Card>
          </Cards>
        </Row>
      </Grid>
    </section>
  )
}

export default About
