import ContactImages from "./ContactImages";
import githubimg from './assets/github.webp'
import linkedinimg from './assets/linkedin-logo.webp'
import react_logo from './assets/logo192.png'

export default function Footer(){
   return (
        <section id='footer'>
            <footer>
                <div>
                   <ContactImages />
                </div>
                <div style={{display:"flex"}}>
                    <img id='react-logo' src={react_logo} style={{width:'65px'}}></img>
                    <p style={{fontSize:'20px'}}>Made In React</p>
                </div>
            </footer>
        </section>
   ) 
}