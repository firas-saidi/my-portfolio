import React from 'react'

function About() {
  return (
    <section className="about" id="about">
    

    <div className="about-text">
        <h2>About Me</h2>
        <h4>Hi, Im Here To Help Your Next Project</h4>
        <p>Currently a student at the Faculty of Legal, Economic and Management Sciences in Jendouba, I am looking for an internship (2nd masters) the field of Front-End and/Back-End web development in React js for a period of 4 to 6 months from February 2023.</p>
        <div className="about-gri">
            <div className="about-in">
                <h5>1. Problem Solving</h5>
            </div>

            <div className="about-in">
                <h5>2. Creative Idea</h5>
            </div>

            <div className="about-in">
                <h5>3. Search a lot</h5>
            </div>

            <div className="about-in">
                <h5>4. High Quality</h5>
                
            </div>

        </div>
        <a href = "https://linkedin.com/in/firas-saidi-fs"  target="_blank" rel="noopener noreferrer" className="btn">Contact Me in Linkdin</a>
    </div>
    <div className="about-img">
        <img src="/img/me.jpg" alt=""/>
    </div>
</section>

  )
}

export default About