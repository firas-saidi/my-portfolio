import styled from 'styled-components'

export const WorkSection=styled.div`
    height: auto;
    padding: 50px 0;
    overflow: hidden;
    background: #020312;
    
`
export const TorkTitle=styled.h2`
font-size: 60px; 
margin-left:40%;
@media (max-width: 970px){
    margin: auto;
    text-align: center;
}

`
    

export const Span=styled.span`
 font-weight: normal;

`
   
export const WorkPart=styled.div `
    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;    
    margin-left: ${props => props.first === 1 ? '0' : '5%'};
    @media (max-width: 575px) {
   
        width: 100%;
        float: none;
        margin-left: 0;
        
        
    }
   
    
    
`


export const WorkIcon=styled.i`
    color: #888;
    margin-bottom: 20px;

`
 

export const WorkTitle=styled.h4 `
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;
`
  


export const WorkLine=styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;

`
  

export const WorkDesc=styled.p `
font-size: 14px;
    color: #888;
    padding: 20px;

`
    

