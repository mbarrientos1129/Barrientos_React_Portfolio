const styles = {
  heading: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: 'lightslategrey',
    color: 'white',
  },

  anchor: {
    padding: '14px 20px',
    textAlign: 'center',
    color: 'white'
  }
}

function Nav() {
  return (
    <div className="App">
      <nav style={styles.heading}>
        <a style={styles.anchor} href="/contact">Contact Me</a>
        <a style={styles.anchor} href='/portfolio'>Portfolio</a>
        <a style={styles.anchor} href="/">Home</a>
      </nav>
    </div>
  );
}

export default Nav;
