import { FC } from "react"

interface CodeProps {
  className?: string
}

export const Code: FC<CodeProps> = ({ children, className }) => {
  return (
    <div className="mockup-code">
      <pre data-prefix="$">
        <code>npx scaffdog generate uc</code>
      </pre>
    </div>
  )
}
