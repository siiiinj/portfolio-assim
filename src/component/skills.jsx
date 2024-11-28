import './skills.css';

function Skills() {
  return (
    <div>
        <h1>Skills</h1>
        <div className="card_comp">
        <div className="skill-card">
            <h2>Front-End</h2>
            <br />
            <br />
            <div className="skill-description">
            <h2>HTML</h2>
            <h2>CSS</h2>
            <h2>JavaScript</h2>
            <h2>React</h2>
            <h2>php</h2>
            <h2>sql</h2>
            <br />
            </div>
        </div>
        <div className="skill-card">
            <h2>Web Design</h2>
            <br />
            <br />  
            <div className="skill-description">
                <h2>figma</h2>
                <h2>Photoshop</h2>
                <h2>Canva</h2>
                <h2>illustrator</h2>
                <br />
            </div>
        </div>
        </div>
    </div>
  );
}

export default Skills;