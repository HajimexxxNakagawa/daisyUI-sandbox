import { FC, VFC } from "react"

interface TableProps {
  className?: string
}

type TableItem = {
  avatar: string
  name: string
  country: string
  office: string
  job: string
  favoriteColor: string
}

const A: TableItem = {
  avatar: "https://api.lorem.space/image/face?hash=53273",
  name: "Hart Hagerty",
  country: "United States",
  office: "Zemlak, Daniel and Leannon",
  job: "Desktop Support Technician",
  favoriteColor: "Purple",
}
const B: TableItem = {
  avatar: "https://api.lorem.space/image/face?hash=91831",
  name: "Brice Swyre",
  country: "China",
  office: "Carroll Group",
  job: "Tax Accountant",
  favoriteColor: "Red",
}
const C: TableItem = {
  avatar: "https://api.lorem.space/image/face?hash=27312",
  name: "Marjy Ferencz",
  country: "Russia",
  office: "Rowe-Schoen",
  job: "Office Assistant I",
  favoriteColor: "Crimson",
}
const D: TableItem = {
  avatar: "https://api.lorem.space/image/face?hash=26448",
  name: "Yancy Tear",
  country: "Brazil",
  office: "Wyman-Ledner",
  job: "Community Outreach Specialist",
  favoriteColor: "Indigo",
}

const tableItems = [A, B, C, D]

interface TableItemProps {
  item: TableItem
}

const TableItem: VFC<TableItemProps> = ({ item }) => {
  const { avatar, name, country, office, job, favoriteColor } = item

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12 mask mask-squircle">
              <img src={avatar} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{country}</div>
          </div>
        </div>
      </td>
      <td>
        {office}
        <br />
        <span className="badge badge-ghost badge-sm">{job}</span>
      </td>
      <td>{favoriteColor}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}

export const Table: FC<TableProps> = ({ children, className }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((item) => (
            <TableItem item={item} key={item.name} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
