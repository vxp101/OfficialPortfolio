import ContactImages from './ContactImages'
import card_background from './assets/card_background.jpg'
import dog_card from './assets/dog_photo1.png'
import githubimg from './assets/github.webp'
import linkedinimg from './assets/linkedin-logo.webp'
export default function AboutMe(props){
    return (
        <section id='AboutMe-section' className='section' style={{}}>
            <u><h1 style={{textAlign:"center"}}>About</h1></u>
            <div id="AboutMe-container" style={{display:"flex"}}>
                <img id='AboutImg' src={dog_card} style={{width:'500px'}}/>
                <div>
                    <p id="introduction" style={{fontSize:'42px',
                                                height:'400px',
                                                width:'500px',
                                                textAlign: 'center', 
                                                marginTop: "5%"}}>
                        Hi, my name is Brendon, I enjoy the outdoors and like to mix in the joys of life into each of my projects. Thank you for taking the time to look at my portfolio.
                    </p>
                    <div className='Contact-images' style={{display:'flex', 
                                                            justifyContent:'end',
                                                            height:'50px'}}>
                       <ContactImages />
                    </div>
                </div>
            </div>
            
        </section>
    )
}