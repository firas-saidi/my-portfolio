import TrackVisibility from 'react-on-screen';
import 'animate.css';

function About() {
  return (
    <section className="about bsection" id="about">
        <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                 <img className='Himg' src="img/me.jpg" alt=""/>
                </div>}
            </TrackVisibility>
    
  
    <div className="about-text">
        <h2>About Me</h2>
        <h4>Hi, Im Here To Help Your Next Project</h4>
        <p>Currently a student at the Faculty of Legal, Economic and Management Sciences in Jendouba, I am looking for an internship (2nd masters) the field of Front-End and/Back-End web development in React js for a period of 4 to 6 months from February 2023.</p>
        <div className="about-gri">
            <div className="about-in">
                <h5>1. High Quality Work</h5>
            </div>

            <div className="about-in">
                <h5>2. Constant Communicaion</h5>
            </div>

            <div className="about-in">
                <h5>3.Creative Idea</h5>
            </div>

            <div className="about-in">
                <h5>4. Analysis and problem solving</h5>
                
            </div>

        </div>
        <a href = "https://linkedin.com/in/firas-saidi-fs"  target="_blank" rel="noopener noreferrer" className="btn">Contact Me in Linkdin</a>
    </div>
    
</section>

  )
}

export default About