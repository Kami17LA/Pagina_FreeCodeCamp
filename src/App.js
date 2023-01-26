import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimony
          name="Shawn Wang"
          city="Singapore"
          position="Software Engineer"
          image="Shawn"
          photo_student="photo Shawn"
          company="Amazon"
          text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />

        <Testimony
          name="Sarah Chima"
          city="Nigeria"
          position="Software Engineer"
          image="Sarah"
          photo_student="photo Sarah"
          company="ChatDesk"
          text="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />

        <Testimony
          name="Emma Bostian"
          city="Sweden"
          position="Software Enginee"
          image="Emma"
          photo_student="photo Emma"
          company="Spotify"
          text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
