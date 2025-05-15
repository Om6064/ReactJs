import React from 'react'
import Title from './Title'
import Archivments from './Archivments'

const ContactLeft = () => {
  return (
    <div className="">
      <Title main="Contact Us" des="We're open to talk to good people." align="left" />

     
      <hr />
      <Archivments title="123 King Street, London W60 10250" des="See more" icon="bi bi-geo-alt-fill" />
      <Archivments title="help@zoyothemes.com" des="Say hello" icon="bi bi-layers" />
      <Archivments title="(+01) 1234 5678 00" des="call now" icon="bi bi-lock" />
    </div>
  )
}

export default ContactLeft