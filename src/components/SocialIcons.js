const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/SHAJLP">
        <i className="fa-brands fa-github" aria-hidden="true" title="SHAJLP' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/SophiaAltaf/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Sophia Altaf' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/sophia7373/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="sophia7373' Instagram Profile"></i>
      </a>
     
    </div>
  );
};

export default SocialIcons;
