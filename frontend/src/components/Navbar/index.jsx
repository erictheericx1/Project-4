import React from "react"


export default function Navbar() {
// found help with this navbar at https://bulma.io/documentation/components/navbar/ and https://dev.to/eclecticcoding/bulma-navbar-toogle-with-react-hooks-18ek
const [isActive, setIsActive] = React.useState(false);


  return (
    <nav className="navbar has-background-black-ter" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a 
          onClick={() => {
            setIsActive(!isActive);
          }}
        role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <a className="navbar-item has-text-grey-lighter" href="/">
            Home
          </a>

          <a className="navbar-item has-text-grey-lighter" href="/about">
            About
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-background-primary">
              Login
            </a>

            <div className="navbar-dropdown">
              <a className="navbar-item " href="/nutrition">
                coming soon...
              </a>
            </div>
          </div>
        </div>
    </div>
  </nav>
  );
}