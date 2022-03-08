import { ComponentType } from 'react'

import { Icon } from '../../icons'
import { IconNames } from '../../icons/icons'

import * as Styles from './styles'

interface ProjectItemProps {
  icon: IconNames,
  title: string,
  description: string,
  link: string,
  languageName: string[],
}

export function ProjectItem({icon,  ...props}: ProjectItemProps) {
  
  return(
    <Styles.ProjectItem>
      <div className="header-project">
        <Icon name={icon}/>
        <strong><a href={props.link} target="_blank" className="link-title">{props.title}</a></strong>
      </div>
      <div className="description">
        <span>{props.description}</span>  
      </div>
      <div className="footer-project">
        {props.languageName}                   
      </div>

    </Styles.ProjectItem>
  )
}