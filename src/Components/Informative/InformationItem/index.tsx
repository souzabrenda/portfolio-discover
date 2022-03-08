import { ReactNode, ComponentType } from 'react'
import * as Styles from './styles'
import { IconNames } from '../../icons/icons'
import { Icon } from '../../icons'



interface InformationItemProps {
  icon: IconNames,
  link: string,
  label: string
}

export function InformationItem({icon, ...props}: InformationItemProps) {
  return (
    <Styles.InformationItem>
      <Icon name={icon} /> 
      <a href={props.link}>{props.label}</a>
      
    </Styles.InformationItem>
  )
}