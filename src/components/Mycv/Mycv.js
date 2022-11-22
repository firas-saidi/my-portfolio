import React from 'react'
import {HomeSection,Information,Hometitle,HomeInfo,HomeDesc,Span,HomeBtn} from './style'
import img from './../Home/img.svg'
function Mycv() {
    
  return (
    <HomeSection>
            <div className="container">
                <Information>
                    <Hometitle>Firas Saidi</Hometitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>UX Designer</Span> and <Span>Front-End</Span> Developer creating modern and resposive designs to Web with React js . Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeBtn    href = "https://drive.google.com/file/d/1K8erFjN0n0uy7TOz7rpuMKpqRCzzpUUk/view?usp=share_link"  target="_blank" rel="noopener noreferrer"><img className='my-btn'  src ={img} alt =''/>My resume</HomeBtn> <i class="bi bi-download"></i>
                </Information>
            </div>
        </HomeSection>
  )
}

export default Mycv