import { gql } from "@apollo/client";

// Mutación para crear un usuario
export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $age: Int
    $address: String
    $identificationNumber: String
    $identificationType: String
  ) {
    createUser(
      name: $name
      email: $email
      age: $age
      address: $address
      identificationNumber: $identificationNumber
      identificationType: $identificationType
    ) {
      id
      name
      email
      age
      address
      identificationNumber
      identificationType
    }
  }
`;

// Consulta para obtener todos los usuarios
export const LIST_USERS = gql`
  query ListUsers {
    listUsers {
      id
      name
      email
      age
      address
      identificationNumber
      identificationType
    }
  }
`;

// Mutacion para eliminar un usuario
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
