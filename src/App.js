import './App.css';
import Formation from './component/formation';
import btslogo from './assets/image.png';
import etnalogo from './assets/ETNA.png';
import Header from './component/header';
import Hero from './component/Hero';
import './component/formation.css';
import Skills from './component/skills';
import Projects from './component/projects';
import linkyyimg from './assets/LINKYY_APP.png';
import drone from './assets/DRONE.png';
import DESIGN from './assets/DESIGN.png';
import ANNEXE from './assets/PROJET-ANEX.png';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
        <Header />
        <Hero />
          <h1>Formations</h1>
          <br/>
          <br/>
        <div id='formations'>
          <Formation img={btslogo} alt="avatar" name="bts snir" date="2022-2024" description="diplômé d’un BTS SNIR au Lycée Louis Armand j’ai été former au développement web avec du HTML CSS un peu de C++ et de l'administration de système réseau." link="https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-cybersecurite-informatique-et-reseaux-electronique-option-a-informatique-et-reseaux"/>
          <Formation img={etnalogo} alt="avatar" name="ETNA" date="2024" description="I'm studying for a Bachelor 3 in IS Project Design at Etna and I'm training in IT development." link="https://etna.io/formation/cycle-bachelor3/"/>
        </div>
        <br/>
        <br/>
        <br/>
        <Skills />
        <br/>
        <br/>
        <br/>
        <h1>Projects</h1>
        <div id='Projects'>
          <Projects projects="LinkyyApp" image={linkyyimg} description="Project to create amobile application to track and manage electricity consumption and customer accounts." repo="https://github.com/KVJJJJ/LINKYY-APP"/>
          <Projects projects="DRONE" image={drone} description="This project was a website, I had to create it to help me to learn HTML & CSS" repo="https://github.com/KVJJJJ/Drone-WEBSITE"/>
          <Projects projects="DESIGN" image={DESIGN} description="Here you'll find design projects, commissions and personal projects." repo="https://github.com/KVJJJJ/DESIGN.gitE"/>
          <Projects projects="ANEX" image={ANNEXE} description="HHere are some of the projects we did in the pool of the Etna" repo="https://github.com/KVJJJJ/Projet-Annex"/>
        </div>
        <br/>
        <Footer />
    </div>
  );
}

export default App;
