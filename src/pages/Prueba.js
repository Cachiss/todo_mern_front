import { useProfile } from "../hooks/ProfileProvider"
function Prueba() {
    const { user, loading } = useProfile();
  return (
    <div>
        {user && 
            <>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user?.phone}</p>
            </>
        }
    </div>
  )
}

export default Prueba