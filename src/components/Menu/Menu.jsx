import "./Menu.css";

export default function Menu() {

  function menuInteraction(element){
    element.classList.toggle("menu-opened")
  }

  return (
    <div className="component-container">
      <nav className="menu-container">
        <ul className="menu">
          <li className="menu-item logo-container">
            <img src="./src/assets/images/logo.svg" />
            <img
              className="close-menu"
              src="./src/assets/images/icon-close.svg"
              onClick={() => menuInteraction(document.querySelector('.sub-menu-container'))}
            />
          </li>
          <li className="menu-item sub-menu-container">
            <ul className="sub-menu">
              <li className="sub-menu-item">
                <a href="#">Home</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">About</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Blog</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Careers</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <button>Request Intive</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
