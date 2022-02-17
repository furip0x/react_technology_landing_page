import React, { useState } from "react"

type FaqItems = {
  id: number
  title: string
  desc: string
}

const FaqItem = ({ id, title, desc }: FaqItems) => {
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <div className={`faq-item ${showInfo && "toggled"}`}>
      <div className="faq-header">
        <div className="faq-title">{title}</div>
        <button
          type="button"
          className="faq-toggle-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
          )}
        </button>
      </div>
      {showInfo && <div className="faq-desc">{desc}</div>}
    </div>
  )
}

export default FaqItem
