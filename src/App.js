import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';
import AboutMe from './AboutMe'
import Contact from './Contact';
import CardContainer from './CardContainer';

function App() {
  return (
    
    <section id='index'>
      <Header />
      <AboutMe />
      <CardContainer />
      <Contact />
    </section>
  );
}

export default App;
