import { useState, VFC } from "react"

export const Swap: VFC = () => {
  const [checked, setChecked] = useState(false)
  const toggle = () => {
    setChecked((state) => !state)
    console.log({ checked })
  }

  return (
    <div>
      <label className="btn btn-circle swap swap-rotate" tabIndex={0}>
        <input type="checkbox" checked={checked} onChange={toggle} />

        <svg
          className="fill-current swap-off"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="fill-current swap-on"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      {checked && (
        <ul
          tabIndex={0}
          className="p-2 mt-4 w-52 shadow menu bg-base-100 rounded-box"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      )}
    </div>
  )
}
