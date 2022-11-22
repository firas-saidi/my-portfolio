import img from './img.svg'


function Home() {
  return (
    <section className="home" id="home">
		<div className="home-text">
			<h4>Hello</h4>
			<h1>I'M FIRAS <br/> SA<span>IDI</span></h1>
			<h3>Front-End Developer "React js" 
			
			</h3>
			<a className="btn" href = "https://drive.google.com/file/d/1K8erFjN0n0uy7TOz7rpuMKpqRCzzpUUk/view?usp=share_link" target="_blank" rel="noopener noreferrer">  <img className='my-btn'  src ={img} alt =''/>Hire Me </a>
		</div>
	</section>
  )
}

export default Home
	
