import { FC } from "react"

interface CollapseProps {
  className?: string
}

export const Collapse: FC<CollapseProps> = ({ children, className }) => {
  return (
    <>
      <div
        tabIndex={0}
        className="max-w-sm border collapse collapse-arrow border-base-300 rounded-box"
      >
        <input type="checkbox" className="peer" />
        <div className="bg-white collapse-title text-primary-content">
          Click me to show/hide content
        </div>
        <div className="bg-white collapse-content text-primary-content">
          <p>tabindex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </>
  )
}
