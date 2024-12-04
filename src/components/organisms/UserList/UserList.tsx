import React from "react";
import Button from "../../atoms/Button/Button";

export default function UserList({ usersData, handleDeleteUser }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-4 bg-white shadow-lg rounded-md">
      {usersData?.listUsers?.length ? (
        usersData.listUsers.map((user) => (
          <li key={user.id} className="flex gap-4 p-3 bg-slate-100 rounded-md">
            <div className="flex flex-col w-full">
              <h3 className="heading-3 font-semibold text-blue-500 capitalize mb-2">
                {user.name}
              </h3>
              <span className="span-sm">
                <span className="font-semibold mr-1">Correo: </span>
                {user.email}
              </span>
              <span className="span-sm">
                <span className="font-semibold mr-1">Edad: </span>
                {user.age}
              </span>
              <span className="span-sm">
                <span className="font-semibold mr-1">Dirección: </span>
                {user.address}
              </span>
              <span className="span-sm">
                <span className="font-semibold mr-1">
                  Tipo de identificación:
                </span>
                {user.identificationType}
              </span>
              <span className="span-sm">
                <span className="font-semibold mr-1">
                  Número de identificación:
                </span>
                {user.identificationNumber}
              </span>
            </div>
            <Button
              handleOnClick={() => handleDeleteUser(user.id)}
              className="w-fit h-fit bg-red-500 hover:bg-red-600"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                  />
                </svg>
              }
            />
          </li>
        ))
      ) : (
        <li className="flex justify-center items-center w-full p-4  bg-slate-100 rounded-md">
          <span className="span-lg font-medium text-slate-700">
            ¡No hay usuarios registrados!
          </span>
        </li>
      )}
    </ul>
  );
}
