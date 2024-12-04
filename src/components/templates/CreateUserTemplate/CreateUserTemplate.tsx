import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_USER, LIST_USERS } from "../../../data/graphql/queries";
import { validateUserDataForm } from "../../../util/validations";
import UserForm from "../../organisms/UserForm/UserForm";
import { useNavigate } from "react-router";

export default function CreateUserTemplate() {
  const [formInitialValues] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    identificationNumber: "",
    identificationType: "",
  });

  const navigate = useNavigate();

  // Mutación para crear usuarios
  const [createUser] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: LIST_USERS }], // Actualiza la lista de usuarios después de crear uno nuevo
  });

  const handleOnSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await createUser({
        variables: {
          ...values,
          age: parseInt(values.age, 10), // Asegura que la edad sea un número
        },
      });
      console.log("Usuario creado:", values);
      resetForm(); // Limpia el formulario después de enviar los datos
      navigate("/");
    } catch (error) {
      console.error("Error al crear usuario:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-xl w-11/12 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="heading-2 font-semibold text-center mb-6">
          Crear Usuario
        </h2>
        <UserForm
          initialValues={formInitialValues}
          onSubmit={handleOnSubmit}
          validate={(values) => validateUserDataForm(values)}
        />
      </div>
    </div>
  );
}
