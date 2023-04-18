export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-success shadow-sm d-flex justify-content-between">
        <a className="navbar-brand font-weight-bold text-light " href="#">
            Ejemplo de consumir una API en React
        </a>
        <ul className="navbar-nav">
            <li className="nav-item ml-5">

          <a href="/users" className="text-decoration-none text-light">
            Usuarios
          </a>
            </li>
        </ul>
      </nav>
    </>
  );
}
