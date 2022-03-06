import { ChangeEvent, FC, useState } from "react"

interface RangeProps {
  className?: string
}

export const Range: FC<RangeProps> = ({ children, className }) => {
  const [value, setValue] = useState(40)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.valueAsNumber)
  }

  return (
    <div className="flex items-center">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="mr-2 max-w-md range"
        onChange={handleChange}
      />
      <kbd className="kbd">{value}</kbd>
    </div>
  )
}
