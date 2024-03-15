import card_background from './assets/card_background.jpg'
import githubimg from './assets/github.webp'
import linkedinimg from './assets/linkedin-logo.webp'
export default function AboutMe(props){
    return (
        <section className='section' style={{margin:'5cap'}}>
            <u><h1 style={{textAlign:"center"}}>About</h1></u>
            <div style={{display:"flex"}}>
                <img src={card_background} style={{width:'500px'}}/>
                <div>
                    <p style={{fontSize:'20px', height:'400px', textAlign: 'center'}}>
                        Hi, my name is Brendon, I am a programmer that enjoys spending time outdoors
                    </p>
                    <div className='Contact-images' style={{display:'flex', justifyContent:'end',height:'50px'}}>
                       <a href='https://github.com/vxp101'> <img src={githubimg} style={{height:'50px', textAlign: 'center', marginRight:'1cap'}}>
                            
                        </img>

                        </a>
                        <a href='https://www.linkedin.com/in/brendon-jennett-66617a1b2/' style={{height:'50px'}}>
                            <img src={linkedinimg} style={{height: '50px', textAlign: 'center'}}>
                            
                            </img>
                        </a>
                        {/* <img src={githubimg} style={{fontSize:'20px', textAlign: 'center'}}>
                            
                        </img> */}
                    </div>
                </div>
            </div>
        </section>
    )
}