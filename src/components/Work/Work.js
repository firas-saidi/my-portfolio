import React ,{ Component } from 'react'
import axion from "axios"
import   {WorkSection,TorkTitle,WorkIcon,WorkLine,WorkDesc,WorkPart,Span,WorkTitle } from'./style.js'
class Work extends Component {
  state={
    works : []
  }
  componentDidMount(){

    axion.get('js/data.json').then(res =>{this.setState({works:res.data.works}) })
     
  }
    

  render(){
const {works}=this.state 
const worksList=works.map(workItem=> {
  return(
    <WorkPart first={workItem.id} key={workItem.id}>
            <WorkIcon className={workItem.icon_name}></WorkIcon>
            <WorkTitle>{workItem.title}</WorkTitle>
            <WorkLine/>
            <WorkDesc>
            {workItem.body}
            </WorkDesc>
        </WorkPart>
  )
})
  return (
    <div className='r '>
          <WorkSection id="work">
    <div className="container">
        <TorkTitle><Span>My</Span> Work</TorkTitle>
      {worksList}
        
    </div>
</WorkSection>
    </div>

  )
}}

export default Work