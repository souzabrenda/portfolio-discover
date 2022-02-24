import { ComponentType } from 'react'
import * as Styles from './styles'

interface ProjectItemProps {
  icon: ComponentType<any>,
  title: string,
  description: string,
  starIcon: ComponentType<any>,
  starAmount: number,
  branchesIcon: ComponentType<any>,
  branchesAmount: number,
  languageIcon: ComponentType<any>,
  languageName: string,
  link: string,
}

export function ProjectItem({icon: Icon, starIcon: StarIcon, branchesIcon: BranchesIcon, languageIcon: LanguageIcon, ...props}: ProjectItemProps) {
  
  return(
    <Styles.ProjectItem>
      <div className="header-project">
        <Icon />
        <strong><a href={props.link} target="_blank" className="link-title">{props.title}</a></strong>
      </div>
      <div className="description">
        <span>{props.description}</span>  
      </div>
      <div className="footer-project">
        <div className="f-j">
          <div className="mini-item">
            <StarIcon />
            <span>{props.starAmount}</span>
          </div>
          <div className="mini-item">
            <BranchesIcon />
            <span>{props.branchesAmount}</span>
          </div>
        </div>
        <div className="last-child">
          {props.languageName}
          <LanguageIcon />
        </div>

      </div>

    </Styles.ProjectItem>
  )
}