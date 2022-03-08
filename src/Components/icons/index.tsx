import { icons, IconNames } from "./icons"

interface IconProps {
  name: IconNames 
}

export function Icon({name}: IconProps) {
  const Component = icons[name]
  
  return(
    <Component />
  )
}