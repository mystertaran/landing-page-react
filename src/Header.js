import keyConceptsImage from "./assets/images/key-concepts.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_img"
        src={keyConceptsImage}
        alt="Medal badge with a star"
      />
      <h1 className="header_h1">Key React Concepts</h1>
      <p className="header_p">Selected key React concepts you should know about</p>
    </div>
  );
}

export default Header;
