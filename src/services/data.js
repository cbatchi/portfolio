import React from 'react'
import { FaBook, FaEnvelope, FaUserGraduate, FaMapMarkedAlt, FaUser } from 'react-icons/fa'
import Avatar from '../img/avatar.jpg'

const data = {
  navbar: {
    menu: [
      { title: 'acceuil', ancre: '' },
      { title: 'a propos', ancre: 'about' },
      { title: 'compétences', ancre: 'skill' },
      { title: 'réalisations', ancre: 'projet' },
      { title: 'contact', ancre: 'contact' }
    ]
  },
  banner: {
    content: [
      { title: 'Claude Batchi' },
      { title: 'developpeur web fullstack' }
    ],
    button: [
      { title: 'mon portfolio', icon: <FaBook /> },
      { title: 'curriculum', icon: <FaUserGraduate /> },
      { title: 'contact', icon: <FaEnvelope /> }
    ]
  },
  widgets: {
    datas: [
      { text: 'claude.batchi@epitech.eu', icon: <FaEnvelope />, title: 'mail' },
      { text: '26 ans', icon: <FaUser />, title: 'age' },
      { text: 'Paris, France', icon: <FaMapMarkedAlt />, title: 'localisation'}
    ],
    datasButtons: ['mon cv', 'linkedin', 'github']
  }
}

export default data