import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../atoms/Button/Button";
import { Link } from "react-router";

export default function UserForm({ initialValues, onSubmit, validate }) {
  // Tipos de identificación
  const IdentificationTypes = {
    CC: "CC",
    TI: "TI",
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form className="flex justify-center flex-wrap gap-3">
        {/* Nombre */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="name" className="label-input-form">
            Nombre:
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            className="input-form"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        {/* Correo */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="email" className="label-input-form">
            Correo electrónico:
          </label>
          <Field
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            className="input-form"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        {/* Edad */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="age" className="label-input-form">
            Edad:
          </label>
          <Field
            type="number"
            name="age"
            placeholder="Ingresa tu edad"
            className="input-form"
          />
          <ErrorMessage
            name="age"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        {/* Dirección */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="address" className="label-input-form">
            Dirección:
          </label>
          <Field
            type="text"
            name="address"
            placeholder="Ingresa tu dirección"
            className="input-form"
          />
          <ErrorMessage
            name="address"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        {/* Número de identificación */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="identificationNumber" className="label-input-form">
            Número de Identificación:
          </label>
          <Field
            type="text"
            name="identificationNumber"
            placeholder="Número de identificación"
            className="input-form"
          />
          <ErrorMessage
            name="identificationNumber"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        {/* Tipo de identificación */}
        <div className="w-full md:w-[48%]">
          <label htmlFor="identificationType" className="label-input-form">
            Tipo de Identificación:
          </label>
          <Field as="select" name="identificationType" className="input-form">
            <option value="" className="text-slate-400">
              Selecciona una opción
            </option>
            {Object.entries(IdentificationTypes).map(([key, value]) => (
              <option key={key} value={value} className="uppercase">
                {value}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="identificationType"
            component="div"
            className="text-sm text-red-500 mt-1"
          />
        </div>

        <div className="flex justify-center items-center gap-4 w-full mt-8">
          {/* Botón de Guardar */}
          <Button
            type="submit"
            value="Guardar"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"
                />
              </svg>
            }
          />
          {/* Botón de Cancelar */}
          <Link to={"/"} className="button-secondary padding-button">
            Cancelar
          </Link>
        </div>
      </Form>
    </Formik>
  );
}
