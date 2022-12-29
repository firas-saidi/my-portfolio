import React, { useEffect, useState } from 'react'
import WithDep from '../WithDep'
import NoDep from '../NoDep'


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
			<div className='mylink'  >
				<img  src={one.image} alt=""/>
				<div className="main-row">
					<div className="row-text">
						<h6>{one.name}</h6>
					</div>
					<div className="row-icon">
						<i className='bx bx-heart'></i>
					</div>
				</div>
				<h3 className='text-white'>{one.det}</h3>
				{one.link.length? <WithDep link={one.link}/>:<NoDep code={one.code}/>}
				</div>
			
			</div>
		)
	})
  return (
    <section className="portfolio " id="portfolio">
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



