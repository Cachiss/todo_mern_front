export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand font-weight-bold" href="#">
            Ejemplo de consumir una API en React
        </a>
        <ul className="navbar-nav">
            <li className="nav-item ml-5">

          <a href="/users" className="text-decoration-none text-warning">
            Usuarios
          </a>
            </li>
        </ul>
      </nav>
    </>
  );
}
