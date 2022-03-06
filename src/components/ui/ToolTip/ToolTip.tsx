import { FC } from "react"

interface ToolTipProps {
  className?: string
}

export const ToolTip: FC<ToolTipProps> = ({ children, className }) => {
  return (
    <div className="tooltip tooltip-bottom" data-tip="hello">
      <button className="btn">Hover me</button>
    </div>
  )
}
