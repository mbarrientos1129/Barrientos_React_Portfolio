const styles = {
  heading: {
    margin: 0,
    padding: '75px',
    textAlign: 'center',
    fontSize: '3rem',
  },

  paragraph: {
    flex: '70%',
    padding: '20px',
    height: '250px',
    margin: '0',
    textAlign: 'center',
    fontSize: '20px'
  }
};

function About() {
  return (
    <div className="App">
      <h2 style={styles.heading}>About Me</h2>
        <p style={styles.paragraph}>I am orginally from a small town named Rahway New Jersey. I have had an intrest in the tech
          world since I could remeber. Coding really peaked an intrest in me later on in life in my mid 20's but
          that's fine becasue learning new skills is amazing and will help realize my potential.
          Coding really intersted me since there are a plerthera of subjects and languaged to learn. The "funland" of
          languages enguages myself and pushes me to learn more and more each day. Below I have attched some of my
          recent work as a developer. Leaning to be a devloper is a dream that
          I want to show case to secure my seat in the tech world.
        </p>
    </div>
  );
}

export default About;
