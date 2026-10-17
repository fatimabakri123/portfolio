const skills = [
  "React",
  "JavaScript",
  "Next.js",
  "Laravel",
  "PHP",
  "MySQL",
  "Supabase",
  "HTML & CSS",
  "Tailwind CSS",
  "Git & GitHub",
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>0{index + 1}</span>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;