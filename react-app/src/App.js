import './App.css';
import NavBar from './components/navBar.js';
import Main from './components/Main.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import ThemeToggler from './components/themeToggler.js';

function App() {
  return (
    <>
      <ThemeToggler />
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
