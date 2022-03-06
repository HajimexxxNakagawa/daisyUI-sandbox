import { FC } from "react"

interface CardProps {
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <>
      <div className="shadow-xl card bg-base-100 lg:card-side">
        <figure>
          <img
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </>
  )
}
