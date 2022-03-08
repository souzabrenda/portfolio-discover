import { RecentPost } from './RecentPost'
import { ProjectItem } from './ProjectItem'

import * as Styles from './styles'

import { ReactComponent as FolderSvg } from '../../assets/folder.svg'
import { ReactComponent as StarSvg } from '../../assets/star.svg'
import { ReactComponent as BranchesSvg } from '../../assets/git-branch.svg'
import { ReactComponent as LanguageIcon } from '../../assets/elipse.svg'
import { ComponentProps } from 'react'


type ProjectItemProps = ComponentProps<typeof ProjectItem>


export function Feed() {

  const projectItem: ProjectItemProps[] = [
    {
      icon: 'folder',
      title: 'Rocket NFTs',
      description: 'Landing Page sobre NFTs, proposta pela Rocketseat no programa Discover',
      link: "https://souzabrenda.github.io/RocketNFTs/",
      languageName: ['HTML |', ' CSS'],
    },
    {
      icon: 'folder',
      title: 'The Cafe',
      description: 'UI Clone de uma Landing Page de cafeteria. O template original está disponível na W3Schools, onde você encontra diversos desafios e projetos para exercitar seus conhecimentos.',
      link: "https://souzabrenda.github.io/uiClone/",
      languageName: ['HTML |', ' CSS |', ' Javascript'],
    }
  ]

  const renderProjectItem = projectItem.map((value, index) => {
    return (
      <ProjectItem
        icon={value.icon}
        title={value.title}
        description={value.description}
        link={value.link}
        languageName={value.languageName}
      />
    )
  })

  return(
    <Styles.Feed>
      <div className="header-feed">
        <strong>My Projects</strong>
        <a href="https://github.com/souzabrenda?tab=repositories" target="_blank">Veja todos</a>
      </div>
      <Styles.Container>
        {renderProjectItem}
      </Styles.Container>
    </Styles.Feed>
  )
}