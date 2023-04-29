export default function Navbar() {


  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <h1 className="navbar-item is-size-4 has-text-weight-bold has-text-primary">RESILIENCE</h1>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item has-text-primary" href="/">
          Home
        </a>

        <a className="navbar-item has-text-primary" href="/about">
          About
        </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link has-text-primary">
            More
          </a>

          <div className="navbar-dropdown">
            <a className="navbar-item" href="/nutrition">
              coming soon...
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}