import Card from './Card'
import HeaderImage1 from './assets/HeaderImage1.jpg'
import QuizGameImage from './assets/QuizGame.png'

export default function CardContainer(){
   return (
   <section id='Card-section' className='section'>
         <div id='BeforeCardContainer'></div>
         <u><h1>Projects</h1></u>
         <div id="Card-container">
            <Card cardtext="Hi, my name is Brendon. I enjoy programming and nature. I look to make my projects as tranquil as it would be in nature. If you want to get into contact with me, my contact info is at the bottom." imgsrc={HeaderImage1} alttext=""/>
            <Card cardtext="Hi, my name is Brendon. I enjoy programming and nature. I look to make my projects as tranquil as it would be in nature. If you want to get into contact with me, my contact info is at the bottom." imgsrc={QuizGameImage} alttext="Quiz Game"/>
            <Card cardtext="" imgsrc="" alttext="No image" />
            
        </div>
      <div id='AfterCardContainer'></div>
    </section>
   )
}