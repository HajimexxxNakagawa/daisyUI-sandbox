import { FC } from "react"

interface IndicatorProps {
  className?: string
}

export const Indicator: FC<IndicatorProps> = ({ children, className }) => {
  return (
    <div className="indicator">
      <span className="indicator-item badge">Required</span>
      <input
        type="text"
        placeholder="Your email address"
        className="input input-bordered"
      />
    </div>
  )
}
