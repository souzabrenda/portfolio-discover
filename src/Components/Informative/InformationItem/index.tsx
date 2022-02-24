import { ReactNode, ComponentType } from 'react'
import * as Styles from './styles'


interface InformationItemProps {
  icon: ComponentType<any>,
  link: string,
  label: string
}

export function InformationItem({icon: Icon, ...props}: InformationItemProps) {
  return (
    <Styles.InformationItem>
      <Icon /> 
      <a href={props.link}>{props.label}</a>
      
    </Styles.InformationItem>
  )
}