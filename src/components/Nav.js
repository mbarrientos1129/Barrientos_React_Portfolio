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
        <a style={styles.anchor} href="">Contact Me</a>
        <a style={styles.anchor} href='Portfolio'>Portfolio</a>
        <a style={styles.anchor} href="About">About Me</a>
      </nav>
    </div>
  );
}

export default Nav;
