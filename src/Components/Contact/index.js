import React, { useState } from 'react'
import { useGlobalContext } from '../../context'
import './contact-styles.css'

const Contact = () => {
  const { data, setIsModalOpen, showModal } = useGlobalContext()

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const setInput = (e) => {
    const { value, name } = e.target
    setInputs((prevValue) => {
      return { ...prevValue, [name]: value }
    })
  }

  const handleForm = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
    showModal('Message sent!', 'Your message has been sent successfully!. We will respond to you within 24 hours.')
  }

  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='contact-wrapper'>
          <h2 className='section-title'>{data.contact.title}</h2>
          <p className='section-desc'>{data.contact.subTitle}</p>
          <form className='contact-form' onSubmit={handleForm}>
            <input
              type='text'
              name='name'
              value={inputs.name}
              placeholder={data.contact.namePlaceholder}
              onChange={setInput}
              required
            />
            <input
              type='email'
              name='email'
              value={inputs.email}
              placeholder={data.contact.emailPlaceholder}
              onChange={setInput}
              required
            />
            <textarea
              name='message'
              value={inputs.message}
              placeholder={data.contact.messagePlaceholder}
              onChange={setInput}
              required
            ></textarea>
            <button>{data.contact.sendBtnText}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
