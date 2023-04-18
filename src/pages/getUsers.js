import { useEffect, useState } from "react";
import { deleteUser, getUsers, updateUser } from "../api/api";

function GetUsers() {
  const [dataChanged, setDataChanged] = useState(false);

  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataChanged]);

  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleDelete = async (id) => {
    console.log(id);
    deleteUser(id)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
    setDataChanged(!dataChanged);
  };

  const handleFormUpdate = () => {
    updateUser(userData._id, userData)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    setDataChanged(!dataChanged);
    };
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <img
          className="image-fluid mr-1"
          src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
          width={50}
          height={50}
        />
        <h1>Usuarios desde MongoDB</h1>
      </div>

      <div className="mt-3">
        <button type="button" className="btn btn-primary bg-success" onClick={()=> window.location.href='/register'}>Nuevo usuario</button>
      </div>

      <div className="table-responsive mt-3">
        <table className="table">
          <thead className="thead-warning text-center">
            <tr>
              <th scope="col">_id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user?._id}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.password}</td>
                <td>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots-vertical"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </button>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button
                      className="dropdown-item"
                      onClick={() => handleDelete(user._id)}
                    >
                      Eliminar
                    </button>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-toggle="modal"
                      data-target="#miModal"
                      onClick={()=>setUserData(user)}
                    >
                      Editar
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modal" tabindex="-1" role="dialog" id="miModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar usuario</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onClick={handleFormUpdate}>
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        value={userData?._id}
                        disabled
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={userData?.name}
                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={userData?.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        value={userData?.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Guardar
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    data-dismiss="modal"
                >
                    Cerrar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetUsers;
