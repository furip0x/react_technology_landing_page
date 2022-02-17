import React from "react"
import "./about-styles.css"
import AboutImg from "../../Assets/image/about-img.jpg"
import Features from "./Features"
import { useGlobalContext } from "../../context"

const About = () => {
  const { data } = useGlobalContext()

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="about-title-holder">
              <h1 className="about-title">
                Some <span>thing</span>
              </h1>
              <div className="about-subtitle">{data.about.title}</div>
            </div>
            {data.about.descs.map((descItem) => {
              return <p key={descItem.id}>{descItem.text}</p>
            })}
          </div>
          <div className="about-img">
            <img src={AboutImg} alt="about" />
          </div>
        </div>
        <Features />
      </div>
    </section>
  )
}

export default About
