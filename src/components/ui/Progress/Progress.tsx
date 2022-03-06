import { FC, useCallback, useState } from "react"

interface ProgressProps {
  className?: string
}

export const Progress: FC<ProgressProps> = () => {
  const [value, setValue] = useState(0)

  const plus = useCallback(() => {
    if (value < 100) setValue((value) => value + 10)
  }, [value])

  const minus = useCallback(() => {
    if (value > 0) setValue((value) => value - 10)
  }, [value])

  return (
    <div>
      <progress
        className="w-56 progress progress-info"
        value={value}
        max="100"
      />
      <kbd className="kbd">{value}</kbd>
      <div>
        <kbd className="kbd" onClick={plus}>
          +
        </kbd>
        <kbd className="kbd" onClick={minus}>
          -
        </kbd>
      </div>
    </div>
  )
}
