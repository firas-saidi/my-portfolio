import React from 'react'

function Contact() {
  return (
    
       <section className="contact" id="contact">
		<div className="contact-text">
			<h2>Contact Me</h2>
			<h4>Let's Work Together</h4>
			<p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry</p>
			<div className="contact-list">
				<li><a href="#/">Firas Saidi</a></li>
				<li><a href="#/">saidi.firas@outlook.com</a></li>
				<li><a href="#/">54 723 008</a></li>
			</div>
			<div className="contact-icons">
				<a href = "https://linkedin.com/in/firas-saidi-fs"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin' ></i></a>
				<a href = "https://linkedin.com/in/firas-saidi-fs"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook' ></i></a>
				<a href = "https://github.com/firas-saidi"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' ></i></a>
				<a href = "https://drive.google.com/file/d/1K8erFjN0n0uy7TOz7rpuMKpqRCzzpUUk/view?usp=share_link"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram' ></i></a>
				<a href = "https://firas-saidi.github.io/my-portfolio"  target="_blank" rel="noopener noreferrer"><i className='bx bxl-dribbble' ></i></a>
			</div>
		</div>

		<div className="contact-form">
			<form >
				<input type="" placeholder="Enter Your Name" required/>
				<input type="email" placeholder="Enter Your Email" required/>
				<input type="" placeholder="Enter Your Subject"/>
				<textarea name="" id="" cols="40" rows="10" placeholder="Enter Your Message" required></textarea>
				<input type="submit" value="Submit" className='send'/>

			</form>
		</div>
	 </section> 
    
  )
}

export default Contact