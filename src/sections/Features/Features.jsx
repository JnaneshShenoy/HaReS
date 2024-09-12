import styles from './ProjectsStyles.module.css';
import spectralsentinel from '../../assets/spectralsentinel.png';
import LexiQuest from '../../assets/LexiQuest.png';
import InMaS from '../../assets/InMaS.png';
import TaMar from '../../assets/TaMar.png';
import ProjectCard from '../../common/ProjectCard';

function Features() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Features</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={spectralsentinel}
          link="https://github.com/arclops/Spectral-Sentinel"
          h3="Recommender"
          p="face shape detection"
        />
        <ProjectCard
          src={LexiQuest}
          link="https://github.com/JnaneshShenoy/LexiQuest/tree/master"
          h3="Hairstyles"
          p="Generative clone"
        />
        <ProjectCard
          src={InMaS}
          link="https://github.com/JnaneshShenoy/ReMaS"
          h3="Facial hair"
          p="Beard style recommender"
        />
        <ProjectCard
          src={TaMar}
          link="https://github.com/JnaneshShenoy/Task-Manager"
          h3="All genders"
          p="it's free !!"
        />
      </div>
    </section>
  );
}

export default Features;
