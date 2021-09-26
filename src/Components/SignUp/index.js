import React, { useState } from 'react'
import './signup-styles.css'
import { useGlobalContext } from '../../context'

const SignUp = () => {
  const { data } = useGlobalContext()
  const [input, setInput] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
  }

  return (
    <section className='signup'>
      <div className='container'>
        <h2 className='signup-title'>{data.signUp.title}</h2>
        <form className='signup-form' onSubmit={handleForm}>
          <input
            type='email'
            name='email'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={data.signUp.emailPlaceholder}
            required
          />
          <button>{data.signUp.sendBtnText}</button>
        </form>
      </div>
    </section>
  )
}

export default SignUp
