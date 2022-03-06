import { FC } from "react"

interface ButtonProps {
  className?: string
}

export const Button: FC<ButtonProps> = ({ children = "Button", className }) => {
  return <button className={`${className} btn`}>{children}</button>
}
