import card_background from './assets/card_background.jpg'
import githubimg from './assets/github.webp'
import linkedinimg from './assets/linkedin-logo.webp'
export default function AboutMe(props){
    return (
        <section id='AboutMe-section' className='section' style={{}}>
            <u><h1 style={{textAlign:"center"}}>About</h1></u>
            <div style={{display:"flex"}}>
                <img src={card_background} style={{width:'500px'}}/>
                <div>
                    <p style={{fontSize:'30px', height:'400px', width:'500px', textAlign: 'center', marginTop: "20%"}}>
                        Hi, my name is Brendon, I enjoy the outdoors and like to mix in the joys of life into each of my projects. Thank you for taking the time to look at my portfolio. I can't wait to work with you.
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