import Card from './Card'
import HeaderImage1 from './assets/HeaderImage1.jpg'
import QuizGameImage from './assets/QuizGame.png'
import BookmarkApp from './assets/BookmarkApp.png'
import CardIframe from './CardIframe'
import MyPortfolio from './assets/MyPortfolio.png'
import SendToEmail from './assets/SendToEmail.png'
export default function CardContainer(){
   return (
   <section id='Card-section' className='section'>
         <div id='BeforeCardContainer'></div>
         <u><h1>Projects</h1></u>
         <div id="Card-container">
            <Card imgsrc={BookmarkApp} alttext="" link="https://vxp101.github.io/brendon-bookmarks-app/" cardtext="This is the BookmarkApp I made at Thinkful. I made this utilizing RESTful APIs, CSS, HTML and jQuery inside Visual Studio."/>
            <Card imgsrc={QuizGameImage} alttext="Quiz Game" link="https://vxp101.github.io/QuizzesForWork/" cardtext="This is a quiz game I made in HTML, CSS, and Vanilla Js using Notepad as the IDE. I made this purely as a challenge of if I could make a website with no internet" />
            <Card imgsrc={MyPortfolio} alttext="This Webpage" cardtext="I built this webpage using React and Node.Js. In the future I will be adding PostgreSQL and adding Upvotes and Downvotes."/>
            <Card imgsrc={SendToEmail} link='https://github.com/vxp101/ContextMenuSendToEmail' alttext="Send To Email" cardtext="I built this using Python, Registry Editor, and Batch. Then I used PyInstaller to create a function app that sends files directly to my email without hassle"/>
        </div>
      <div id='AfterCardContainer'></div>
    </section>
   )
}