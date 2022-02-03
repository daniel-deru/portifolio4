import styles from "../styles/Skills.module.css"

const skills = () => {
  const LANGUAGES = ["HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "TypeScript"]
  return (
    <div className={styles.skills}>
        <div className="Languages">
          <div>Languages</div>
          
        </div>
        <div className="Frameworks Other">

        </div>
    </div>
  );
};

export default skills;
