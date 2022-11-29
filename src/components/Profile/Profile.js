import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css";
function Profile() {

  const [profile,setProfile]=useState([]);

  useEffect(()=>{
    axios.get('js/data.json')
    .then(res=>{setProfile(res.data.profile)})
  },[])
 
  const all=profile.map(item =>{
    return(
      <ul className="profile-list" key={item.id}>
      <li className="profile-item">
          <span>Name</span>
          {item.name}
      </li>
      <li className="profile-item">
          <span>Birthday</span>
          {item.birthday}
      </li>
      <li className="profile-item">
          <span>Address</span>
          {item.address}
      </li>
      <li className="profile-item">
          <span>Phone</span>
          {item.phone}
      </li>
      <li className="profile-item">
          <span>Email</span>
          {item.email}
      </li>
      <li className="profile-item">
          <span>My Github</span>
         <a className='mylink' href='https://github.com/firas-saidi' target="_blank" rel="noopener noreferrer"> <span className="web" >{item.website}</span></a> 
      </li>
     
  </ul>
         )
  })


  return (
    <div className="profile_skills " id="profil">
            <div className="container">
            <div className="profile">
      <h2 className="profile-title"><span>My </span>Profile</h2>
                {all}
                </div>
                
                <div className="skills">
                    <h2 className="skills-title">Some <span>skills</span></h2>
                    <p className="skills-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </p>
                    <div className="bar">
                        <span className="title">JavaScript </span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">HTML</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Angular</span>
                        <span className="perc">70%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Profile