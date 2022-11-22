import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Portfolio() {

	const [port,setPort]=useState([])
	useEffect(()=>{
		axios.get('js/data.json') 
		.then(res=>{setPort(res.data.portfolio)})
		
	},[])

	const all=port.map(one=>{
		return(
			<div className="row" key={one.id} > 
			<a className='mylink' href={one.link} target="_blank" rel="noopener noreferrer">
				<img src={one.image} alt=""/>
				<div className="main-row">
					<div className="row-text">
						<h6>{one.name}</h6>
					</div>
					<div className="row-icon">
						<i className='bx bx-heart'></i>
					</div>
				</div>
				<h3 className='text-white'>{one.det}</h3>
				<button className='btn'>Open App ! </button>
				</a>
			
			</div>
		)
	})
  return (
    <section className="portfolio" id="portfolio">
		<div className="main-text">
			<h2>My Portfolio</h2>
			<h4>Some Of My Application with React js </h4>
		</div>

		<div className="portfolio-content">
			{all}	
		
		</div>
	</section>

  )
}

export default Portfolio



