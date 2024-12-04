export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: string; // Texto del botón (opcional)
  icon?: React.ReactNode; // Ícono del botón (puede ser un elemento JSX)
  handleOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Evento clic personalizado
}
