import { FC } from "react"

interface AvatarProps {
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ children, className }) => {
  return (
    <div className="-space-x-6 avatar-group">
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=53273" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=91831" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=27312" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=26448" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=53273" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=91831" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=27312" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=26448" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=53273" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=91831" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=27312" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=26448" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=53273" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=91831" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=27312" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src="https://api.lorem.space/image/face?hash=26448" />
        </div>
      </div>
    </div>
  )
}
