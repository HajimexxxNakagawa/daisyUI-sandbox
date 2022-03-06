import { FC } from "react"

interface DropdownProps {
  className?: string
}

export const Dropdown: FC<DropdownProps> = () => {
  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn">Button</a>
          <div className="dropdown dropdown-right">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-4 w-52 shadow menu dropdown-content bg-base-100 rounded-box"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
