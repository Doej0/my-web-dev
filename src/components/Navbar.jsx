export default function Navbar() {
  return (
    //Navbar sit on top of page
    <div className="w3-top">
      <nav className="w3-bar w3-black w3-wide w3-padding w3-card">
        <a href="#home" className="w3-bar-item w3-button">
          Vee Johnson
        </a>
        
        {/* links sit to the right and hide on smaller screens */}
        <div className="w3-right w3-hide-small">
          <a href="#about" className="w3-bar-item w3-button">
            About
          </a>
          <a href="#projects" className="w3-bar-item w3-button">
            Projects
          </a>
          <a href="#contact" className="w3-bar-item w3-button">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
