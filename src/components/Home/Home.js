import AnimatedTextCharacter from '../motion/AnimatedTextCharacter'
import  AnimatedTextWord  from '../motion/AnimatedTextWord'
import Hi from '../motion/Hi'
import NameAnimated from '../motion/NameAnimated'
import img from './img.svg'


function Home() {
  return (
    <section className="home" id="home">
		
		
		<Hi text="Hello"/>
		<AnimatedTextWord word = "IM FIRAS "/>
		<NameAnimated text="SAIDI"/>
		<AnimatedTextCharacter text =" Front-End Developer React js "/>	
		<a className="btn" href = "https://drive.google.com/file/d/1K8erFjN0n0uy7TOz7rpuMKpqRCzzpUUk/view?usp=share_link" target="_blank" rel="noopener noreferrer">  <img className='my-btn'  src ={img} alt =''/>Download Cv </a>
	
	</section>
  )
}

export default Home
	
