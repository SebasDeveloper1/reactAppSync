import React from "react";
import { ButtonProps } from "./Button.model";

export default function Button({
  value,
  icon,
  handleOnClick,
  className = "",
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`button-primary ${
        icon && value
          ? "padding-button" // Clase para botón con texto e ícono
          : icon
          ? "padding-icon" // Clase para botón solo con ícono
          : "padding-button" // Clase para botón solo con texto
      } ${className}`}
      onClick={handleOnClick}
      {...rest}
    >
      {icon && <span>{icon}</span>}
      {value && <span>{value}</span>}
    </button>
  );
}
