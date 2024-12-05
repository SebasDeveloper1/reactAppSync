import { useQuery, useMutation } from "@apollo/client";
import { LIST_USERS, DELETE_USER } from "../../../data/graphql/queries";
import { User } from "../../../models/user.model";
import { Link } from "react-router";
import UserList from "../../organisms/UserList/UserList";

export default function HomeTemplate() {
  // Hook para obtener todos los usuarios
  const {
    data: usersData,
    loading,
    error,
    refetch,
  } = useQuery<{
    listUsers: User[];
  }>(LIST_USERS);

  // Mutación para eliminar usuarios
  const [deleteUser] = useMutation(DELETE_USER);

  // Función para eliminar un usuario
  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser({ variables: { id } });
      refetch(); // Refresca la lista de usuarios después de eliminar
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="w-full">
        <header className="flex flex-col justify-center items-center gap-4 w-full py-8 bg-slate-800">
          <h1 className="heading-1 font-semibold text-center text-white">
            Administrador de Usuarios
          </h1>
          <Link to={"/create-user"} className="button-primary padding-button">
            Crear usuario
          </Link>
        </header>

        {/* Lista de usuarios */}
        <div className="flex justify-center items-center w-full py-8">
          <div className="flex flex-col w-11/12 gap-8">
            <h2 className="heading-2 font-semibold">Lista de usuarios</h2>
            {loading && <p className="span-md text-center">Cargando...</p>}
            {error && (
              <p className="span-md text-center text-red-500">
                Error: {error.message}
              </p>
            )}
            <UserList
              usersData={usersData}
              handleDeleteUser={handleDeleteUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
