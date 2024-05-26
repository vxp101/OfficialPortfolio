import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';
import AboutMe from './AboutMe'
import Contact from './Contact';
import CardContainer from './CardContainer';
import HeaderMobile from './HeaderMobile';
import Footer from './Footer';
import ScrollingLangView from './ScrollingLangView';

function App() {
  return (
    <section id='index'>
      <Header />
      <HeaderMobile />
      <AboutMe />
      <ScrollingLangView />
      <CardContainer />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
