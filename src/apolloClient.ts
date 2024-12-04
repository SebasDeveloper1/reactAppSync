// ApolloClient: para configurar el cliente de GraphQL.
// InMemoryCache: para gestionar el almacenamiento en caché de las consultas.
// createHttpLink: para crear un enlace HTTP para las solicitudes.
// setContext: para configurar y modificar el contexto de las solicitudes.
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Variables de entorno para el endpoint de GraphQL y la API Key.
const ENDPOINT_GRAPHQL_AWS = import.meta.env.VITE_ENDPOINT_GRAPHQL_AWS;
const API_KEY = import.meta.env.VITE_API_KEY_AWS;

// Configura el enlace HTTP para las solicitudes GraphQL.
const httpLink = createHttpLink({
  uri: `${ENDPOINT_GRAPHQL_AWS}`,
});

// Configura el link de autenticación para incluir la API Key en los headers de las solicitudes.
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "x-api-key": `${API_KEY}`, // Añade el header con la API Key.
  },
}));

// Cliente de Apollo.
const client = new ApolloClient({
  link: authLink.concat(httpLink), // Se construye un link apartir del endpoint y el api-key.
  cache: new InMemoryCache(),
});

export default client;
