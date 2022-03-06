import { ChangeEvent, FC, useState } from "react"

interface SelectProps {
  className?: string
}

export const Select: FC<SelectProps> = ({ children, className }) => {
  const [value, setValue] = useState("未選択")

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <>
      <select
        className="w-full max-w-xs select select-bordered"
        onChange={handleChange}
      >
        <option disabled selected>
          Who shot first?
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <div className="p-2">選択中の値も別で取れます：{value}</div>
    </>
  )
}
