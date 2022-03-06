import { FC } from "react"

interface KbdProps {
  className?: string
}

export const Kbd: FC<KbdProps> = ({ children, className }) => {
  return (
    <>
      <div className="flex gap-1 justify-center my-1 w-full">
        <kbd className="kbd">q</kbd>
        <kbd className="kbd">w</kbd>
        <kbd className="kbd bg-primary">e</kbd>
        <kbd className="kbd">r</kbd>
        <kbd className="kbd">t</kbd>
        <kbd className="kbd">y</kbd>
        <kbd className="kbd">u</kbd>
        <kbd className="kbd bg-primary">i</kbd>
        <kbd className="kbd">o</kbd>
        <kbd className="kbd">p</kbd>
      </div>
      <div className="flex gap-1 justify-center my-1 w-full">
        <kbd className="kbd bg-primary">a</kbd>
        <kbd className="kbd">s</kbd>
        <kbd className="kbd">d</kbd>
        <kbd className="kbd">f</kbd>
        <kbd className="kbd">g</kbd>
        <kbd className="kbd bg-primary">h</kbd>
        <kbd className="kbd bg-primary">j</kbd>
        <kbd className="kbd">k</kbd>
        <kbd className="kbd">l</kbd>
      </div>
      <div className="flex gap-1 justify-center my-1 w-full">
        <kbd className="kbd">z</kbd>
        <kbd className="kbd">x</kbd>
        <kbd className="kbd">c</kbd>
        <kbd className="kbd">v</kbd>
        <kbd className="kbd">b</kbd>
        <kbd className="kbd">n</kbd>
        <kbd className="kbd bg-primary">m</kbd>
        <kbd className="kbd">/</kbd>
      </div>
    </>
  )
}
