import githubimg from './assets/github.webp'
import linkedinimg from './assets/linkedin-logo.webp'
import email_logo from './assets/email_logo.png'
export default function ContactImages(){
    return (
    <div className='Contact-images' style={{display:'flex', justifyContent:'end',height:'50px'}}>
        <a href='https://github.com/vxp101'> <img src={githubimg} style={{height:'50px', textAlign: 'center', marginRight:'1cap'}}>
            
        </img>

        </a>
        <a href='https://www.linkedin.com/in/brendon-jennett-66617a1b2/' style={{height:'50px'}}>
            <img src={linkedinimg} style={{height: '50px', textAlign: 'center'}}>
            
            </img>
        </a>
        {/* <a href='mailto:vxp101@gmail.com' > 
            <img style={{height:'65px'}} src={email_logo}></img>
        </a> */}
        {/* <img src={githubimg} style={{fontSize:'20px', textAlign: 'center'}}>
            
        </img> */}
    </div>
    )
}


