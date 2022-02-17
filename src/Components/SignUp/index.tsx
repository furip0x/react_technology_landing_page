import React, { useState } from "react"
import { useGlobalContext } from "../../context"
import "./signup-styles.css"

const SignUp = () => {
  const { data, showModal } = useGlobalContext()
  const [input, setInput] = useState<string>("")

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    showModal(
      "Thanks for signing up.",
      "We'll keep you posted on the latest device tips, product updates, news and special offers."
    )
  }

  return (
    <section className="signup">
      <div className="container">
        <h2 className="signup-title">{data.signUp.title}</h2>
        <form className="signup-form" onSubmit={handleForm}>
          <input
            type="email"
            name="email"
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
